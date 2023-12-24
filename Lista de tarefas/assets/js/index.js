const input_task = document.querySelector('.input-task')
const btn_add = document.querySelector('.btn-add')
const list_task = document.querySelector('.list-task')

let list = [];
let id = 0;

window.addEventListener('DOMContentLoaded', LoadTask)
btn_add.addEventListener('click', AddTask)
input_task.addEventListener('keydown', KeydownAddTask)

function KeydownAddTask(event) {
    if (event.keyCode === 13) {
        if (VerificarInput(input_task.value)) {
            alert('Por favor digite uma tarefa!')
        } else {
            RandomId()
            CreatTask(input_task.value, id)
            input_task.value = '';
        }
    } else {
        return;
    }
}

function AddTask() {
    if (VerificarInput(input_task.value)) {
        alert('Por favor digite uma tarefa!')
    } else {
        RandomId()
        CreatTask(input_task.value, id)
        input_task.value = '';
    }
}

function CreatTask(task, id) {
    const li = document.createElement('li')
    li.classList.add('task')
    li.id = id

    li.innerHTML = `
    <div class="txt-task">
        <span class="task-txt">${task}</span>
    </div>
    <div class="buttons-actions">
        <button class="btn-delete" onclick="Delete(${id})"><i class="fa-solid fa-trash fa-fw"></i></button>
        <button class="btn-edit" onclick="Edit(${id})"><i class="fa-solid fa-pencil fa-fw"></i></button>
    </div>
`

    list_task.appendChild(li)

    PushList(task, id)
}

function Delete(id) {
    let confirm = window.confirm('Tem certerza que deseja deleta essa tarefa?')
    if (confirm) {
        let li = document.getElementById(id)
        list_task.removeChild(li)

        RemoveTaskFromLocalStorage(id);
    }
}

function RemoveTaskFromLocalStorage(id) {
    let storedTasks = JSON.parse(localStorage.getItem('task'));

    if (storedTasks) {
        let updatedTasks = storedTasks.filter(function(item) {
            return item.id !== id;
        });

        localStorage.setItem('task', JSON.stringify(updatedTasks));
    }
}

function Edit(id) {
    let new_task = window.prompt('Digite uma nova tarefa.')

    if (new_task) {
        let li = document.getElementById(id)
        let get_list = JSON.parse(localStorage.getItem('task'))
        li.innerHTML = `
        <div class="txt-task">
            <span class="task-txt">${new_task}</span>
        </div>
        <div class="buttons-actions">
            <button class="btn-delete" onclick="Delete(${id})"><i class="fa-solid fa-trash fa-fw"></i></button>
            <button class="btn-edit" onclick="Edit(${id})"><i class="fa-solid fa-pencil fa-fw"></i></button>
        </div>
    `

        for (let i in get_list) {
            if (get_list[i].id === id) {
                get_list[i].task = new_task
                localStorage.setItem('task', JSON.stringify(get_list))
            }
        }
    }
}

function PushList(task, id) {
    const object = {
        task: task,
        id: id,
    }

    list.push(object)

    localStorage.setItem('task', JSON.stringify(list))
}

function LoadTask() {
    if (localStorage.task) {
        list = JSON.parse(localStorage.getItem('task'))
    }

    for (let i in list) {
        const li = document.createElement('li')
        li.classList.add('task')
        li.id = list[i].id

        li.innerHTML = `
        <div class="txt-task">
            <span class="task-txt">${list[i].task}</span>
        </div>
        <div class="buttons-actions">
            <button class="btn-delete" onclick="Delete(${list[i].id})"><i class="fa-solid fa-trash fa-fw"></i></button>
            <button class="btn-edit" onclick="Edit(${list[i].id})"><i class="fa-solid fa-pencil fa-fw"></i></button>
        </div>
    `

        list_task.appendChild(li)
    }
}

function RandomId() {
    id = Math.floor(Math.random() * 3000)
}

function VerificarInput(string) {
    if (String(string).length == 0) {
        return true
    } else {
        return false
    }
}