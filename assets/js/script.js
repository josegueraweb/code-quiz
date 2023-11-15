// hooks into the DOM
var timer = document.querySelector("#timer");
var startbtn = document.querySelector("#start-btn");
var quizEndMsg = document.querySelector(".quiz-end-msg");

// state variable to keep track of time. 
var secondsLeft = 10;

// state variables to keep track of score.
var correctAnswers = 0;
var incorrectAnswers = 0;


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


questionBank = [
    {
        question: "What is HTML?",
        answers: [
            { 
                text: "HTML describes the structure of a webpage",
                correct: "false"
            },
            { 
                text: "HTML is the standard markup language mainly used to create web pages",
                correct: "true"
            },
            { 
                text: "HTML consists of a set of elements that helps the browser how to view the content",
                correct: "false"
            },
            { 
                text: "All of the mentioned",
                correct: "false"
            },
        ]
    },
    {
        question: "Which of the following is used to read an HTML page and render it?",
        answers: [
            { 
                text: "Web server",
                correct: "false"
            },
            { 
                text: "Web network",
                correct: "true"
            },
            { 
                text: "Web browser",
                correct: "false"
            },
            { 
                text: "Web matrix",
                correct: "false"
            },
        ]
    },
    {
        question: "In which part of the HTML metadata is contained?",
        answers: [
            { 
                text: "head tag",
                correct: "false"
            },
            { 
                text: "title tag",
                correct: "true"
            },
            { 
                text: "html tag",
                correct: "false"
            },
            { 
                text: "body tag",
                correct: "false"
            },
        ]
    },
    {
        question: "What is CSS?",
        answers: [
            { 
                text: "CSS is a style sheet language",
                correct: "false"
            },
            { 
                text: "CSS is designed to separate the presentation and content, including layout, colors, and fonts",
                correct: "true"
            },
            { 
                text: "CSS is the language used to style the HTML documents",
                correct: "false"
            },
            { 
                text: "All of the mentioned",
                correct: "false"
            },
        ]
    },
    {
        question: "Which of the following CSS selectors are used to specify a group of elements?",
        answers: [
            { 
                text: "tag",
                correct: "false"
            },
            { 
                text: "id",
                correct: "true"
            },
            { 
                text: "class",
                correct: "false"
            },
            { 
                text: "both class and tag",
                correct: "false"
            },
        ]
    },
    {
        question: "Which of the following is the correct way to apply CSS Styles?",
        answers: [
            { 
                text: "in an external CSS file",
                correct: "false"
            },
            { 
                text: "inside an HTML element",
                correct: "true"
            },
            { 
                text: "inside the <head> section of an HTML page",
                correct: "false"
            },
            { 
                text: "all of the mentioned",
                correct: "false"
            },
        ]
    },
    {
        question: "What is JavaScript?",
        answers: [
            { 
                text: "JavaScript is a scripting language used to make the website interactive",
                correct: "false"
            },
            { 
                text: "JavaScript is an assembly language used to make the website interactive",
                correct: "true"
            },
            { 
                text: "JavaScript is a compiled language used to make the website interactive",
                correct: "false"
            },
            { 
                text: "None of the mentioned",
                correct: "false"
            },
        ]
    },
    {
        question: "Which of the following is not javascript data types?",
        answers: [
            { 
                text: "Null type",
                correct: "false"
            },
            { 
                text: "Undefined type",
                correct: "true"
            },
            { 
                text: "Number type",
                correct: "false"
            },
            { 
                text: "All of the mentioned",
                correct: "false"
            },
        ]
    },
    {
        question: "Which of the following can be used to call a JavaScript Code Snippet?",
        answers: [
            { 
                text: "Function/Method",
                correct: "false"
            },
            { 
                text: "Preprocessor",
                correct: "true"
            },
            { 
                text: "Triggering Event",
                correct: "false"
            },
            { 
                text: "RMI",
                correct: "false"
            },
        ]
    },
];