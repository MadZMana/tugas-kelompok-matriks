const DB_QUIZ = [
  {
    question: `<p>Tentukan invers matriks berikut: </p><div><img src="/tugas-kelompok-matriks/images/invers1.1.jpg" alt=""></div>`,
    answers: [
      `<img src="/tugas-kelompok-matriks/images/invers1-3.jpg" alt="">`,
      `<img src="/tugas-kelompok-matriks/images/invers1-4.jpg" alt="">`,
      `<img src="/tugas-kelompok-matriks/images/invers1-1.jpg" alt="">`,
      `<img src="/tugas-kelompok-matriks/images/invers1-2.jpg" alt="">`,
    ],
  },
  {
    question: `<p>Tentukan invers matriks berikut: </p> <div><img src="/tugas-kelompok-matriks/images/invers2.jpg"></div>`,
    answers: [
      `<img src="/tugas-kelompok-matriks/images/invers2-1.jpg" alt="">`,
      `<img src="/tugas-kelompok-matriks/images/invers2-4.jpg" alt="">`,
      `<img src="/tugas-kelompok-matriks/images/invers2-3.jpg" alt="">`,
      `<img src="/tugas-kelompok-matriks/images/invers2-2.jpg" alt="">`,
    ],
  },
  {
    question: `<p>Tentukan invers matriks berikut: </p><div><img src="/tugas-kelompok-matriks/images/invers3.1.jpg"></div>`,
    answers: [
      `<img src="/tugas-kelompok-matriks/images/invers3-2.jpg" alt="">`,
      `<img src="/tugas-kelompok-matriks/images/invers3-4.jpg" alt="">`,
      `<img src="/tugas-kelompok-matriks/images/invers3-3.jpg" alt="">`,
      `<img src="/tugas-kelompok-matriks/images/invers3-1.jpg" alt="">`,
    ],
  },
];

const CORRECT_ANSWER = [2, 0, 3];

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
