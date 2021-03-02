// Array of quiz questions, choices and correct answers
var questions = [
{
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
];

// Varibles for functions, scores and timers
var score = 0;
var timer;
var timeLeft = 0;
var clockRunningAnswer = -1;


// The button has an on-click event handler
function start () {
    
    timeLeft = 60; // seconds (1 minute)
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

// Keeps track of score in local storage
funtion getScore() {
    localStorage.setItem('highscore', score);
    localStorage.setItem('highscoreName', document.getElementById('name').value);
}

// Showing users highscore
// Adding "Clear Score" and "Play Again" button in quiz body
function getScore() {
    var quizQuestions = `
    <h2>` + localStorage.getItem('highscoreName') + `'s highscore is:</h2>
    <h1>` + localStorage.getItem('highscore') + `</h1><br>


    <button onclick='clearScore()'> Clear Score! </button> <button onclick='resetGame()'> Play Again! ^__^ </button>`;

    document.getElementById('quiz').innerHTML = quizQuestions;
}











// Ends game and stops timer
function endGame() {
    clearInterval(timer);

    var stopGame = `
    <h1>Game Over!</h2>

}