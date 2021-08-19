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
var finalScore = "";
var timerCount = 60;
var timerOn;



/*question objects contain the promp and answers as well as correct answer for each question card*/
var question1 = {
    prompt: "the text for the question",
    answer1: "1. whaterver",
    answer2: "2. whaterver",
    answer3: "3. whaterver",
    answer4: "4. whaterver",
    answer: "1",
};

var question2 = {
    prompt: "the text for the second question",
    answer1: "1. pineapple",
    answer2: "2. whaterver",
    answer3: "3. whaterver",
    answer4: "4. whaterver",
    answer: "2",
};

var question3 = {
    prompt: "the text for the third question",
    answer1: "1. whaterver",
    answer2: "2. whaterver",
    answer3: "3. whaterver",
    answer4: "4. whaterver",
    answer: "3",
};

var question4 = {
    prompt: "the text for the fourth question",
    answer1: "1. whaterver",
    answer2: "2. whaterver",
    answer3: "3. whaterver",
    answer4: "4. whaterver",
    answer: "4",
};

var question5 = {
    prompt: "the text for the fifth question",
    answer1: "1. whaterver",
    answer2: "2. whaterver",
    answer3: "3. whaterver",
    answer4: "4. whaterver",
    answer: "4",
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
            timerOut()
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

document.addEventListener("submit", function(event) {
         event.preventDefault();
         submitScore()
        

});


function gameEnd() {
    showAnswer.textContent="";
    finalScore = score +" correct in " +  timerCount +" seconds";
    console.log(finalScore)
    h1El.textContent = "You finished with a score of " + score +"/5 and " + timerCount +" seconds remaining!";
    scorePage.setAttribute("style", "display: block;");
};

function submitScore() {
    workingScores = localStorage.getItem("scores");
    localStorage.setItem("scores", workingScores.push(finalScore));
};