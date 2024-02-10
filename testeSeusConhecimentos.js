const perguntas = [
  {
    pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
    respostas: [
      "var minhaVariavel",
      "let minhaVariavel",
      "const minhaVariavel",
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o método em JavaScript usado para remover o último elemento de um array e retorná-lo?",
    respostas: [
      "pop()",
      "shift()",
      "splice()",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o operador usado para concatenar strings em JavaScript?",
    respostas: [
      "+",
      "&",
      "||",
    ],
    correta: 0
  },
  {
    pergunta: "O que o método 'map()' faz em JavaScript?",
    respostas: [
      "Itera sobre os elementos de um array e retorna um novo array com as modificações aplicadas a cada elemento.",
      "Remove o primeiro elemento de um array e retorna-o.",
      "Remove elementos de um array com base em uma condição específica e retorna os elementos removidos."
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a saída do seguinte código em JavaScript: console.log(typeof 'Hello World')?",
    respostas: [
      "string",
      "number",
      "boolean",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a função do método 'filter()' em JavaScript?",
    respostas: [
      "Itera sobre os elementos de um array e retorna um novo array com os elementos que passam em um teste específico.",
      "Remove o último elemento de um array e retorna-o.",
      "Concatena dois arrays."
    ],
    correta: 0
  },
  {
    pergunta: "Como você declara uma função em JavaScript?",
    respostas: [
      "function minhaFuncao() {}",
      "const minhaFuncao = function() {}",
      "Todas as opções anteriores são válidas."
    ],
    correta: 2
  },
  {
    pergunta: "Qual é a maneira correta de escrever um comentário de uma linha em JavaScript?",
    respostas: [
      "// Este é um comentário de uma linha",
      "/* Este é um comentário de uma linha */",
      "<!-- Este é um comentário de uma linha -->"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o resultado de 10 + '5' em JavaScript?",
    respostas: [
      "15",
      "105",
      "Erro"
    ],
    correta: 1
  },
  {
    pergunta: "O que o método 'reduce()' faz em JavaScript?",
    respostas: [
      "Aplica uma função a dois valores do array acumulador e o valor atual, resultando em um único valor.",
      "Remove o primeiro elemento de um array e retorna-o.",
      "Itera sobre os elementos de um array e retorna um novo array com as modificações aplicadas a cada elemento."
    ],
    correta: 0
  }
];
// Buscar um elemento HTML 
const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set() //set = conjunto de um objeto específico
const totalDePerguntas = perguntas.length // sempre responde o total de itens a partir do 1 
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

// loop ou laço de repetição - Entrar no array e trabalhar em cima
for(const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta

  for(let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta) // Define o numero de cada resposta (0,1,2)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta // compara um item com outro
      
      corretas.delete(item)
      if(estaCorreta) {
        corretas.add(item)
      }

      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }    // Verficiar uma ação que está acontecendo - mudança do imput (arrow function)
    
    quizItem.querySelector('dl').appendChild(dt)
  }

  quizItem.querySelector('dl dt').remove()


  //Coloca a pergunta na tela
  quiz.appendChild(quizItem)
}
