import { palavras } from "./palavras.js";

// elementos html
const btn_start = document.querySelector('.btn-start')
const btn_reset = document.querySelector('.btn-reset')
const buttons =[... document.querySelectorAll('.anwers-buttons button')]
const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

// variaveis que vai usar no codigo
let index = 0
let life = 10
let letters = [];

btn_start.addEventListener('click', startGame)
btn_reset.addEventListener('click', resetGame)

function startGame() {
    // uma função que prepara toda a estrutura do jogo
    randomIndex()
    addSublinhado()
    addEventButtons()
    addSublinhadoArray()

    canvas.classList.remove('hidden')
    btn_start.classList.add('hidden')
}

function resetGame() {
    window.location.reload()
}

function randomIndex() {
    // o index recebe um numero entre 0 ou 1 vezes a quantidade de elementos no array palavras e depois é arrendonda
    index = Math.floor(Math.random() * palavras.length)
}

function addSublinhado() {
    // adiciona o sublinhado dependedo de quantas letras a palavra foi sorteada.
    let div = document.querySelector('.text-sublinhados')

    for (let i=div.lastElementChild; i < palavras[index].length; i++) {
        let sublinhado = document.createElement('p')
        sublinhado.innerHTML = "_"
        div.appendChild(sublinhado)
    }
}

function addSublinhadoArray() {
    // vai adiciona sublinhados de quantas letras a palavra sorteada ter.
    for (let i=letters.length; i < palavras[index].length; i++) {
        letters.push('_')
    }
}

function addEventButtons() {
    // adiciona um função em um evento de click em todos os botões.
    buttons.forEach((element) => {
        element.addEventListener("click", LetterButtonClick)
        element.classList.remove("hidden")
    })
}

function verificarLetters(letter, string) {
    // função para verficar a letra e a string para se a letra foi encontrada nas string.
    return string.includes(letter)
}

function LetterButtonClick(event) {
    // função para verificar que o botão apertado foi a letra da umas da palavra sorteada.
    const stringPalavra = palavras[index].toLowerCase()
    const letter = event.target.innerHTML.toLowerCase()
    
    if (verificarLetters(letter, stringPalavra)) {
        // o botão que foi apertado com a letra certa é adicionada uma classe nele
        event.target.style.border = '2px solid #39DB26'
        event.target.classList.add('green')
        event.target.removeEventListener("click", LetterButtonClick)
        
        // verificar se a letra faz parte da palavra sorteada e coloca ela no lugar que forme a palavra
        updateLetters(letter, stringPalavra)
        
        if (checkVictory()) {
            alert('Você venceu!')
            btn_reset.classList.remove('hidden')

            buttons.forEach((element) => {
                element.removeEventListener("click", LetterButtonClick)
            })
        }
    } else {
        // o botão que foi apertado com a letra errada é adicionada uma classe nele e a função desenhar() é executada.
        event.target.style.border = '2px solid #DB1203'
        event.target.classList.add('red')
        event.target.removeEventListener("click", LetterButtonClick)

        // a função desenhar é executa cada fez que o usuario errar.
        desenhar()
    }
}

function updateLetters(letter, string) {
    for (let i = 0; i < string.length; i++) {
        if (string[i] === letter) {
            letters[i] = letter;

            let p = document.querySelectorAll('p')
            p[i].innerHTML = letter
        }
    }
}

function checkVictory() {
    // essa função retorna se a elementos no meu array letters que tem o valor "_", se tem retorna false, se não tem retorna true
    return !letters.includes('_');
}

function desenhar() {
    // função para caso o jogador erre a letra da palavra sorteada desenhe uma parte da forca.
    switch(life) {
        case 10:
            ctx.fillRect(160, 230, 180, 10)
            life--;
        break;
        case 9:
            ctx.fillRect(170, 100, 10, 130)
            life--;
        break;
        case 8:
            ctx.fillRect(150, 100, 150, 10)
            life--;
        break;
        case 7:
            ctx.fillRect(280, 100, 10, 50)
            life--;
        break;
        case 6:
            ctx.arc(285, 150, 20, 0, 360, false)
            ctx.fill()
            life--;
        break;
        case 5:
            ctx.fillRect(280, 160, 10, 40)
            life--;
        break;
        case 4:
            ctx.moveTo(280, 130)
            ctx.lineTo(300, 200)
            ctx.stroke()
            life--;
        break;
        case 3:
            ctx.moveTo(280, 165)
            ctx.lineTo(265, 200)
            ctx.stroke()
            life--;
        break;
        case 2:
            ctx.moveTo(280, 200)
            ctx.lineTo(275, 225)
            ctx.stroke()
            life--;
        break;
        case 1:
            ctx.moveTo(290, 200)
            ctx.lineTo(300, 225)
            ctx.stroke()
            life--;

            alert('voce perdeu!!!')
            btn_reset.classList.remove('hidden')
            buttons.forEach((element) => {
                element.removeEventListener("click", LetterButtonClick)
            })
        break;
    }
}