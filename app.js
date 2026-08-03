(function () {
  const STORAGE_PREFIX = "saessak-vocab-progress-v2-level-";

  const LEVELS = [
    { id: 1, name: "초급", badge: "🌱", sub: "기초 생활 단어" },
    { id: 2, name: "중급", badge: "🌿", sub: "교과서 필수 어휘" },
    { id: 3, name: "고급", badge: "🌳", sub: "심화·독해 어휘" },
  ];

  const levelScreen = document.getElementById("levelScreen");
  const levelListEl = document.getElementById("levelList");
  const progressWrap = document.getElementById("progressWrap");
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

  const poolsByLevel = {};
  LEVELS.forEach((lv) => {
    poolsByLevel[lv.id] = WORDS.filter((w) => w.level === lv.id);
  });

  let currentLevel = null;
  let pool = [];
  let state = null;
  let current = null;
  let locked = false;

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

  function loadState(levelId) {
    try {
      const raw = localStorage.getItem(storageKey(levelId));
      if (raw) {
        const parsed = JSON.parse(raw);
        const total = poolsByLevel[levelId].length;
        if (Array.isArray(parsed.queue) && parsed.queue.length + parsed.masteredCount === total) {
          return parsed;
        }
      }
    } catch (e) {}
    return null;
  }

  function newState(levelId) {
    const total = poolsByLevel[levelId].length;
    const queue = shuffle([...Array(total).keys()]);
    return { queue, masteredCount: 0, mistakeCount: 0 };
  }

  function saveState() {
    localStorage.setItem(storageKey(currentLevel), JSON.stringify(state));
  }

  function renderLevelList() {
    levelListEl.innerHTML = "";
    LEVELS.forEach((lv) => {
      const total = poolsByLevel[lv.id].length;
      const saved = loadState(lv.id);
      const mastered = saved ? saved.masteredCount : 0;
      const pct = total ? Math.round((mastered / total) * 100) : 0;

      const card = document.createElement("button");
      card.className = "level-card";
      card.innerHTML = `
        <div class="level-badge">${lv.badge}</div>
        <div class="level-info">
          <div class="level-name">${lv.name}</div>
          <div class="level-sub">${lv.sub} · ${mastered} / ${total}</div>
          <div class="level-progress-bar"><div class="level-progress-fill" style="width:${pct}%"></div></div>
        </div>
      `;
      card.addEventListener("click", () => startLevel(lv.id));
      levelListEl.appendChild(card);
    });
  }

  function showLevelScreen() {
    if (currentLevel !== null) saveState();
    currentLevel = null;
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
    state = loadState(levelId) || newState(levelId);
    saveState();

    levelScreen.classList.add("hidden");
    progressWrap.classList.remove("hidden");
    quizScreen.classList.remove("hidden");
    doneScreen.classList.add("hidden");
    resetBtn.classList.remove("hidden");

    renderQuestion();
  }

  function speak(word) {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(word);
    utter.lang = "en-US";
    utter.rate = 0.9;
    wordArea.classList.add("speaking");
    utter.onend = () => wordArea.classList.remove("speaking");
    window.speechSynthesis.speak(utter);
  }

  function updateProgress() {
    const total = pool.length;
    const pct = Math.round((state.masteredCount / total) * 100);
    progressFill.style.width = pct + "%";
    progressText.textContent = `${state.masteredCount} / ${total}`;
  }

  function pickChoices(correctIdx) {
    const options = new Set([correctIdx]);
    while (options.size < 4 && options.size < pool.length) {
      const r = Math.floor(Math.random() * pool.length);
      options.add(r);
    }
    return shuffle([...options]);
  }

  function renderQuestion() {
    if (state.queue.length === 0) {
      showDone();
      return;
    }
    locked = false;
    current = state.queue[0];
    const w = pool[current];
    wordText.textContent = w.word;
    feedbackEl.textContent = "";
    feedbackEl.className = "feedback";

    const optionIdxs = pickChoices(current);
    choicesEl.innerHTML = "";
    optionIdxs.forEach((idx) => {
      const btn = document.createElement("button");
      btn.className = "choice-btn";
      btn.textContent = pool[idx].meaning;
      btn.addEventListener("click", () => handleAnswer(idx, current, btn));
      choicesEl.appendChild(btn);
    });

    speak(w.word);
    updateProgress();
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

      state.queue.shift();
      state.masteredCount++;
    } else {
      btnEl.classList.add("wrong");
      allBtns.forEach((b) => {
        if (b.textContent === pool[correctIdx].meaning) b.classList.add("correct");
      });
      feedbackEl.textContent = `틀렸어요. 정답: ${pool[correctIdx].meaning}`;
      feedbackEl.className = "feedback wrong-msg";

      state.mistakeCount++;
      state.queue.shift();
      const reinsertAt = Math.min(
        state.queue.length,
        3 + Math.floor(Math.random() * 5)
      );
      state.queue.splice(reinsertAt, 0, correctIdx);
    }

    saveState();
    updateProgress();

    setTimeout(renderQuestion, isCorrect ? 700 : 1300);
  }

  function showDone() {
    const lv = LEVELS.find((l) => l.id === currentLevel);
    quizScreen.classList.add("hidden");
    progressWrap.classList.add("hidden");
    doneScreen.classList.remove("hidden");
    doneTitle.textContent = `${lv.name} 단어를 모두 마스터했어요!`;
    doneStats.textContent = `총 오답 횟수: ${state.mistakeCount}회`;
  }

  wordArea.addEventListener("click", () => {
    if (current !== null) speak(pool[current].word);
  });

  resetBtn.addEventListener("click", () => {
    if (confirm("이 레벨을 처음부터 다시 시작할까요? 진행 상황이 초기화됩니다.")) {
      state = newState(currentLevel);
      saveState();
      renderQuestion();
    }
  });

  restartBtn.addEventListener("click", () => {
    state = newState(currentLevel);
    saveState();
    doneScreen.classList.add("hidden");
    progressWrap.classList.remove("hidden");
    quizScreen.classList.remove("hidden");
    renderQuestion();
  });

  backBtn.addEventListener("click", showLevelScreen);
  doneBackBtn.addEventListener("click", showLevelScreen);

  showLevelScreen();
})();
