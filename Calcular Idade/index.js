const input_date = document.querySelector('.input-date')
const btn_date = document.querySelector('.btn-date')
const year_text = document.querySelector('.text-date-year')
const month_text = document.querySelector('.text-date-month')
const day_text = document.querySelector('.text-date-day')
const container_date = document.querySelector('.content-date')

btn_date.addEventListener('click', CalcularIdade)

function CalcularIdade() {
    if (input_date.value.length == 0) {
        alert('Por favor, digite seu ano, mês e dia no input.')
    } else {
        VerificarAnoMesDia(input_date.value)
        container_date.classList.remove('hidden')
        container_date.style.transition = '700ms all ease-in-out'
    }
}

function VerificarAnoMesDia(data) {
    const data_nascimento = new Date(data)
    const date = new Date()

    let mes_atual = date.getMonth() + 1;
    let mes_nascimento = data_nascimento.getMonth() + 1;
    let ano_atual = date.getFullYear();
    let ano_nascimento = data_nascimento.getFullYear();
    let dia_atual = date.getDate() + 1;
    let dia_nascimento = data_nascimento.getDate() + 1;

    year_text.textContent = ano_atual - ano_nascimento;
    month_text.textContent = mes_nascimento - mes_atual;
    day_text.textContent = dia_nascimento - dia_atual;
}