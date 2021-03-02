// Array of quiz questions, choices and correct answers
let questions = [
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
var currentQuestion = -1;
var timeLeft = 0;
var timerSec;

var hide = document.querySelector("#hide2")


// The button has an on-click event handler
function start () {
    
    var timeLeft = 60; // seconds (1 minute)
    document.getElementById('timeLeft').innerHTML = timeLeft;

    hide.setAttribute("class", "hide");

        // setInterval is a built-in function that will call the given function
    timerSec = setInterval(function() {
        
        timeLeft--;
        document.getElementById('timeLeft').innerHTML = timeLeft;

        // End game when timer is below 0
        if (timeLeft <= 0) {
            clearInterval(timerSec);
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

    getScore();
}

// Showing users highscore
// Adding "Clear Score" and "Play Again" button in quiz body
function getScore() {
    var quizContent = `
    <h2>` + localStorage.getItem('highscoreName') + `'s highscore is:</h2>
    <h1>` + localStorage.getItem('highscore') + `</h1><br>


    <button onclick='clearScore()'> Clear Score! </button> <button onclick='resetGame()'> Play Again! </button>`;

    document.getElementById('buttonBody').innerHTML = quizContent;
}

// If user selects incorrect answer it will deduct 15 seconds from timer
function incorrect() {
    timeLeft -= 15;
    next();
}

// If user selects correct answer it will add 20 points to the score
funtion correct() {
    score += 20;
    next();
}

// Looping questions
function next() {
    currentQuestion++;

    // If user runs out of time on a question then the game ends
    if (currentQuestion > questions.length - 1) {
        endGame();
        return;
    }

    // When the game ends the font style will be the same as "How to take the quiz"
    var quizContent = "<p>" + questions[currentQuestion].title + "</p>"

    for (var buttonLoop = 0; buttonLoop < questions[currentQuestion].choices.length; buttonLoop++) {

        // Answer buttons will be the same style as "Start Quiz"
        var buttonCode = "<button onclick=\"[answer]\">[choice]</button>";
        buttonCode = buttonCode.replace('[choice]', questions[currentQuestion].choices[buttonLoop]);

        // If user selects correct/incorrect answers the button style will remain the same
        if (questions[currentQuestion].choices[buttonLoop] == questions[currentQuestion].answer) {
            buttonCode = buttonCode.replace('[answer]', 'correct()');
        } else {
            buttonCode = buttonCode.replace('[answer]', 'incorrect()');
        }
        quizContent += buttonCode
    }
    document.getElementById('buttonBody').innerHTML = quizContent;
}

// The score name and value will clear if user selects "clear score"
function clearScore() {
    localStorage.setItem('highscore', '');
    localStorage.setItem('highscoreName', '');

    resetGame();
}

// Resets the game
function resetGame() {
    window.location.reload()
}

// When the timer is done it ends the game
function endGame() {
    clearInterval(timerSec);

    var quizContent = `
    <h2> Game Over </h2>
    <p> You got a ` + score + ` /100!</p>
    <p> That means you got ` + score / 20 + ` question(s) correct</p>
    <input type="text" id="name" placeholder="First Name"></input>
    <button onclick="setScore()" Set Score </button> `;

    document.getElementById('buttonBody').innerHTML = quizContent;
}
