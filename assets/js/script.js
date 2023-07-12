

var correctEl = document.querySelector(".questions_correct");
var incorrectEl = document.querySelector(".questions_incorrect");
var timerEl = document.querySelector(".timer");
var startButtonEl = document.querySelector(".start-button");
var quizBoardEl = document.querySelector(".quiz-board");
var quizResultEl = document.querySelector(".quiz-board_result");
var quizDisplayEl = document.querySelector(".quiz-board_display");
var controlsEl = document.querySelector(".controls");


var correct = 0;
var incorrect = 0;  
var highScore = 0;
var timer = null;
var timeLeft = 0;
var currentQuestionIndex; 


const questionBank = [
    "Which of the following technologies is primarily used to structure a webpage? HTML. CSS. JavaScript. Node.js.",
    "Which of the following technologies is primarily used to style a webpage? Chrome. CSS. JavaScript. SQL.",
    "Which of the following technologies is primarily used to add user interactivity to a webpage? Chrome. HTML. JavaScript. CSS.",
    "array[1] will select which element in an array? The 1st. The 2nd. The 3rd. None.",
    ".light correlates with which of the following CSS selectors? class. ID. pseudo-class. element. ",
];

const duration = 20;


// Event: Page Load 




// Event: Click Start

function startQuiz(event){
    console.log("Quiz Started.")
};

startButtonEl.addEventListener("click", startQuiz);


// Event: Timer Countdown

function timerCountDown(event){
    console.log("time is ticking.");
}


// Event: Click Answer Button

function clickAnswer(event){
    console.log("button was clicked.");
}

// startButtonEl.addEventListener("click", startQuiz);   ========== will become answer button.



// Event: Game Ends

function quizOver(event){
    console.log("quiz is now over.")
}