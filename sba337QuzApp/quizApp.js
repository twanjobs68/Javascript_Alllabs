//Welcome message and prompt for user's name
let name = prompt("What is your name?");
alert("Welcome to the quiz, " + name + "! Get Ready.");

//This is an array of quiz questions and answers
const quizQuestions = [
  { question: "What color is an orange?", answer: "orange" },
  { question: "What is a baby kangaroo called?", answer: "joey" },
  {
    question: "What is the fastest cat on land in the world?",
    answer: "cheetah",
  },
  { question: "What is the tallest animal in the world?", answer: "giraffe" },
  {
    question: "What is the largest nocturnal bird in the world?",
    answer: "owl",
  },
];

//initalize variables for array and scoring
let currentQustnLctn = 0; //This variable keeps track of the current question in the array
let score = 0; //Varialbe to keep track of users score.
let stopQuiz = false; //If the user selects cancel during the quiz, this variable will be
// set to true and the quiz will end.

//function ask question and check answer
function theQuestionIs() {
  //Added try catch logic to catch any errors that might happen during the quiz and
  // send an alert to the user if an error happens.
  // Explanation from Lab 337 notes- This logic is to prevent the quiz from crashing
  // and to give the user feedback if something goes wrong.
  try {
    let answer = prompt(quizQuestions[currentQustnLctn].question);

    if (answer === null) {
      alert(
        "Quiz has been cancelled. Your score is: " +
          score +
          "/" +
          quizQuestions.length,
      );
      stopQuiz = true;
      return; //stop the function if the user selects cancel
    }

    //This loop checks if answer is correct and adds to score if it is, otherwise alerts
    // user that answer is incorrect
    // toLowerCase is used to make the answer case insensitive therefore
    // allowing the user to input the answer in upper or lower case and still be correct
    if (
      answer &&
      answer.toLowerCase() === quizQuestions[currentQustnLctn].answer
    ) {
      alert("Correct!");
      //Add 1 to score if correct
      score++;
    } else {
      //Alert user if answer is incorrect
      alert("Incorrect.");
    }
    //Add 1 to current question location of the array and go on to the next question
    currentQustnLctn++;
  } catch (error) {
    alert("An error occurred during the quiz. Please try again.");
    stopQuiz = true; //stop the quiz if an error occurs
  }
}
//The while loop will continue to ask each question in the array until the end of the array
// is reached. The loop will then exit and alert the user that they have completed the quiz
// and display their score out of the number of questions asked of the quiz.
let tryAgain = true;
while (tryAgain) {
  currentQustnLctn = 0;
  score = 0;
  stopQuiz = false;//reset all quiz variables to start the new quiz

  while (currentQustnLctn < quizQuestions.length && !stopQuiz) {
    theQuestionIs();
  }

  alert(
    "ALL DONE!! Great job, " +
      name +
      "! Your score is: " +
      score +
      "/" +
      quizQuestions.length,
  );
  //This code ask the user if they want to play again and resets the quiz questions and score to 0
  // if they select OK, otherwise it will end the quiz if they select cancel.

  tryAgain = confirm(
    "Do youu want to play again? Click OK for yes, Cancel for no",
  );
}
