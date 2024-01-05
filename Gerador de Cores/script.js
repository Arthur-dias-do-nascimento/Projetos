const buttonColor = document.querySelector('button')
const colortext = document.querySelector('.span-color')

buttonColor.addEventListener('click', function() {
    const color = random_color();

    document.body.style.backgroundColor = color
    colortext.textContent = color
})

function random_color() {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)

    const rgb = `rgb(${r}, ${g}, ${b})`

    return rgb
}