const form_cadastro = document.querySelector('.form-cadastro')
let cliente = [];

form_cadastro.addEventListener('submit', (event) => {
    event.preventDefault()

    if (localStorage.cliente) {
        cliente = JSON.parse(localStorage.getItem('cliente'))
    }

    const form_data = new FormData(form_cadastro)

    let {nome, email, senha} = {nome: form_data.get('nome'), email: form_data.get('email'), senha: form_data.get('senha')}

    const object = {
        Nome: nome,
        Email: email,
        Senha: senha,
    }

    cliente.push(object)

    CadastroUser(cliente)
    .then((user) => {
        localStorage.setItem('cliente', JSON.stringify(user))

        document.querySelector('.input-nome').value = '';
        document.querySelectorAll('.input-email')[1].value = '';
        document.querySelectorAll('.input-senha')[1].value = '';

        cadastro.classList.add('hidden')
        modal.classList.remove('active')
    })
})

function CadastroUser(ary) {
    return new Promise((resolve) =>{
        resolve(ary)
    })
}