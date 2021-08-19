var score = 0;
var questionNum = 0;
var currentQuestion = "";
var timer = document.querySelector("#timer");
var button1 = document.querySelector("#button1");
var button2 = document.querySelector("#button2");
var button3 = document.querySelector("#button3");
var button4 = document.querySelector("#button4");
var start = document.querySelector("#startButton");
var h1El = document.querySelector("#prompt");
var showAnswer = document.querySelector("p");
var scorePage = document.querySelector("form");
var submitButton = document.querySelector("#nameButton");
var scoreList = document.querySelector("#scoreList");
var playerName = document.querySelector("#playerName");
var playAgain = document.querySelector("#playAgain");
var finalScore = "";
var timerCount = 60;
var timerOn;



/*question objects contain the promp and answers as well as correct answer for each question card*/
var question1 = {
    prompt: "Where in HTML do you link a Javascript file?",
    answer1: "1. In the header",
    answer2: "2. At the bottom right before the closing tag body",
    answer3: "3. After closing tag body",
    answer4: "4. Before the CSS file link",
    answer: "2",
};

var question2 = {
    prompt: "What does .shift do?",
    answer1: "1. Removes the last element from an array”",
    answer2: "2. Adds an element to the end of the array",
    answer3: "3. Removes the first element from an array",
    answer4: "4. Adds an element to the beginning of the array",
    answer: "3",
};

var question3 = {
    prompt: "What is NOT a primitive data type?",
    answer1: "1. Null",
    answer2: "2. String",
    answer3: "3. Number",
    answer4: "4. True/False",
    answer: "4",
};

var question4 = {
    prompt: "What does API stand for?",
    answer1: "1. Application Programming Interface",
    answer2: "2. Associated Platform Internet",
    answer3: "3. Applicable Program Interaction",
    answer4: "4. Applied Preface Instance",
    answer: "1",
};

var question5 = {
    prompt: "What is a console log?",
    answer1: "1. It is a way to display a message on the debugging console",
    answer2: "2. It is a method",
    answer3: "3. It is a variable",
    answer4: "4. It connects to your HTML",
    answer: "1",
};

var allQuestions = [question1, question2, question3, question4, question5];
var currentQuestion = allQuestions[questionNum];


//needs update button function



function updatescreen() {

    currentQuestion = allQuestions[questionNum];
    //checks to see if all questions have been ran through
    if (questionNum < allQuestions.length) {
        h1El.textContent = currentQuestion.prompt;
        button1.textContent = currentQuestion.answer1;
        button2.textContent = currentQuestion.answer2;
        button3.textContent = currentQuestion.answer3;
        button4.textContent = currentQuestion.answer4;
        showAnswer.textContent = ""
        button1.setAttribute("style", "display: block;");
        button2.setAttribute("style", "display: block;");
        button3.setAttribute("style", "display: block;");
        button4.setAttribute("style", "display: block;");
        return;
    }
    //if all questions have been ran through, hide buttons and timer + show end screen
    else {
        clearInterval(timerOn);
        timer.setAttribute("style", "display: none;");
        button1.setAttribute("style", "display: none;");
        button2.setAttribute("style", "display: none;");
        button3.setAttribute("style", "display: none;");
        button4.setAttribute("style", "display: none;");
        gameEnd()
        return;
    }

};

// function that sets timer
function startTimer() {
    timerOn = setInterval(function () {
        timerCount--;
        console.log(timerCount);
        timer.textContent = timerCount;
        if (timerCount <= 0) {
            // stops execution of action at set interval
            clearInterval(timerOn);
            questionNum = 10;
            updatescreen();
        }
    }, 1000); // timeCurrent is a loop, iterates
}









//listens for a click anywhere on the page, and performs function
document.addEventListener("click", function (event) {
    //determines if click was on a button, if so, performs function
    if (event.target === button1 ||
        event.target === button2 ||
        event.target === button3 ||
        event.target === button4) {


        //compres the first character of the textContent of the click target with the "answer"
        //variable of the current quesstion
        //if correct, displays correct on screen, and increases questionNum by 1
        if (event.target.textContent[0] === currentQuestion.answer) {
            console.log("Correct");

            score++;
            showAnswer.textContent = "Correct!"
            //hides buttons and adds delay to reveal of next question
            button1.setAttribute("style", "display: none;");
            button2.setAttribute("style", "display: none;");
            button3.setAttribute("style", "display: none;");
            button4.setAttribute("style", "display: none;");
            setTimeout(function () {
                questionNum++;
                updatescreen()
            }, 1000);


        }
        else {
            console.log("Incorrect!");
            showAnswer.textContent = "Incorrect!"
            //hides buttons and adds delay to reveal of next question
            button1.setAttribute("style", "display: none;");
            button2.setAttribute("style", "display: none;");
            button3.setAttribute("style", "display: none;");
            button4.setAttribute("style", "display: none;");
            timerCount = timerCount - 10;
            setTimeout(function () {
                questionNum++;
                updatescreen()
            }, 1000);

        };
    }
    else {
        return;
    };

});
//All answer buttons, and timer start hidden. Revealed and timer started when start button pressed
//start button is also hidden when clicked
document.addEventListener("click", function (event) {
    if (event.target === start) {
        updatescreen()
        startTimer();
        button1.setAttribute("style", "display: block;");
        button2.setAttribute("style", "display: block;");
        button3.setAttribute("style", "display: block;");
        button4.setAttribute("style", "display: block;");
        timer.setAttribute("style", "display:block");
        start.setAttribute("style", "display: none;");
    };
});

document.addEventListener("submit", function (event) {
    event.preventDefault();
    finalScore = playerName.value + " got " + finalScore;
    submitScore()


});


function gameEnd() {
    showAnswer.textContent = "";
    finalScore = score + " correct with " + timerCount + " seconds remaining";
    console.log(finalScore)
    h1El.textContent = "You finished with a score of " + score + "/5 and " + timerCount + " seconds remaining!";
    scorePage.setAttribute("style", "display: block;");
};

// handles setting and getting local storage, as well as pushing saved scores to list items
function submitScore() {
    workingScores = "";


    workingScores = workingScores.concat(localStorage.getItem("scores"));

    console.log(workingScores);
    workingScores = workingScores.split(",");
    workingScores = workingScores.concat(finalScore);
    console.log(workingScores);
// so a null keeps attaching to the front of working scores and I can't
// avoid it so we're just skipping position 0
    for (var i = 1; i < workingScores.length; i++) {
        var eachName = document.createElement("li");  //creates a list item element
        eachName.textContent = workingScores[i];      //assigns the current position to that list item
        scoreList.appendChild(eachName);  //appends list item to list

    };
    playAgain.setAttribute("style", "display:block;");
    scoreList.setAttribute("style", "display: block;");
    scorePage.setAttribute("style", "display: none;");
    h1El.textContent = "All Scores"
    localStorage.setItem("scores", workingScores);


};

//resets the game 
document.addEventListener("click", function (event) {
    if (event.target === playAgain) {
        h1El.textContent = "Quiz time!";
        start.setAttribute("style", "display: block;");
        // deletes all list items so the list doesn't double each print
        var child = scoreList.lastElementChild;
        while (child) {
            scoreList.removeChild(child);
            child = scoreList.lastElementChild;
        };

        score = 0;
        questionNum = 0;
        finalScore = "";
        timerCount = 60;
        currentQuestion = "";
        playAgain.setAttribute("style", "display: none;");

    }
});