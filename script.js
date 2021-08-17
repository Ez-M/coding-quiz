var score = 0;
var currentQuestion = "";
var questionNum = 0;
var button1 = document.querySelector("#button1");
var button2 = document.querySelector("#button2");
var button3 = document.querySelector("#button3");
var button4 = document.querySelector("#button4");
var h1El = document.querySelector("#prompt");

/*question objects contain the promp and answers as well as correct answer for each question card*/
var question1 = {
    prompt: "the text for the question",
    answer1: "1. whaterver",
    answer2: "2. whaterver",
    answer3: "3. whaterver",
    answer4: "4. whaterver",
    theAnswer: 1
};

var question2 = {
    prompt: "the text for the question",
    answer1: "1. whaterver",
    answer2: "2. whaterver",
    answer3: "3. whaterver",
    answer4: "4. whaterver",
    theAnswer: 2
};

var question3 = {
    prompt: "the text for the question",
    answer1: "1. whaterver",
    answer2: "2. whaterver",
    answer3: "3. whaterver",
    answer4: "4. whaterver",
    theAnswer: 3
};

var question4 = {
    prompt: "the text for the question",
    answer1: "1. whaterver",
    answer2: "2. whaterver",
    answer3: "3. whaterver",
    answer4: "4. whaterver",
    theAnswer: 4
};

var question5 = {
    prompt: "the text for the question",
    answer1: "1. whaterver",
    answer2: "2. whaterver",
    answer3: "3. whaterver",
    answer4: "4. whaterver",
    theAnswer: 4
};

var allQuestions = [question1, question2, question3, question4, question5];

var currentQuestion = allQuestions[questionNum];

console.log(currentQuestion.prompt);

//needs update button function
h1El.textContent = currentQuestion.prompt;
button1.textContent = currentQuestion.answer1;
button2.textContent = currentQuestion.answer2;
button3.textContent = currentQuestion.answer3;
button4.textContent = currentQuestion.answer4;







//listens for a click anywhere on the page, and performs function
document.addEventListener("click", function () {
    //determines if click was on a button, if so, performs function
    if (event.target === button1 ||
        event.target === button2 ||
        event.target === button3 ||
        event.target === button4) {
//compres the first character of the textContent of the click target with the "theAnswer"
//variable of the current quesstion
//if correct, displays correct on screen, and increases questionNum by 1
        if (event.target.textContent[0] == currentQuestion.theAnswer) {
            console.log("Correct");
            questionNum++;
            console.log(questionNum);
        }
        else {
            console.log("wrong!");
        };
    }
    else {
        return;
    };

});
