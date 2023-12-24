const input_peso = document.querySelector('#input-peso')
const input_altura = document.querySelector('#input-altura')
const btn_calcular = document.querySelector('.btn-calcular')
const IMC_text = document.querySelector('.imc-text')
const classificacao_IMC = document.querySelector('.classificacao-imc')

btn_calcular.addEventListener('click', CalcularIMC)

function CalcularIMC() {
    if (input_peso.value.length == 0 && input_altura.value.length == 0) {
        alert('Por favor digite seu peso ou altura, para calcular seu IMC')
    } else {
        const peso = input_peso.value
        const altura = input_altura.value
        const imc = peso / (altura * altura)

        IMC_text.innerHTML = `IMC: ${imc.toFixed(2)}`
        VerificarIMC(imc)
    }
}

function VerificarIMC(imc) {
    if (imc < 18.5) {
        classificacao_IMC.innerHTML = 'Abaixo do normal!'
        classificacao_IMC.style.color = 'yellow'
    } else if (imc > 18.5 && imc < 24.9) {
        classificacao_IMC.innerHTML = 'Normal'
        classificacao_IMC.style.color = 'green'
    } else if (imc > 25 && imc < 29.9) {
        classificacao_IMC.innerHTML = 'Sobrepeso'
        classificacao_IMC.style.color = 'green'
    } else if (imc > 30 && imc < 34.9) {
        classificacao_IMC.innerHTML = 'Obesidade grau 1'
        classificacao_IMC.style.color = 'orange'
    } else if (imc > 35 && imc < 39.9) {
        classificacao_IMC.innerHTML = 'Obesidade de grau 2'
        classificacao_IMC.style.color = 'orange'
    } else if (imc > 40) {
        classificacao_IMC.innerHTML = 'Obesidade de grau 3'
        classificacao_IMC.style.color = 'red'
    }
}