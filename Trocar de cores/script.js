const colors = ['blue', 'black', 'green', 'red', 'purple', 'yellow', 'pink', 'brown', 'gray', '#ddd']
const buttonColor = document.querySelector('button')
const colortext = document.querySelector('.span-color')

buttonColor.addEventListener('click', function() {
    // get random number between 0 - 3
    const randomNumber = getRandomNumber();
    console.log(getRandomNumber())

    document.body.style.backgroundColor = colors[randomNumber]
    colortext.textContent = colors[randomNumber]
})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length)
}
