var score = 0;

var currentQuestion = "";
var button1 = document.querySelector("#button1");
var button2 = document.querySelector("#button2");
var button3 = document.querySelector("#button3");
var button4 = document.querySelector("#button4");

var question1 ={
    prompt: "the text for the question",
    answer1: "1. whaterver",
    answer2: "2. whaterver",
    answer3: "3. whaterver",
    answer4: "4. whaterver",
    theAnswer: 1
};

var question2 ={
    prompt: "the text for the question",
    answer1: "1. whaterver",
    answer2: "2. whaterver",
    answer3: "3. whaterver",
    answer4: "4. whaterver",
    theAnswer: 2
};

var question3 ={
    prompt: "the text for the question",
    answer1: "1. whaterver",
    answer2: "2. whaterver",
    answer3: "3. whaterver",
    answer4: "4. whaterver",
    theAnswer: 3
};

var question4 ={
    prompt: "the text for the question",
    answer1: "1. whaterver",
    answer2: "2. whaterver",
    answer3: "3. whaterver",
    answer4: "4. whaterver",
    theAnswer: 4
};

var question5 ={
    prompt: "the text for the question",
    answer1: "1. whaterver",
    answer2: "2. whaterver",
    answer3: "3. whaterver",
    answer4: "4. whaterver",
    theAnswer: 4
};

var allQuestions = [question1, question2, question3, question4, question5];

var currentQuestion = allQuestions[questionNum];

console.log(currentQuestion.prompt)


button1.textContent= currentQuestion.answer1;
button2.textContent= currentQuestion.answer2;
button3.textContent= currentQuestion.answer3;
button4.textContent= currentQuestion.answer4;

//eventListener("click", function())
if (button1.textContent[0] == currentQuestion.theAnswer) {
    console.log("Correct");
    questionNum++;
    console.log(questionNum);
} else {console.log("wrong!");
};


