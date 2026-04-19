//Welcome message and prompt for user's name
var name = prompt("What is your name?");
alert("Welcome to the quiz, " + name + "! Get Ready.");

//This is an array of quiz questions and answers
const quizQuestions = [
  { question: "What color is an orange?", answer: "orange" },
  { question: "What is a baby kangaroo called?", answer: "joey" },
  { question: "What is the fastest cat on land in the world?", answer: "cheetah" },
  { question: "What is the tallest animal in the world?", answer: "giraffe" },
  { question: "What is the largest nocturnal bird in the world?", answer: "owl" }
];

//initalize variables for array and scoring
var currentQustnLctn = 0;
var score = 0;

//function ask question and check answer
function theQuestionIs() {
  var answer = prompt(quizQuestions[currentQustnLctn].question);

  //This loop checks if answer is correct and adds to score if it is, otherwise alerts 
  // user that answer is incorrect
  // toLowerCase is used to make the answer case insensitive therefore
  // allowing the user to input the answer in upper or lower case and still be correct    
  if (answer && answer.toLowerCase() === quizQuestions[currentQustnLctn].answer) {
    alert("Correct!");
    //Add 1 to score if correct
    score++;
  } else {
    //Alert user if answer is incorrect
    alert("Incorrect.");
  }
  //Add 1 to current question location of the array and go on to the next question
  currentQustnLctn++;
}
//The while loop will continue to ask each question in the array until the end of the array 
// is reached. The loop will then exit and alert the user that they have completed the quiz
// and display their score out of the number of questions asked of the quiz.


while (currentQustnLctn < quizQuestions.length) {
  theQuestionIs();
}

alert("The Quiz is completed, " + name + "! Your score is: " + score + "/" + quizQuestions.length);



