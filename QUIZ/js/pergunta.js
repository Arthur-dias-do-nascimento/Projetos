const questions = [
    {
        question: 'Dentro de qual elemento HTML colocamos o Javascript?',
        answers: [
            { text: '<javascript>', correct: false },
            { text: '<js>', correct: false },
            { text: '<scritp>', correct: true },
            { text: '<scripting>', correct: false }
        ]
    },
    {
        question: 'Onde é o lugar correto para inserir Javascript?',
        answers: [
            { text: 'Tanto no <head> quanto no <body> está correto', correct: true },
            { text: 'No <body>', correct: false },
            { text: 'No <head>', correct: false },
            { text: 'Em outro lugar', correct: false }
        ]
    },
    {
        question: 'Qual é a sintaxe correta para ser referir a um script externo chamado ',
        answers: [
            { text: '<script src="xxx.js">', correct: true },
            { text: '<script href="xxx.js">', correct: false },
            { text: '<script name="xxx.js">', correct: false },
            { text: 'Nenhuma das alternativas', correct: false }
        ]
    },
    {
        question: 'Qual tag do HTML5 não é um bloco?',
        answers: [
            { text: '<div>', correct: false },
            { text: '<h1>', correct: false },
            { text: '<span>', correct: true },
            { text: '<main>', correct: false },
        ]
    },
    {
        question: 'Qual propriedade CSS faz colocar uma cor de fundo?',
        answers: [
            { text: 'background-color:', correct: true },
            { text: 'background:', correct: false },
            { text: 'background-image:', correct: false },
            { text: 'background-position:', correct: false }
        ]
    }
]

export { questions }