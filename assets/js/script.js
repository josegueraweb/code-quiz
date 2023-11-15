// hooks into the DOM
var timer = document.querySelector("#timer");
var startbtn = document.querySelector("#start-btn");
var quizEndMsg = document.querySelector(".quiz-end-msg");

// state variable to keep track of time. 
var secondsLeft = 10;

questionBank = [];

// function that will start quiz game
function startGame() {
    var countdownTimer = setInterval(function () {
        quizEndMsg.textContent = " ";
        timer.textContent = "Time Remaining: " + secondsLeft;
        console.log("Time remaining: ", secondsLeft);
        secondsLeft--;
        if (secondsLeft === -2) {
            clearInterval(countdownTimer);
            timer.textContent = " ";
            quizEndMsg.textContent = "Time's Up!";
            secondsLeft = 10;
        }
    }, 1000);
};

// "click" event listener that will execute the "startGame" function when the start button is pressed. 
startbtn.addEventListener("click", startGame);