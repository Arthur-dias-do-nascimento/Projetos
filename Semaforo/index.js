const text_cor = document.querySelector('main h2')

function red() {
    const cor = document.querySelector('.red')
    cor.style.backgroundColor = 'red'
    cor.style.boxShadow = '0px 0px 20px red'
    text_cor.innerHTML = 'red'
    text_cor.style.color = 'red'

    setTimeout(() => {
        cor.style.backgroundColor = '#070707'
        cor.style.boxShadow = '0px 0px 0px'
        green()
    }, 10000)
}

function yellow() {
    const cor = document.querySelector('.yellow')
    cor.style.backgroundColor = 'yellow'
    cor.style.boxShadow = '0px 0px 20px yellow'
    text_cor.innerHTML = 'yellow'
    text_cor.style.color = 'yellow'

    setTimeout(() => {
        cor.style.backgroundColor = '#070707'
        cor.style.boxShadow = '0px 0px 0px'
        red()
    }, 10000)
}

function green() {
    const cor = document.querySelector('.green')
    cor.style.backgroundColor = 'green'
    cor.style.boxShadow = '0px 0px 20px green'
    text_cor.innerHTML = 'green'
    text_cor.style.color = 'green'

    setTimeout(() => {
        cor.style.backgroundColor = '#070707'
        cor.style.boxShadow = '0px 0px 0px'
        yellow()
    }, 10000)
}

green()