const resultado = document.querySelector('.result')
const comfima = document.querySelector('.igual')

function insert(value) {
    resultado.innerHTML += value
}

function clean() {
    resultado.innerHTML = ''
}

function backspace() {
    if (resultado.textContent) {
        let result = document.getElementById('result').innerHTML
        resultado.innerHTML = result.substring(0, result.length -1)
    }
}

function comfimar() {
    if (resultado.textContent != 'Erro') {
        document.getElementById('result').innerHTML = eval(resultado.innerHTML)
    }
}