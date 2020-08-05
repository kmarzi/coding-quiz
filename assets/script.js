var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');
var highscore = document.getElementById("highscore");
var timer =  document.getElementById("timer");


function buildQuiz() { }

function showResults() { }

buildQuiz();

submitButton.addEventListener('click', showResults);

var myQuestions = [
    {
        question: "When did dinosaurs go extinct?",
        answer: "65 million years ago",
        answerlist: [ "15000 years ago", "65 million years ago", "1 billion years ago"],
        correctAnswer: 1    
    },
    {
        question: "Which one of these dinosaurs was most like a rhinoceros??",
        answer: "Triceratops",
        answerlist: ["Saltopus","Stegosaurus","Triceratops"],
        correctAnswer: 2     
        },
    {
        question: "Who first coined the term dinosauria?",
        answer: "Sir Richard Owen",
        answerlist: ["Joseph Leidy", "Charles Darwin","Sir Richard Owen"],
        correctAnswer: 2
        },
    {
        question: "During what period did Tyrannosaurus rex live?",
        answer: "Cretaceous",
        answerlist: ["Cretaceous","Triassic","Jurassic"],
        correctAnswer: 0
        },
        {
        question: "What was the largest dinosaur?",
        answer: "Sauropods",
        answerlist: ["Sauropods","Tyrannosaurs","Troodons"],
        correctAnswer: 0
        },
  ];

  
 function buildQuiz() {
    var output = [];

    myQuestions.forEach((cureentQuestion, questionNumber) = > {
    });
}
var count = 0;

var decrementEl = document.querySelector("#decrement");
var countEl = document.querySelector("#count");

function setCounterText() {
  countEl.textContent = count;
}

decrementEl.addEventListener("click", function() {
  setTime();
  if(count > 0) {
    count--;
    setCounterText();
  }
});