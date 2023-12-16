const btn_cadastrarCliente = document.querySelector('.btn-cadastrar')
const btn_salvarCliente = document.querySelector('#salvar')
const btn_cancelarCliente = document.querySelector('#cancelar')
const btn_close = document.querySelector('.btn-close')
const input_NomeCliente = document.querySelector('#nome')
const input_EmailCliente = document.querySelector('#email')
const input_CelularCliente = document.querySelector('#celular')
const input_CidadeCliente = document.querySelector('#cidade')
const modal = document.querySelector('.modal')
const tableTbody = document.querySelector('#tableCliente')
let ary = [];

const iconBtnExclui = '<i class="fa-solid fa-trash fa-fw"></i>'

window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.cliente) {
        const get_aryCliente = JSON.parse(localStorage.getItem('cliente'))
        
        for (let i in get_aryCliente) {
            const tbody = document.querySelector('tbody')
            const tr = document.createElement('tr')
            
            tbody.id = get_aryCliente[i].id_cliente
            tr.innerHTML = `
                <td>${get_aryCliente[i].nome_cliente}</td>
                <td>${get_aryCliente[i].email_clente}</td>
                <td>${get_aryCliente[i].celuluar_cliente}</td>
                <td>${get_aryCliente[i].cidade_cliente}</td>
                <td>
                    <button class="btn-exclui red" onclick="exclui(${get_aryCliente[i].id_cliente})">${iconBtnExclui}</button>
                </td>
            `

            tbody.appendChild(tr)
            tableTbody.appendChild(tbody)
        }
    }
})

const randomId = () => {
    return Math.floor(Math.random() * 3000)
}

const verifiqueInputs = (value) => {
    if (String(value.value).length == 0) {
        return true
    } else {
        return false
    }
}

btn_cadastrarCliente.addEventListener('click', modalVisible)
btn_close.addEventListener('click', modalHidden)
btn_cancelarCliente.addEventListener('click', modalHidden)

function modalHidden() {
    modal.classList.remove("active")
}

function modalVisible() {
    modal.classList.add("active")
}

btn_salvarCliente.addEventListener('click', () => {
    if (verifiqueInputs(input_NomeCliente) || verifiqueInputs(input_EmailCliente) || verifiqueInputs(input_CelularCliente) || verifiqueInputs(input_CidadeCliente)) {
        alert('Complete o formulario para seguir!!!')
    } else {
        const ElementId = randomId()
        adionarCliente(ElementId)
    }
})

function adionarCliente(id) {
    modalHidden()

    if (localStorage.cliente) {
        ary = JSON.parse(localStorage.getItem('cliente'))
    }

    let {nome, email, celular, cidade, Id} = {nome: input_NomeCliente.value, email: input_EmailCliente.value, celular: input_CelularCliente.value, cidade: input_CidadeCliente.value, Id: id}

    const aryCliente = {
        nome_cliente: nome,
        email_clente: email,
        celuluar_cliente: celular,
        cidade_cliente: cidade,
        id_cliente: Id
    }

    const tbody = document.createElement('tbody')
    const tr = document.createElement('tr')
    tbody.id = aryCliente.id_cliente
    tr.innerHTML = `
        <td>${aryCliente.nome_cliente}</td>
        <td>${aryCliente.email_clente}</td>
        <td>${aryCliente.celuluar_cliente}</td>
        <td>${aryCliente.cidade_cliente}</td>
        <td>
            <button class="btn-exclui red" onclick="exclui(${aryCliente.id_cliente})">${iconBtnExclui}</button>
        </td>
    `

    tbody.appendChild(tr)
    tableTbody.appendChild(tbody)

    input_NomeCliente.value = ""
    input_EmailCliente.value = ""
    input_CelularCliente.value = ""
    input_CidadeCliente.value = ""

    ary.push(aryCliente)

    window.localStorage.setItem('cliente', JSON.stringify(ary))
}

function exclui(id) {
    const confirmacao = window.confirm(`Você deseja mesmo exclui essa tabela? id=${id}`)

    if (confirmacao) {
        const tbody = document.getElementById(''+ id +'')

        if (tbody) {
            tableTbody.removeChild(tbody)
            localStorage.removeItem('cliente')
        } else {
            console.error(`error em excluir essa tabela. id=${id}`)
        }
    }
}