const form_login = document.querySelector('.form-login')
const get_cliente = JSON.parse(localStorage.getItem('cliente'))

form_login.addEventListener('submit', (event) => {
    event.preventDefault()

    const form_data = new FormData(form_login)

    let {email, senha} = {email: form_data.get('email'), senha: form_data.get('senha')}

    if (localStorage.cliente) {
        for (let i in get_cliente) {
            if (email == get_cliente[i].Email && senha == get_cliente[i].Senha) {
                alert(`Olá, seja bem vindo de volta ${email}`)

                document.querySelectorAll('.input-email')[0].value = '';
                document.querySelectorAll('.input-senha')[0].value = '';

                login.classList.add('hidden')
                modal.classList.remove('active')

                return;
            } else {
                return alert('Desculpe, você digitou algo errado.')
            }
        }
    } else {
        alert('Desculpe, não temos pessoas cadastradas nesse site.')

        login.classList.add('hidden')
        cadastro.classList.remove('hidden')
    }
})