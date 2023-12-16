const itens_link = document.querySelectorAll('.nav-link')
const icon_menu = document.querySelector('.button-icon')

function Effect_link() {
    for (let i=0; i <= itens_link.length; i++) {
        itens_link[i].addEventListener('mouseenter', () => {
            itens_link[i].classList.add('underline')
        })

        itens_link[i].addEventListener('mouseout',  () => {
            itens_link[i].classList.remove(('underline'))
        })
    }
}

icon_menu.addEventListener('click', () => {
    const mobile_menu = document.querySelector('.mobile-menu')
    const icon = document.querySelector('#icon')
    
    if (mobile_menu.classList.contains('open')) {
        mobile_menu.classList.remove('open')
        icon.classList = 'fa-solid fa-bars fa-fw'
    } else {
        mobile_menu.classList.add('open')
        icon.classList = 'fa-regular fa-x fa-fw'
    }
})

Effect_link()