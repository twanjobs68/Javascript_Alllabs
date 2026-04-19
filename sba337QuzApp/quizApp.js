var name = prompt("What is your name?");
alert("Welcome to the quiz, " + name + "! Get Ready.");

const quizQuestions = [
  { question: "What color is an orange?", answer: "orange" },
  { question: "What is a baby kangaroo called?", answer: "joey" },
  { question: "What is the fastest cat on land in the world?", answer: "cheetah" },
  { question: "What is the tallest animal in the world?", answer: "giraffe" },
  { question: "What is the largest nocturnal bird in the world?", answer: "owl" }
];

var currentQuestionIndex = 0;
var score = 0;

function askQuestion() {
  var answer = prompt(quizQuestions[currentQuestionIndex].question);
  if (answer && answer.toLowerCase() === quizQuestions[currentQuestionIndex].answer) {
    alert("Correct!");
    score++;
  } else {
    alert("Incorrect.");
  }
  currentQuestionIndex++;
}

while (currentQuestionIndex < quizQuestions.length) {
  askQuestion();
}

alert("Quiz completed, " + name + "! Your score is: " + score + "/" + quizQuestions.length);
}


