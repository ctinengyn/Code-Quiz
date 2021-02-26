// Array of quiz questions, choices and correct answers
var questions = [{
    question: 'Commonly used data types DO NOT include:',
    choices: ['Strings()', 'Booleans()', 'Alerts()', 'Numbers()'],
    answer: 'Alerts()'
},
{
    question: 'The condition in an if/else statement is enclosed within _____.',
    choices: ['Quotes()', 'Curly Brackets()', 'Parentheses()', 'Square Brackets()'],
    answer: 'Parentheses()'
},
{
    question: 'Arrays in JavaScript can be used to store _____.',
    choices: ['Numbers and Strings()', 'Other Arrays()', 'Booleans()', 'All of the Above()'],
    answer: 'All of the Above()'
},
{
    question: 'String values must be enclosed within _____ when being assigned to variables.',
    choices: ['Commas()', 'Curly Brackets()', 'Quotes()', 'Parentheses()'],
    answer: 'Quotes()'
},
{
    question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
    choices: ['JavaScript()', 'Terminal/Bash()', 'For Loops()', 'Console.log()'],
    answer: 'Console.log()'
    }
]

// Varibles for functions, scores and timers
var score = 0;
var timer;
var timeLeft = 0;
var thinkingAnswer = -1;

// The button has an on-click event handler
function start () {

    timeLeft = 120; // seconds
    document.getElementById('timeLeft').innerHTML = timeLeft;

        // setInterval is a built-in function that will call the given function
    timer = setInterval(function() {
        
        timeLeft--;
        document.getElementById('timeLeft').innerHTML = timeLeft;

        // End game when timer is below 0
        if (timeLeft <= 0) {
            clearInterval(timer);
            endGame();
        }

        // Every N milliseconds (1 second = 1000 ms)
    }, 1000);

    next();
}