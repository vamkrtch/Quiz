const quizData = [
    {
        question: "Who Are you?",
        a: "Vahan",
        b: "Amir",
        c: "Marieta",
        d: "Milena",
        correct: "Vahan",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')

const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')

let buttonArr = [];

const vahan = document.getElementById('a');
const amir = document.getElementById('b');
const marieta = document.getElementById('c');
const milena = document.getElementById('d');

buttonArr[0] = vahan;
buttonArr[1] = amir;
buttonArr[2] = marieta;
buttonArr[3] = milena;

let currentQuiz = 0
let score = 0

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer;

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

function onClick () {
    // const answer = getSelected()
    const answer = this.innerHTML;
    // console.log(answer);

    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <button onclick="location.reload()">Reload</button>
            `
        }
    }
}

for (let i = 0; i < buttonArr.length; i++)
    buttonArr[i].addEventListener('click', onClick);

// submitBtn.addEventListener('click', () => {
//     const answer = getSelected()

//     if(answer) {
//         if(answer === quizData[currentQuiz].correct) {
//             score++
//         }

//         currentQuiz++

//         if(currentQuiz < quizData.length) {
//             loadQuiz()
//         } else {
//             quiz.innerHTML = `
//                 <h2>You answered ${score}/${quizData.length} questions correctly</h2>
//                 <button onclick="location.reload()">Reload</button>
//             `
//         }
//     }
// })
