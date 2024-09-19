const DB_QUIZ = [
  {
    question: `Tentukan determinan matriks berikut: <div><img src="/images/det2x2.jpg" alt=""></div>`,
    answers: ["23", "14", "(-3)", "(-80)"],
  },
  {
    question: `Tentukan determinan matriks berikut: <div><img src="/images/det3x3.jpg"></div>`,
    answers: ["Matrix", "Matris", "Matematika", "Math"],
  },
  {
    question: "Apa itu Maiks?",
    answers: ["Matrix", "Matris", "Matematika", "Math"],
  },
];

const CORRECT_ANSWER = [2, 3, 2];

function startQuiz() {
  document.getElementById("opening_window").style.display = "none";
  document.getElementById("quiz_window").style.display = "block";
}

let currentQuestion = 0;
let total_score = 0;
let saved_answer = [];

document.addEventListener("DOMContentLoaded", function event() {
  setUpQuestion();
});

function setUpQuestion() {
  document.getElementById("question").innerHTML =
    DB_QUIZ[currentQuestion]["question"];
  document.getElementById("choiceText0").innerHTML =
    DB_QUIZ[currentQuestion]["answers"][0];
  document.getElementById("choiceText1").innerHTML =
    DB_QUIZ[currentQuestion]["answers"][1];
  document.getElementById("choiceText2").innerHTML =
    DB_QUIZ[currentQuestion]["answers"][2];
  document.getElementById("choiceText3").innerHTML =
    DB_QUIZ[currentQuestion]["answers"][3];
}

function nextQuestion() {
  currentQuestion++;

  saveAnswer();

  if (currentQuestion > DB_QUIZ.length - 1) {
    stopQuiz();
  }
  resetState();
  setUpQuestion();
}

function resetState() {
  const choosedAnswer = document.querySelector('input[name="choices"]:checked');
  if (choosedAnswer != null) choosedAnswer.checked = false;
}

function checkScore() {
  for (i = 0; i < saved_answer.length; i++) {
    if (saved_answer[i] == CORRECT_ANSWER[i]) {
      total_score += 100;
    }
  }
}

function stopQuiz() {
  checkScore();
  document.getElementById("quiz_window").style.display = "none";
  document.getElementById("closing_window").style.display = "block";
  document.getElementById("scoreText").innerText =
    "Score kamu ..." + total_score;
  return;
}

function saveAnswer() {
  const answer = document.querySelector('input[name="choices"]:checked');
  if (answer != null) {
    saved_answer.push(parseInt(answer.getAttribute("data-id")));
  } else {
    saved_answer.push(null);
  }
}