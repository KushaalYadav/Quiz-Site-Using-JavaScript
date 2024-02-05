const questions = [
    {
        question: "Which is Largest animal in the world?",
        answers:[
            {text:"Elephant" , correct:false},
            {text:"Blue Whale" , correct:true},
            {text:"Panda" , correct:false},
            {text:"Giraffe" , correct:false}
        ]
    },
    {
        question: "Which is Largest desert in the world?",
        answers:[
            {text:"Kalahari" , correct:false},
            {text:"Gobi" , correct:false},
            {text:"Antarctica" , correct:true},
            {text:"Sahara" , correct:false}
        ]
    },
    {
        question: "Which is Smallest Country in the world?",
        answers:[
            {text:"Bhutan" , correct:false},
            {text:"Nepal" , correct:false},
            {text:"Shri lanka" , correct:false},
            {text:"Vatican City" , correct:true},
        ]
    },
    {
        question: "Which is Smallest Continent in the world?",
        answers:[
            {text:"Africa" , correct:false},
            {text:"Arctic" , correct:false},
            {text:"Asia" , correct:false},
            {text:"Australia" , correct:true},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score=0;

function startquiz(){
    currentQuestionIndex = 0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}

function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex];
    let questionNO = currentQuestionIndex +1;
    questionElement.innerHTML = questionNO + "."+ currentQuestion.question;

    currentQuestion.answers.forEach(answer=>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
    });
}





















