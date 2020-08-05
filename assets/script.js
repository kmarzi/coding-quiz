var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

function buildQuiz() { }

function showResults() { }

buildQuiz();

submitButton.addEventListener('click', showResults);

var questions = [
    {
        question: "When did dinosaurs go extinct?",
        answer:"65 million years ago,
        answerList: ["15000 years ago","65 million years ago", "1 billion years ago"]
        correctAnswer: 1
    },
    {
        question: "Which one of these dinosaurs was most like a rhinoceros??",
        answers: {
            a: "Saltopus",
            b: "Stegosaurus",
            c: "Triceratops"
        },
        correctAnswer: "c"
    },
    {
        question: "Who first coined the term dinosauria?",
        answers: {
            a: "Joseph Leidy",
            b: "Charles Darwin",
            c: "Sir Richard Owen",

        },
        correctAnswer: "c"
    }
    {
        question: "During what period did Tyrannosaurus rex live?",
        answers: {
            a: "Cretaceous",
            b: "Triassic",
            c: "Jurassic",

        },
        correctAnswer: "a"
        {
        question: "What was the largest dinosaur?",
        answers: {
            a: "Sauropods",
            b: "Tyrannosaurs",
            c: "Troodons",

        },
        correctAnswer: "a"
  ];

function buildQuiz() {
    var output = [];

    myQuestions.forEach((cureentQuestion, questionNumber) = > {
    });
}