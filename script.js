const questionDB = [
  {
    question: "Who invented JS ?",
    answer1: "Håkon Wium Lie",
    answer2: "Tim Berners-Lee",
    answer3: "Brendan Eich",
    answer4: "Bjarne Stroustrup",
    correctAns: "ans3",
  },
  {
    question: "What will be the output console.log(5>2>1);?",
    answer1: "true",
    answer2: "SyntaxError",
    answer3: "ReferenceError",
    answer4: "false",
    correctAns: "ans4",
  },
  {
    question: "!== is:",
    answer1: "Comparison Operator",
    answer2: "Arithmetic Operator",
    answer3: "Assignment Operator",
    answer4: "None of the above",
    correctAns: "ans1",
  },
  {
    question: `x=16+4+"tanmoy" y="sharma"+16+4... output?` ,
    answer1: "x=164tanmoy y=sharma164",
    answer2: "x=20tanmoy y=sharma164",
    answer3: "x=164tanmoy y=sharma20",
    answer4: "x=20tanmoy y=sharma20",
    correctAns: "ans2",
  },
  {
    question: "const keyword can be",
    answer1: "redeclared",
    answer2: "reasign",
    answer3: "None of the above",
    answer4: "both reasign and redeclared",
    correctAns: "ans3",
  },
];

const questions = document.getElementById("question");
const answerOption1 = document.querySelector("#ansoption1");
const answerOption2 = document.querySelector("#ansoption2");
const answerOption3 = document.querySelector("#ansoption3");
const answerOption4 = document.querySelector("#ansoption4");
const submitButton = document.getElementById("submit");
const scoreBox = document.getElementById("scorebox");
let radioButtonClass = document.querySelectorAll(".answerlist");

let arrayValue = 0;
let score = 0;

const loadQuestion = () => {
  let QuestionName = questionDB[arrayValue];
  questions.innerText = QuestionName.question;
  answerOption1.innerText = QuestionName.answer1;
  answerOption2.innerText = QuestionName.answer2;
  answerOption3.innerText = QuestionName.answer3;
  answerOption4.innerText = QuestionName.answer4;
};

loadQuestion();

function getAnswer() {
  let getAns;
  radioButtonClass.forEach(function (value, index, array) {
    if (value.checked) {
      getAns = value.id;
    }
  });
 return getAns;
}

function resetValue(){
radioButtonClass.forEach(function(value){value.checked=false});
}

submitButton.addEventListener("click", function () {
 let getAnsValue = getAnswer();
 if(getAnsValue == questionDB[arrayValue].correctAns)
 {
  score++;
 }
arrayValue++;
resetValue();
 if(arrayValue < questionDB.length)
 {
  loadQuestion();
 }else
 {
  scoreBox.classList.remove("hide");
  scoreBox.innerHTML=`
  <h3>Your Score is ${score}</h3>
  <button class="btn" onclick="location.reload()">Play Again</button>
  <p class="mt-3">Best of Luck !! &#10084; <a href="https://github.com/ShahriarAhmod">Shahriyar</a> </p>
  `
 }
});
