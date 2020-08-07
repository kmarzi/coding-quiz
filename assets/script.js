var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');
var highscore = document.getElementById("highscore");
var timerEl = document.getElementById("timer");
var timeEl = document.querySelector(".timerEl");
var mainEl = document.getElementById("main");
var answerEl = document.getElementById("answer1")

var myQuestions = [
    {
        question: "When did dinosaurs go extinct?",
        answer: "65 million years ago",
        answerlist: ["15000 years ago", "65 million years ago", "1 billion years ago"],
        correctAnswer: 1
    },
    {
        question: "Which one of these dinosaurs was most like a rhinoceros??",
        answer: "Triceratops",
        answerlist: ["Saltopus", "Stegosaurus", "Triceratops"],
        correctAnswer: 2
    },
    {
        question: "Who first coined the term dinosauria?",
        answer: "Sir Richard Owen",
        answerlist: ["Joseph Leidy", "Charles Darwin", "Sir Richard Owen"],
        correctAnswer: 2
    },
    {
        question: "During what period did Tyrannosaurus rex live?",
        answer: "Cretaceous",
        answerlist: ["Cretaceous", "Triassic", "Jurassic"],
        correctAnswer: 0
    },
    {
        question: "What was the largest dinosaur?",
        answer: "Sauropods",
        answerlist: ["Sauropods", "Tyrannosaurs", "Troodons"],
        correctAnswer: 0
    },
];
var decrementEl = document.querySelector("#decrement");
var secondsLeft = 75;
console.log("JS FILE")
// alert("HTML")
var currentQuestion = 0;
function buildQuiz() {
    document.getElementById("quiz").textContent = myQuestions[currentQuestion].question
    answerEl.innerHTML = ""
    for (let i = 0; i < myQuestions[currentQuestion].answerlist.length; i++) {
       var button =document.createElement("button")
        button.textContent = myQuestions[currentQuestion].answerlist[i]
        button.setAttribute("value", i)
        button.classList.add("btn", "answer", "bg-secondary", "text-white")
        answerEl.appendChild(button)
    }
    // function showResults() {
    //     currentQuestion++
    //     buildQuiz()
    // }

    // buildQuiz();

    // submitButton.addEventListener('click', showResults);

    // var count = 0;

 
    // var countEl = document.querySelector("#count");

    // function setCounterText() {
    //     countEl.textContent = count;
    // }

    
    // function sendMessage() {
    //     timeEl.textContent = " You are out of time ";
    //     mainEl.appendChild(imgEl);
    // }
};

function setTime() {

    timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " Seconds";

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage("You are out of time");
        }

    }, 1000);
}
function checkAnswer(){
    if(! event.target.classList.contains('answer')) return 
    var userAnswer = event.target.value
    if(parseInt(userAnswer) !== myQuestions[currentQuestion].correctAnswer){
        secondsLeft = secondsLeft - 15
    }
    currentQuestion++
    if(currentQuestion === myQuestions.length){
        clearInterval(timerInterval);
        console.log("end game")
    }else{

        buildQuiz()
    }
}
// function displayScore(){
//     var score = $('<p>',(id: myQuestion'});

//     var numCorrect = 0;
//     for(var i =0; i < Selections.length; i ++) {
//         if(Selections[i] === questions[i].correctAnswer){
//             numCorrect++;
//         }
//     }
//     score.append("You got " + numCorrect = ' questions out of ' + questions.length + ' Right!')
//     return score;
// }

answerEl.addEventListener("click",checkAnswer)
decrementEl.addEventListener("click", function () {
    setTime();
    document.getElementById("startQuiz").setAttribute("class","d-none")
    buildQuiz()
    // if (count > 0) {
    //     count--;
    //     setCounterText();
    // }

});
