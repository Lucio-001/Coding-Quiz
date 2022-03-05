//decalared variables
var questions = [
    {
        quiz: "Commonly used data types DO NOT include:",
        options: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        quiz: "The condition in an if / else statement is enclosed within ____.",
        options: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        quiz: "Arrays in Javascript can be used to store ____.",
        options: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        quiz: "String values must be enclosed within ____ when being assigned to variables.",
        options: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer: "quotes"
    },
    {
        quiz: "A very useful tool for used during development and debugging for printing content to the debugger is:",
        options: ["Javascript", "terminal / bash", "for loops", "console log"],
        answer: "console log"
    },

];

var score  = 0;
var question = 0;
var timeLeft = 60;

//start the quiz
$('start').on('click', function() {
    //remove the start button after clicked
    $('start').remove();
    startQuestions();
});

//funtion to start the quiz
function startQuestions() {
    //function to start the timer for the quiz
    $('stopWatch').html(timeLeft);
    countdown = setInterval(function(){
        --timeLeft;
        $('timer').html(timeLeft);
        if (timeLeft === 0) {
            alert("OH NO you've ran out of time");
            clearInterval(countdown)
        }
    }, 1000);

};

