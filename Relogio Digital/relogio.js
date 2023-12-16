const horas = document.querySelector('.hora')
const minuto = document.querySelector('.minuto')
const sengudo = document.querySelector('.sengudo')

const relogio = setInterval(function time() {
    let datetoday = new Date()
    let ho = datetoday.getHours()
    let mi = datetoday.getMinutes()
    let se = datetoday.getSeconds()

    horas.textContent = ho
    minuto.textContent = mi
    sengudo.textContent = se
})