const text_input = document.querySelector('#text-input')
const text_list = document.querySelector('.text-tarefa')
const btn_add = document.querySelector('.btn-add')
const list = document.querySelector('#list-task')

btn_add.addEventListener('click', () => {
    if (text_input.value.length == 0) {
        window.alert('Digite uma tarefa em sua lista')
    } else {
        const task = {
            nome: text_input.value,
            id: RandomId(),
        }
        AddTaks(task)
    }
})

function RandomId() {
    return Math.floor(Math.random() * 3000)
}

function AddTaks(value) {
    const li = createTag(value)
    list.appendChild(li)
    text_input.value = ''
}

function createTag(value) {
    const li = document.createElement('li')
    li.id = value.id
    const span = document.createElement('span')
    span.classList.add = 'text-tarefa'
    span.innerHTML = value.nome
    const div = document.createElement('div')
    const btn_pencil = document.createElement('button')
    btn_pencil.classList.add('btn-acao')
    btn_pencil.innerHTML = `<span class="material-symbols-outlined">task_alt</span>`
    btn_pencil.setAttribute('onclick', 'Completa('+value.id+')')
    const btn_complete = document.createElement('button')
    btn_complete.classList.add('btn-acao')
    btn_complete.innerHTML = `<span class="material-symbols-outlined">delete</span>`
    btn_complete.setAttribute('onclick', 'Delete('+value.id+')')
    div.appendChild(btn_pencil)
    div.appendChild(btn_complete)
    li.appendChild(span)
    li.appendChild(div)
    return li
}

function Completa(id) {
    let li = document.getElementById('' + id + '')
    li.style.textDecoration = 'line-through'
}

function Delete(id) {
    let confirm = window.confirm('tem certerza que deseja deleta essa tarefa?')
    if (confirm) {
        let li = document.getElementById(''+ id +'')
        if (li) {
            list.removeChild(li)
        }
    }
}