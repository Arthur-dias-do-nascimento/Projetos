const revisoes = [
    {
        id: 1,
        name: 'Arthur dias',
        emprego: 'Front-end',
        infos: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quibusdam minima animi deserunt ipsum numquam corrupti illum accusamus? Sunt natus, quasi quaerat fuga veritatis eaque eius similique vero maxime. '
    },
    {
        id: 2,
        name: 'Isaak',
        emprego: 'Banck-end',
        infos: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit dolorum delectus dolorem consectetur minus nobis, repudiandae exercitationem veniam fuga vel molestiae aperiam consequuntur repellat illo laborum quidem. Perferendis, similique autem.'
    },
    {
        id: 3,
        name: 'Caio',
        emprego: 'Banck-end',
        infos: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias odio quasi, dicta aspernatur inventore ex, dolorem, excepturi facere quia et provident iure optio voluptatem at asperiores laboriosam recusandae veniam reprehenderit?'
    },
    {
        id: 4,
        name: 'Luis',
        emprego: 'Web designer',
        infos: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi totam recusandae placeat nostrum fugiat tempora. Adipisci eius obcaecati velit omnis impedit in, nemo et sed nostrum aliquid harum est laborum.'
    }
]

const nome = document.querySelector('.name')
const jop = document.querySelector('.emprego')
const infos = document.querySelector('.infos')

const btnPrev = document.querySelector('.btn-prev')
const btnNext = document.querySelector('.btn-next')
const btnRandom = document.querySelector('.random-rev')

let index = 0
window.addEventListener('DOMContentLoaded', function() {
    MostrarPessoa(index)
})

function MostrarPessoa(pessoa) {
    const item = revisoes[pessoa]
    nome.textContent = item.name
    jop.textContent = item.emprego
    infos.textContent = item.infos
}

btnNext.addEventListener('click', function() {
    index++
    if (index > revisoes.length -1) {
        index = 0
    }
    MostrarPessoa(index)
})

btnPrev.addEventListener('click', function() {
    index--
    if (index < 0) {
        index = revisoes.length -1
    }
    MostrarPessoa(index)
})

btnRandom.addEventListener('click', function() {
    index = Math.floor(Math.random() * revisoes.length)
    console.log(index)
    MostrarPessoa(index)
})