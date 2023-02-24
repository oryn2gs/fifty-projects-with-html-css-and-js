
const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

const quizContainer = document.getElementById("quiz")
const questionEl = document.getElementById("question")
const answersEl = document.querySelectorAll(".answer")
const a_label = document.getElementById("a_text")
const b_label = document.getElementById("b_text")
const c_label = document.getElementById("c_text")
const d_label = document.getElementById("d_text")
const submitBtn = document.getElementById("submit")


let questionIdx = 0;
let score = 0;

loadQuiz()

function loadQuiz() {
    deSelectAnswers()

    const currentQuizData = quizData[questionIdx]

    questionEl.innerText =  currentQuizData.question
    a_label.innerText = currentQuizData.a
    b_label.innerText = currentQuizData.b
    c_label.innerText = currentQuizData.c
    d_label.innerText = currentQuizData.d
  
}

function deSelectAnswers() {
    answersEl.forEach(ans => ans.checked = false)
}


function getSelected() {
    let answer;

    answersEl.forEach(elem => {
        if (elem.checked) {
            answer = elem.id
        }
    })
    return answer
}

submitBtn.addEventListener("click", () => {
    answer = getSelected()
    if (answer === quizData[questionIdx].correct) {
        score++ 
        console.log(`Your answer is True`)
    } else {
        console.log(`Your answer  is False`)
    }

    questionIdx++

    if (questionIdx < quizData.length) {
        loadQuiz()
    } else {
        quizContainer.innerHTML = `
            <h2>You answered ${score}/${quizData.length} questions correctly</h2>
            <button onclick="location.reload()">Reload</button>
        `
    }
})
