import { questions } from "./pergunta.js"

const $startGamebutton = document.querySelector('.start-quiz')
const $questionsContainer = document.querySelector('.questions-container')
const $answersContainer = document.querySelector('.answers-container')
const $questionText = document.querySelector('.question')
const $nextQuestionButton = document.querySelector('.next-question')

let currentQuestionIndex = 0
let totalCorrect = 0

$startGamebutton.addEventListener('click', startGame)
$nextQuestionButton.addEventListener('click', displayNextQuestion)

function startGame() {
    $startGamebutton.classList.add('hide')
    $questionsContainer.classList.remove('hide')
    displayNextQuestion()
}

function displayNextQuestion() {
    resetState()

    if (questions.length == currentQuestionIndex) {
        return finsishGame()
    }

    $questionText.textContent = questions[currentQuestionIndex].question
    questions[currentQuestionIndex].answers.forEach(answer => {
        const newAnswer = document.createElement('button')
        newAnswer.classList.add('button', 'answer')
        newAnswer.textContent = answer.text
        if (answer.correct) {
            newAnswer.dataset.correct = answer.correct
        }
        $answersContainer.appendChild(newAnswer)

        newAnswer.addEventListener('click', selectAnswer)
    })

    function resetState() {
        while ($answersContainer.firstChild) {
            $answersContainer.removeChild($answersContainer.firstChild)
        }

        document.body.removeAttribute('class')
        $nextQuestionButton.classList.add('hide')
    }
}

function selectAnswer(event) {
    const anwersClicked = event.target
    if(anwersClicked.dataset.correct) {
        document.body.classList.add('correct')
        totalCorrect++
    } else {
        document.body.classList.add('incorrect')
    }

    document.querySelectorAll('.answer').forEach(button => {
        if (button.dataset.correct) {
            button.classList.add('correct')
        } else {
            button.classList.add('incorrect')
        }

        button.disabled = true
    })

    $nextQuestionButton.classList.remove('hide')
    currentQuestionIndex++
}

function finsishGame() {
    const totalQuenstion = questions.length
    const preformace = Math.floor(totalCorrect * 100 / totalQuenstion)

    let message = ''

    switch(true) {
        case(performance >= 90):
        message = 'Exelente :)'
        break
        case(performance >= 70): 
        message = 'Muito bom :)'
        break
        case(performance >= 50): 
        message = 'Bom'
        break
        default: 
        message = 'Pode melhorar :('
    }

    $questionsContainer.innerHTML = `
        <p>
            Você acertou ${totalCorrect} de ${totalQuenstion} questões!<br>
            <span>Resultado: ${message}</span>
        </p>
        <button class="button" onclick=window.location.reload()>
        Refazer teste
        </button>
    `
    console.log(performance)
}