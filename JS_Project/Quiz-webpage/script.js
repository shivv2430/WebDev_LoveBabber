const question = [
    {
        Question:"which is the largest animals in the world?",
        Answers:[
            {text : "Shark" , correct: false},
            {text : "Blue Whale" , correct: true},
            {text : "Elephants" , correct: false},
            {text : "Giraffe" , correct: false}
        ]
    },
    {
        Question:"which is the largest desert in the world?",
        Answers:[
            {text : "Kalahari" , correct: false},
            {text : "Gobi" , correct: false},
            {text : "Sahara" , correct: false},
            {text : "Antarctica" , correct: true}
        ]
    },
    {
        Question:"which is the  smallest continent in the world?",
        Answers:[
            {text : "Asia" , correct: false},
            {text : "Australia" , correct: true},
            {text : "Arctic" , correct: false},
            {text : "Africa" , correct: false}
        ]
    },
    {
        Question:"which is the largest desert in the world?",
        Answers:[
            {text : "Kalahari" , correct: false},
            {text : "Gobi" , correct: false},
            {text : "Sahara" , correct: false},
            {text : "Antarctica" , correct: true}
        ]
    },
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function StartQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = question [currentQuestion];
    let QuestionNo = currentQuestionIndex +1;
    questionElement.innerHTML = QuestionNo +"." + currentQuestion.question;

    
    
    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text ;
        button.classList.add("btn");
        answerButton.append(button);
        if(answer.correct){
            button.dataset.correct= answer.correct;
        }
        button.addEventListener("click",selectAnswer);
});
}

function resetState(){
    nextButton.style.display = "None";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const SelectedBins = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++; 
    }
    else{
    selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled = "true";
    })
    nextButton.style.display ="block";
}
function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score}out of ${questions.length}!`;
    nextButton.innerHTML= ("Play Again");
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex< Question.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < Question.length){
        handleNextButton();
    }
    else{
    StartQuiz();
    }
})



StartQuiz();