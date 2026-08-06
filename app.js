(function () {
  const STORAGE_PREFIX = "saessak-vocab-progress-v3-level-";
  const ROUND_SIZE = 30;
  const REVIEW_INTERVALS_DAYS = [1, 2, 4, 7, 15, 30];
  const DAY_MS = 24 * 60 * 60 * 1000;

  const LEVELS = [
    { id: 1, name: "초급", badge: "🌱", sub: "기초 생활 단어" },
    { id: 2, name: "중급", badge: "🌿", sub: "교과서 필수 어휘" },
    { id: 3, name: "고급", badge: "🌳", sub: "심화·독해 어휘" },
  ];

  const levelScreen = document.getElementById("levelScreen");
  const levelListEl = document.getElementById("levelList");
  const progressWrap = document.getElementById("progressWrap");
  const roundLabel = document.getElementById("roundLabel");
  const wordArea = document.getElementById("wordArea");
  const wordText = document.getElementById("wordText");
  const choicesEl = document.getElementById("choices");
  const feedbackEl = document.getElementById("feedback");
  const progressFill = document.getElementById("progressFill");
  const progressText = document.getElementById("progressText");
  const quizScreen = document.getElementById("quizScreen");
  const doneScreen = document.getElementById("doneScreen");
  const doneTitle = document.getElementById("doneTitle");
  const doneStats = document.getElementById("doneStats");
  const resetBtn = document.getElementById("resetBtn");
  const restartBtn = document.getElementById("restartBtn");
  const backBtn = document.getElementById("backBtn");
  const doneBackBtn = document.getElementById("doneBackBtn");
  const hintBtn = document.getElementById("hintBtn");
  const hintText = document.getElementById("hintText");
  const slowBtn = document.getElementById("slowBtn");
  const wordHint = document.getElementById("wordHint");
  const directionTag = document.getElementById("directionTag");

  const poolsByLevel = {};
  LEVELS.forEach((lv) => {
    poolsByLevel[lv.id] = WORDS.filter((w) => w.level === lv.id);
  });

  let currentLevel = null;
  let pool = [];
  let state = null;
  let current = null;
  let locked = false;
  let hintUsed = false;
  let direction = "forward";

  let mode = "round"; // "round" | "wrongnote" | "srs"
  let reviewQueue = [];
  let reviewTotal = 0;
  let srsQueue = [];
  let srsTotal = 0;

  let audioCtx = null;
  let preferredVoice = null;

  function scoreVoice(v) {
    const name = v.name.toLowerCase();
    if (name.includes("online") && name.includes("natural")) return 4;
    if (name.includes("google")) return 3;
    if (name.includes("natural") || name.includes("neural")) return 2;
    if (v.lang && v.lang.toLowerCase() === "en-us") return 1;
    return 0;
  }

  function refreshPreferredVoice() {
    if (!("speechSynthesis" in window)) return;
    const voices = window.speechSynthesis.getVoices();
    const enVoices = voices.filter((v) => v.lang && v.lang.toLowerCase().startsWith("en"));
    if (!enVoices.length) return;
    enVoices.sort((a, b) => scoreVoice(b) - scoreVoice(a));
    preferredVoice = enVoices[0];
  }

  if ("speechSynthesis" in window) {
    refreshPreferredVoice();
    window.speechSynthesis.onvoiceschanged = refreshPreferredVoice;
  }

  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function storageKey(levelId) {
    return STORAGE_PREFIX + levelId;
  }

  function totalRoundsFor(levelId) {
    return Math.ceil(poolsByLevel[levelId].length / ROUND_SIZE);
  }

  function roundWords(levelId, roundIdx, order) {
    return order.slice(roundIdx * ROUND_SIZE, (roundIdx + 1) * ROUND_SIZE);
  }

  function totalMasteredFor(st) {
    return st.currentRoundIndex * ROUND_SIZE + st.roundMasteredCount;
  }

  function loadState(levelId) {
    try {
      const raw = localStorage.getItem(storageKey(levelId));
      if (raw) {
        const parsed = JSON.parse(raw);
        const total = poolsByLevel[levelId].length;
        if (
          Array.isArray(parsed.order) &&
          parsed.order.length === total &&
          Array.isArray(parsed.roundQueue) &&
          Array.isArray(parsed.wrongEver) &&
          typeof parsed.currentRoundIndex === "number"
        ) {
          return parsed;
        }
      }
    } catch (e) {}
    return null;
  }

  function newState(levelId) {
    const total = poolsByLevel[levelId].length;
    const order = shuffle([...Array(total).keys()]);
    return {
      order,
      currentRoundIndex: 0,
      roundQueue: shuffle([...roundWords(levelId, 0, order)]),
      roundMasteredCount: 0,
      mistakeCount: 0,
      wrongEver: [],
      reviewBox: {},
    };
  }

  function saveState() {
    localStorage.setItem(storageKey(currentLevel), JSON.stringify(state));
  }

  function scheduleReview(idx, box) {
    const clamped = Math.min(box, REVIEW_INTERVALS_DAYS.length - 1);
    state.reviewBox[idx] = {
      box: clamped,
      nextReviewAt: Date.now() + REVIEW_INTERVALS_DAYS[clamped] * DAY_MS,
    };
  }

  function dueReviewIndices(reviewBox) {
    const now = Date.now();
    return Object.keys(reviewBox)
      .map((k) => Number(k))
      .filter((idx) => reviewBox[idx].nextReviewAt <= now);
  }

  function playCorrectSound() {
    try {
      if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const now = audioCtx.currentTime;
      const notes = [
        { freq: 880, start: 0, dur: 0.14 },
        { freq: 1318.5, start: 0.09, dur: 0.22 },
      ];
      notes.forEach((n) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = "sine";
        osc.frequency.value = n.freq;
        const start = now + n.start;
        gain.gain.setValueAtTime(0.0001, start);
        gain.gain.exponentialRampToValueAtTime(0.28, start + 0.015);
        gain.gain.exponentialRampToValueAtTime(0.0001, start + n.dur);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(start);
        osc.stop(start + n.dur + 0.03);
      });
    } catch (e) {}
  }

  function renderLevelList() {
    levelListEl.innerHTML = "";
    LEVELS.forEach((lv) => {
      const total = poolsByLevel[lv.id].length;
      const saved = loadState(lv.id);
      const mastered = saved ? totalMasteredFor(saved) : 0;
      const wrongCount = saved ? saved.wrongEver.length : 0;
      const dueCount = saved ? dueReviewIndices(saved.reviewBox || {}).length : 0;
      const pct = total ? Math.round((mastered / total) * 100) : 0;
      const totalRounds = totalRoundsFor(lv.id);
      const roundNo = saved ? Math.min(saved.currentRoundIndex + 1, totalRounds) : 1;

      const card = document.createElement("button");
      card.className = "level-card";
      card.innerHTML = `
        <div class="level-badge">${lv.badge}</div>
        <div class="level-info">
          <div class="level-name">${lv.name}</div>
          <div class="level-sub">${lv.sub} · ${mastered} / ${total} · 회차 ${roundNo}/${totalRounds}</div>
          <div class="level-progress-bar"><div class="level-progress-fill" style="width:${pct}%"></div></div>
          <div class="level-chip-row"></div>
        </div>
      `;
      card.addEventListener("click", () => startLevel(lv.id));

      const chipRow = card.querySelector(".level-chip-row");

      if (dueCount > 0) {
        const reviewBtn = document.createElement("button");
        reviewBtn.className = "review-note-btn";
        reviewBtn.textContent = `🔁 복습 (${dueCount})`;
        reviewBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          startSrsReview(lv.id);
        });
        chipRow.appendChild(reviewBtn);
      }

      if (wrongCount > 0) {
        const wrongBtn = document.createElement("button");
        wrongBtn.className = "wrong-note-btn";
        wrongBtn.textContent = `오답노트 (${wrongCount})`;
        wrongBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          startWrongReview(lv.id);
        });
        chipRow.appendChild(wrongBtn);
      }

      levelListEl.appendChild(card);
    });
  }

  function ensureReviewBox(st) {
    if (!st.reviewBox) st.reviewBox = {};
    return st;
  }

  function showLevelScreen() {
    if (currentLevel !== null) saveState();
    currentLevel = null;
    mode = "round";
    renderLevelList();
    levelScreen.classList.remove("hidden");
    progressWrap.classList.add("hidden");
    quizScreen.classList.add("hidden");
    doneScreen.classList.add("hidden");
    resetBtn.classList.add("hidden");
  }

  function startLevel(levelId) {
    currentLevel = levelId;
    pool = poolsByLevel[levelId];
    state = ensureReviewBox(loadState(levelId) || newState(levelId));
    saveState();
    mode = "round";

    levelScreen.classList.add("hidden");
    progressWrap.classList.remove("hidden");
    quizScreen.classList.remove("hidden");
    doneScreen.classList.add("hidden");
    resetBtn.classList.remove("hidden");

    renderQuestion();
  }

  function startWrongReview(levelId) {
    currentLevel = levelId;
    pool = poolsByLevel[levelId];
    state = ensureReviewBox(loadState(levelId) || newState(levelId));
    if (!state.wrongEver.length) return;
    mode = "wrongnote";
    reviewQueue = shuffle([...state.wrongEver]);
    reviewTotal = reviewQueue.length;

    levelScreen.classList.add("hidden");
    progressWrap.classList.remove("hidden");
    quizScreen.classList.remove("hidden");
    doneScreen.classList.add("hidden");
    resetBtn.classList.add("hidden");

    renderQuestion();
  }

  function startSrsReview(levelId) {
    currentLevel = levelId;
    pool = poolsByLevel[levelId];
    state = ensureReviewBox(loadState(levelId) || newState(levelId));
    const due = dueReviewIndices(state.reviewBox);
    if (!due.length) return;
    mode = "srs";
    srsQueue = shuffle(due);
    srsTotal = srsQueue.length;

    levelScreen.classList.add("hidden");
    progressWrap.classList.remove("hidden");
    quizScreen.classList.remove("hidden");
    doneScreen.classList.add("hidden");
    resetBtn.classList.add("hidden");

    renderQuestion();
  }

  function speak(word, rate) {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(word);
    utter.lang = "en-US";
    if (preferredVoice) utter.voice = preferredVoice;
    utter.rate = rate || 0.9;
    wordArea.classList.add("speaking");
    utter.onend = () => wordArea.classList.remove("speaking");
    window.speechSynthesis.speak(utter);
  }

  function updateProgress() {
    if (mode === "wrongnote") {
      const done = reviewTotal - reviewQueue.length;
      roundLabel.textContent = "📝 오답노트 복습";
      progressText.textContent = `${done} / ${reviewTotal}`;
      progressFill.style.width = reviewTotal ? Math.round((done / reviewTotal) * 100) + "%" : "0%";
    } else if (mode === "srs") {
      const done = srsTotal - srsQueue.length;
      roundLabel.textContent = "🔁 복습";
      progressText.textContent = `${done} / ${srsTotal}`;
      progressFill.style.width = srsTotal ? Math.round((done / srsTotal) * 100) + "%" : "0%";
    } else {
      const totalRounds = totalRoundsFor(currentLevel);
      const roundSize = roundWords(currentLevel, state.currentRoundIndex, state.order).length;
      roundLabel.textContent = `회차 ${state.currentRoundIndex + 1} / ${totalRounds}`;
      progressText.textContent = `${state.roundMasteredCount} / ${roundSize}`;
      progressFill.style.width = roundSize ? Math.round((state.roundMasteredCount / roundSize) * 100) + "%" : "0%";
    }
  }

  function pickChoices(correctIdx) {
    const options = new Set([correctIdx]);
    while (options.size < 4 && options.size < pool.length) {
      const r = Math.floor(Math.random() * pool.length);
      options.add(r);
    }
    return shuffle([...options]);
  }

  function resetHint() {
    hintUsed = false;
    hintBtn.disabled = false;
    hintText.classList.add("hidden");
    hintText.textContent = "";
  }

  function renderQuestion() {
    if (mode === "wrongnote") {
      if (reviewQueue.length === 0) {
        showReviewDone();
        return;
      }
      current = reviewQueue[0];
    } else if (mode === "srs") {
      if (srsQueue.length === 0) {
        showSrsDone();
        return;
      }
      current = srsQueue[0];
    } else {
      if (state.roundQueue.length === 0) {
        handleRoundComplete();
        return;
      }
      current = state.roundQueue[0];
    }

    locked = false;
    resetHint();
    direction = Math.random() < 0.5 ? "forward" : "reverse";
    const w = pool[current];

    if (direction === "forward") {
      wordText.textContent = w.word;
      wordText.classList.remove("reverse-text");
      wordHint.classList.remove("hidden");
      slowBtn.classList.remove("hidden");
      wordArea.classList.remove("no-audio");
      directionTag.textContent = "단어 → 뜻";
    } else {
      wordText.textContent = w.meaning;
      wordText.classList.add("reverse-text");
      wordHint.classList.add("hidden");
      slowBtn.classList.add("hidden");
      wordArea.classList.add("no-audio");
      directionTag.textContent = "뜻 → 단어";
    }

    feedbackEl.textContent = "";
    feedbackEl.className = "feedback";

    const optionIdxs = pickChoices(current);
    choicesEl.innerHTML = "";
    optionIdxs.forEach((idx) => {
      const btn = document.createElement("button");
      btn.className = "choice-btn";
      btn.textContent = direction === "forward" ? pool[idx].meaning : pool[idx].word;
      btn.addEventListener("click", () => handleAnswer(idx, current, btn));
      choicesEl.appendChild(btn);
    });

    if (direction === "forward") speak(w.word);
    updateProgress();
  }

  function correctDisplay(idx) {
    return direction === "forward" ? pool[idx].meaning : pool[idx].word;
  }

  function addWrong(idx) {
    if (!state.wrongEver.includes(idx)) state.wrongEver.push(idx);
  }

  function removeWrong(idx) {
    const i = state.wrongEver.indexOf(idx);
    if (i > -1) state.wrongEver.splice(i, 1);
  }

  function handleAnswer(selectedIdx, correctIdx, btnEl) {
    if (locked) return;
    locked = true;

    const allBtns = [...choicesEl.querySelectorAll(".choice-btn")];
    allBtns.forEach((b) => b.classList.add("disabled"));

    const isCorrect = selectedIdx === correctIdx;

    if (isCorrect) {
      btnEl.classList.add("correct");
      feedbackEl.textContent = "정답이에요! 🎉";
      feedbackEl.className = "feedback correct-msg";
      playCorrectSound();

      if (mode === "wrongnote") {
        reviewQueue.shift();
        removeWrong(correctIdx);
      } else if (mode === "srs") {
        srsQueue.shift();
        const info = state.reviewBox[correctIdx];
        scheduleReview(correctIdx, (info ? info.box : 0) + 1);
      } else {
        state.roundQueue.shift();
        state.roundMasteredCount++;
        scheduleReview(correctIdx, 0);
      }
    } else {
      btnEl.classList.add("wrong");
      allBtns.forEach((b) => {
        if (b.textContent === correctDisplay(correctIdx)) b.classList.add("correct");
      });
      feedbackEl.textContent = `틀렸어요. 정답: ${correctDisplay(correctIdx)}`;
      feedbackEl.className = "feedback wrong-msg";

      if (mode === "wrongnote") {
        const reinsertAt = Math.min(reviewQueue.length, 3 + Math.floor(Math.random() * 5));
        reviewQueue.splice(0, 1);
        reviewQueue.splice(reinsertAt, 0, correctIdx);
      } else if (mode === "srs") {
        const reinsertAt = Math.min(srsQueue.length, 3 + Math.floor(Math.random() * 5));
        srsQueue.splice(0, 1);
        srsQueue.splice(reinsertAt, 0, correctIdx);
        addWrong(correctIdx);
        scheduleReview(correctIdx, 0);
      } else {
        state.mistakeCount++;
        addWrong(correctIdx);
        state.roundQueue.shift();
        const reinsertAt = Math.min(state.roundQueue.length, 3 + Math.floor(Math.random() * 5));
        state.roundQueue.splice(reinsertAt, 0, correctIdx);
      }
    }

    saveState();
    updateProgress();

    setTimeout(renderQuestion, isCorrect ? 700 : 1300);
  }

  function handleRoundComplete() {
    const totalRounds = totalRoundsFor(currentLevel);
    if (state.currentRoundIndex + 1 < totalRounds) {
      feedbackEl.textContent = "🎉 회차 클리어! 다음 회차로 넘어가요";
      feedbackEl.className = "feedback correct-msg";
      choicesEl.innerHTML = "";
      wordText.textContent = "";
      setTimeout(() => {
        state.currentRoundIndex++;
        state.roundQueue = shuffle([...roundWords(currentLevel, state.currentRoundIndex, state.order)]);
        state.roundMasteredCount = 0;
        saveState();
        renderQuestion();
      }, 1300);
    } else {
      showDone();
    }
  }

  function showDone() {
    const lv = LEVELS.find((l) => l.id === currentLevel);
    quizScreen.classList.add("hidden");
    progressWrap.classList.add("hidden");
    doneScreen.classList.remove("hidden");
    doneTitle.textContent = `${lv.name} 단어를 모두 마스터했어요!`;
    doneStats.textContent = `총 오답 횟수: ${state.mistakeCount}회`;
    restartBtn.classList.remove("hidden");
  }

  function showReviewDone() {
    quizScreen.classList.add("hidden");
    progressWrap.classList.add("hidden");
    doneScreen.classList.remove("hidden");
    doneTitle.textContent = "오답노트를 모두 복습했어요!";
    doneStats.textContent = "";
    restartBtn.classList.add("hidden");
  }

  function showSrsDone() {
    quizScreen.classList.add("hidden");
    progressWrap.classList.add("hidden");
    doneScreen.classList.remove("hidden");
    doneTitle.textContent = "오늘 복습을 모두 마쳤어요!";
    doneStats.textContent = "다음 복습은 며칠 뒤에 다시 찾아와요.";
    restartBtn.classList.add("hidden");
  }

  wordArea.addEventListener("click", () => {
    if (current !== null && direction === "forward") speak(pool[current].word);
  });

  slowBtn.addEventListener("click", () => {
    if (current !== null && direction === "forward") speak(pool[current].word, 0.5);
  });

  hintBtn.addEventListener("click", () => {
    if (hintUsed || current === null) return;
    hintUsed = true;
    hintBtn.disabled = true;
    if (direction === "forward") {
      const meaning = pool[current].meaning;
      hintText.textContent = `힌트: '${meaning[0]}'로 시작해요`;
    } else {
      const word = pool[current].word;
      hintText.textContent = `힌트: '${word[0].toUpperCase()}'로 시작해요`;
    }
    hintText.classList.remove("hidden");
  });

  resetBtn.addEventListener("click", () => {
    if (mode !== "round") return;
    if (confirm("이 레벨을 처음부터 다시 시작할까요? 진행 상황이 초기화됩니다.")) {
      state = newState(currentLevel);
      saveState();
      renderQuestion();
    }
  });

  restartBtn.addEventListener("click", () => {
    state = newState(currentLevel);
    saveState();
    mode = "round";
    doneScreen.classList.add("hidden");
    progressWrap.classList.remove("hidden");
    quizScreen.classList.remove("hidden");
    resetBtn.classList.remove("hidden");
    renderQuestion();
  });

  backBtn.addEventListener("click", showLevelScreen);
  doneBackBtn.addEventListener("click", showLevelScreen);

  showLevelScreen();
})();
