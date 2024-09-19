const DB_QUIZ = [
  {
    question: `<p>Tentukan determinan matriks berikut: </p><div><img src="/images/det2x2.jpg" alt=""></div>`,
    answers: ["23", "14", "(-3)", "(-80)"],
  },
  {
    question: `<p>Tentukan determinan matriks berikut: </p> <div><img src="/images/det3x3.jpg"></div>`,
    answers: ["2", "0", "3", "6"],
  },
  {
    question: `<p>Tentukan hasil dari Det A - Det B matriks berikut: </p><div><img src="/images/detAB.jpg"></div>`,
    answers: ["16", "(-16)", "12", "10"],
  },
];

const CORRECT_ANSWER = [2, 1, 1];

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
      total_score += 1;
    }
  }
}

function stopQuiz() {
  checkScore();
  document.getElementById("quiz_window").style.display = "none";
  document.getElementById("closing_window").style.display = "block";
  document.getElementById("scoreText").innerText =
    "Jumlah benar: " + total_score;
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