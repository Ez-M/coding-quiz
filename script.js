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
updatescreen();

//needs update button function

function updatescreen(){
currentQuestion = allQuestions[questionNum];

h1El.textContent = currentQuestion.prompt;
button1.textContent = currentQuestion.answer1;
button2.textContent = currentQuestion.answer2;
button3.textContent = currentQuestion.answer3;
button4.textContent = currentQuestion.answer4;
return;
} ;






//listens for a click anywhere on the page, and performs function
document.addEventListener("click", function (event) {
    //determines if click was on a button, if so, performs function
    if (event.target === button1 ||
        event.target === button2 ||
        event.target === button3 ||
        event.target === button4) {
          //  console.log(event.target.textContent[0]);
           // console.log(currentQuestion.answer);
//compres the first character of the textContent of the click target with the "answer"
//variable of the current quesstion
//if correct, displays correct on screen, and increases questionNum by 1
        if (event.target.textContent[0] === currentQuestion.answer) {
            console.log("Correct");
            questionNum++;
            score++;
            showAnswer.textContent = "Correct!"

            updatescreen();
        }
        else {
            console.log("Incorrect!");
            showAnswer.textContent = "Incorrect!"
            updatescreen();
        };
    }
    else {
        return;
    };

});
//All answer buttons, and timer start hidden. Revealed and timer started when start button pressed
//start button is also hidden when clicked
document.addEventListener("click",function(event) {
    if (event.target === start) {
        button1.setAttribute("style", "display: block;");
        button2.setAttribute("style", "display: block;");
        button3.setAttribute("style", "display: block;");
        button4.setAttribute("style", "display: block;");
        timer.setAttribute("style", "display:block");
        start.setAttribute("style", "display: none;");
    };
});