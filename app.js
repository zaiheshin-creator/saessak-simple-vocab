(function () {
  const STORAGE_KEY = "saessak-vocab-progress-v1";

  const wordArea = document.getElementById("wordArea");
  const wordText = document.getElementById("wordText");
  const choicesEl = document.getElementById("choices");
  const feedbackEl = document.getElementById("feedback");
  const progressFill = document.getElementById("progressFill");
  const progressText = document.getElementById("progressText");
  const quizScreen = document.getElementById("quizScreen");
  const doneScreen = document.getElementById("doneScreen");
  const doneStats = document.getElementById("doneStats");
  const resetBtn = document.getElementById("resetBtn");
  const restartBtn = document.getElementById("restartBtn");

  const TOTAL = WORDS.length;

  /** @type {{queue:number[], masteredCount:number, mistakeCount:number}} */
  let state = null;
  let current = null; // index into WORDS
  let locked = false; // true while showing answer feedback

  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed.queue) && parsed.queue.length + parsed.masteredCount === TOTAL) {
          return parsed;
        }
      }
    } catch (e) {}
    return null;
  }

  function newState() {
    const queue = shuffle([...Array(TOTAL).keys()]);
    return { queue, masteredCount: 0, mistakeCount: 0 };
  }

  function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
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
    const pct = Math.round((state.masteredCount / TOTAL) * 100);
    progressFill.style.width = pct + "%";
    progressText.textContent = `${state.masteredCount} / ${TOTAL}`;
  }

  function pickChoices(correctIdx) {
    const options = new Set([correctIdx]);
    while (options.size < 4) {
      const r = Math.floor(Math.random() * TOTAL);
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
    const w = WORDS[current];
    wordText.textContent = w.word;
    feedbackEl.textContent = "";
    feedbackEl.className = "feedback";

    const optionIdxs = pickChoices(current);
    choicesEl.innerHTML = "";
    optionIdxs.forEach((idx) => {
      const btn = document.createElement("button");
      btn.className = "choice-btn";
      btn.textContent = WORDS[idx].meaning;
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
        if (b.textContent === WORDS[correctIdx].meaning) b.classList.add("correct");
      });
      feedbackEl.textContent = `틀렸어요. 정답: ${WORDS[correctIdx].meaning}`;
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
    quizScreen.classList.add("hidden");
    doneScreen.classList.remove("hidden");
    doneStats.textContent = `총 오답 횟수: ${state.mistakeCount}회`;
  }

  function start(forceNew) {
    state = (!forceNew && loadState()) || newState();
    saveState();
    quizScreen.classList.remove("hidden");
    doneScreen.classList.add("hidden");
    renderQuestion();
  }

  wordArea.addEventListener("click", () => {
    if (current !== null) speak(WORDS[current].word);
  });

  resetBtn.addEventListener("click", () => {
    if (confirm("처음부터 다시 시작할까요? 학습 진행 상황이 초기화됩니다.")) {
      start(true);
    }
  });

  restartBtn.addEventListener("click", () => start(true));

  start(false);
})();
