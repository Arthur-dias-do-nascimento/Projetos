const modal = document.querySelector('.modal')
const login = document.querySelector('.login')
const cadastro = document.querySelector('.cadastro')
const menu_mobile = document.querySelector('.mobile-menu')
const btn_login = document.querySelectorAll('.btn-login')
const icon_close_login = document.querySelector('#icon-close-login')
const icon_close_cadastro = document.querySelector('#icon-close-cadastro')
const icon_password = document.querySelectorAll('#icon-senha')
const icon_menu = document.querySelector('.mobile-icon > i')
const input_password = document.querySelectorAll('.input-senha')
const link_cadastro = document.querySelector('.link-cadastro')

btn_login[0].addEventListener('click', MostrarLogin)
btn_login[1].addEventListener('click', MostrarLogin)
icon_close_login.addEventListener('click', FecharLogin)
link_cadastro.addEventListener('click', MostrarCadastro)
icon_close_cadastro.addEventListener('click', FecharCadastro)
icon_menu.addEventListener('click', MostrarMenuMobile)

function MostrarLogin() { 
    login.classList.remove('hidden')
    modal.classList.add('active')
}

function MostrarCadastro() {
    login.classList.add('hidden')
    cadastro.classList.remove('hidden')
}

function FecharLogin() {
    login.classList.add('hidden')
    modal.classList.remove('active')
}

function FecharCadastro() {
    cadastro.classList.add('hidden')
    modal.classList.remove('active')
}

function MostrarMenuMobile() {
    if (menu_mobile.classList.contains('open')) {
        menu_mobile.classList.remove('open')
        icon_menu.classList = 'fa-solid fa-bars fa-fw'
    } else {
        menu_mobile.classList.add('open')
        icon_menu.classList = 'fa-regular fa-x fa-fw'
    }
}

function MostrarPassword() {
    for (let i=0; i < input_password.length; i++) {
        icon_password[i].addEventListener('click', (event) => {
            if (event.target === icon_password[0]) {
                if (input_password[0].type === 'password') {
                    input_password[0].type = 'text'
                } else if (input_password[0].type === 'text') {
                    input_password[0].type = 'password'
                }
            } else if (event.target === icon_password[1]) {
                if (input_password[1].type === 'password') {
                    input_password[1].type = 'text'
                } else if (input_password[1].type === 'text') {
                    input_password[1].type = 'password'
                }
            }
        })
    }
}

MostrarPassword()