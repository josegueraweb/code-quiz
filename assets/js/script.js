var quizBoardEl = document.querySelector(".quiz-board");
var quizTimerEl = document.querySelector(".quiz-timer");
var startButtonEl = document.querySelector("#start-button");
var answerButtonEl = document.querySelector(".button-answer");
var scoreEl = document.querySelector(".score");
var quizControlsEl = document.querySelector(".quiz-controls");

var duration = 20;
var scoreEl = 0;
var currentQuestionIndex;

var questionBank = [
    "Which of the following technologies is primarily used to structure a webpage? HTML. CSS. JavaScript. Node.js.",

    "Which of the following technologies is primarily used to style a webpage? Chrome. CSS. JavaScript. SQL.",

    "Which of the following technologies is primarily used to add user interactivity to a webpage? Chrome. HTML. JavaScript. CSS.",

    "array[1] will select which element in an array? The 1st. The 2nd. The 3rd. None.",

    ".light correlates with which of the following CSS selectors? class. ID. pseudo-class. element. ",
];

// // Event: Page Load 

function init() {
    console.log("Quiz loading...");
}

    // Get data from persistence
    // var scores = JSON.parse(localStorage.getItem(storageKey));

// Event: Click Start

function startQuiz() {
    console.log("Quiz Started.")
        countDown = setInterval(timerCountDown, 1000);

        function timerCountDown() {
            console.log("tick");
            duration--;
            quizTimerEl.textContent = "Time Left: " + duration
            if (duration === 0) {
                quizOver(false);
                duration = null;
                var quizOverText = document.createElement("h1");
                quizOverText.textContent = "QUIZ OVER!"
                document.body.appendChild(quizOverText);
            }
        }
    
        timerCountDown();

        hideElement(startButtonEl);
        hideElement(quizResultEl);
        showElement(duration);
        showElement(quizBoardEl);
    }

// Event: Click Answer Button

function clickAnswer(event){
    console.log("answer button clicked");
}

startButtonEl.addEventListener("click", startQuiz);

answerButtonEl.addEventListener("click", clickAnswer);

// Event: Game Ends

    function quizOver(Win) {
        clearInterval(countDown);
        duration = null;
        hideElement(quizTimerEl);
        console.log("Quiz has ended.");

    }

    function hideElement(element) {
        element.classList.add("hide");
    }

    function showElement(element) {
        element.classList.remove("hide");
    }

init();