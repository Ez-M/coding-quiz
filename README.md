# coding-quiz
A multiple choice coding quiz


each question has 4 multiple choice questions

make each question an object?


eventlistener("click",function())


Buttons need to change with the questions

picking a question
var currentquestion = 0



the "correct" button is dependant on the question
    >One of the buttons has a variable set to true
    >if(button=true) {
        score++
        setcontent "Correct!"
    }   else {
        setcontent "Wrong!"
    }
    currentquestion++

//not strictly necessary according to assignment
//but randomly chosen cards would be cool
pickaquestion () {
    math.floor(math.random()*allquestions.length)
}

questions = [question1, question2]
currentQuestion = questions[w]
object question1:
    prompt: "the text for the question"
    answer1: "1. whaterver
    answer2: "2. whaterver
    answer3: "3. whaterver
    answer4: "4. whaterver
    theAnswer: 1


questionPrompt.setcontent( currentquestion.prompt)
button1.setcontent (currentquestion.answer1)
button2.setcontent (currentquestion.answer2)
button3.setcontent (currentquestion.answer3)
button4.setcontent (currentquestion.answer4)

eventListener("click")
    event.target
    if (target[0] == theAnswer)
      score++
        setcontent "Correct!"
    }   else {
        setcontent "Wrong!"
    }
    currentquestion++