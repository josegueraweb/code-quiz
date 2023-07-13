

var quizBoardEl = document.querySelector(".quiz-board");
var quizTimerEl = document.querySelector(".quiz-timer");
var startButtonEl = document.querySelector("#start-button");
var answerButtonEl = document.querySelector(".button-answer");
var scoreEl = document.querySelector(".score");
var quizControlsEl = document.querySelector(".quiz-controls");

var duration = 3;
var score = 0;
var currentQuestionIndex;  

var questionBank = [
    "Which of the following technologies is primarily used to structure a webpage? HTML. CSS. JavaScript. Node.js.",
    
    "Which of the following technologies is primarily used to style a webpage? Chrome. CSS. JavaScript. SQL.",
    
    "Which of the following technologies is primarily used to add user interactivity to a webpage? Chrome. HTML. JavaScript. CSS.",
    
    "array[1] will select which element in an array? The 1st. The 2nd. The 3rd. None.",
    
    ".light correlates with which of the following CSS selectors? class. ID. pseudo-class. element. ",
];


// // Event: Page Load 

//     // retrieve data from persistance

//     var scores = JSON.parse(localStorage.getItem("storageKey"));

//     // Update State

//     if (scores) {
//         correct = scores.correct;
//         losses = scores.losses;
//     }

//     // Update the UI
//     function updateScoreboard(){}


// Event: Click Start

function startQuiz(){
    console.log("Quiz Started.")

    countDown = setInterval(timerCountDown, 1000);

    function timerCountDown(){
        
        startButtonEl.className += "hide";
        answerButtonEl.classList.remove("hide")
        
        duration--;
        quizTimerEl.textContent = duration
        if(duration === 0) {
            clearInterval(countDown);
            
            console.log("Quiz has ended.");


            
            



        }    
    }
}

startButtonEl.addEventListener("click", startQuiz);



    //     currentQuestionIndex = Math.floor(Math.random()*questionBank.length);
        
    //     // set the correct answer ... likely not needed.
    //     currentGuess = new Array(questionBank[currentQuestionIndex].length).fill("_")


    //     // hide the start button
    //     hideElement(controlsEl);

    //     // reset the board

    //     // hide any result message
    //     hideElement(quizResultEl);

    //     // show the timer 
    //     showElement(timerEl);
        
    //     // show the quiz  board
    //     showElement(gamebaordEl);

    //     // show the word display
    //     updateWordDisplay();

    // }



// // Event: Timer Countdown




// // Event: Click Answer Button

// function clickAnswer(event){
//     console.log("button was clicked.");
// }

// // startButtonEl.addEventListener("click", startQuiz);   ========== will become answer button.



// // Event: Game Ends

// function quizOver(didWin){
//     clearInterval(timer);
//     timer = null;

//     // Update state
//     if(didWin){
//         wins++;
//     } else {
//         losses++;
//     }

// localStorage.setItem(storageKey, JSON.stringify({wins: wins, losses: losses}))

//     // Update UI



//     // Display Result Message
// displayResult(didWin);
// updateScoreboard();
// showElement(controlsEl);



// }



// // Additional functions

// function updateScoreboard(){
    
// }




// function hideElement(element) {
//     element.classList.add("hide");
// }

// function showElement(element) {
//     element.classList.remove("hide");

// function displayResult(didWin) {
    
//     gameresultEl.classList.remove("Success");
//     gameresultEl.classList.remove("fail");

    
//     hideElement(timerEl);

//     if(didWin) {
//         gameresultEl.textContent("You Win!");
//         gameresultEl.classList.add("success");
//     } else {
//         gameresultEl.textContent("You Lost!");
//         gameresultEl.classList.add("failure");
//     }
// }
//     showElement(gameresultEl);
// }

// function updateWordDisplay(){
    // quizDisplayEl.textContent = currentGuess.join(" ");