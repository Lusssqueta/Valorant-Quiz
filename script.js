// variável contendo array de objetos "perguntas"
const perguntas = [
  {
    pergunta:
      'Qual é o nome do agente que possui habilidades baseadas em fumaça em VALORANT?',
    respostas: ['Viper', 'Omen', 'Brimstone'],
    correta: 1
  },
  {
    pergunta: 'Quantos jogadores compõem uma equipe completa em VALORANT?',
    respostas: ['4', '5', '6'],
    correta: 1
  },
  {
    pergunta:
      'Qual é o nome da arma considerada a sniper principal em VALORANT?',
    respostas: ['Marshall', 'Vandal', 'Operator'],
    correta: 2
  },
  {
    pergunta: 'Qual é a habilidade ultimate da agente Jett em VALORANT?',
    respostas: ['Erupção das Brumas', 'Corrente Ascendente', 'Tormenta de Aço'],
    correta: 2
  },
  {
    pergunta: 'Qual mapa foi lançado após o lançamento oficial de VALORANT?',
    respostas: ['Split', 'Ascent', 'Icebox'],
    correta: 1
  },
  {
    pergunta:
      'Qual é o nome do agente que pode reviver aliados com sua habilidade ultimate?',
    respostas: ['Sage', 'Phoenix', 'Sova'],
    correta: 0
  },
  {
    pergunta: 'Qual é o tempo padrão de duração de uma rodada em VALORANT?',
    respostas: ['1 minuto', '1 minuto e 30 segundos', '2 minutos'],
    correta: 2
  },
  {
    pergunta:
      'Qual é o nome da organização que é central na história de VALORANT?',
    respostas: ['Valorant Protocol', "Omen's Order", 'Radiant Union'],
    correta: 0
  },
  {
    pergunta: 'Qual é a função principal do agente Cypher em VALORANT?',
    respostas: ['Duelista', 'Controlador', 'Sentinela'],
    correta: 2
  },
  {
    pergunta: 'Qual é o nome da arma corpo a corpo padrão em VALORANT?',
    respostas: ['Cuchillo', 'Fists', 'Tactical Knife'],
    correta: 2
  }
]

// importar HTML para variáveis do js
const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

// loop acessando CADA objeto dentro da variável "perguntas" e armazenando em outra variável "item"
for(const item of perguntas) {
  // importar o conteúdo da variável HTML acima e clonar ele para outra variável "quizItem"
  const quizItem = template.content.cloneNode(true)
  // manipular o valor de uma tag dentro do HTML para uma propriedade "pergunta" dentro do objeto "item"
  quizItem.querySelector('h3').textContent = item.pergunta

  for(let resposta of item.respostas) {
    // clonar o conteúdo HTML "dt" que é filho de uma tag "dl", especificamente
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    // acessar dentro do HTML clonado a tag "span", e manipular o conteúdo para os valores da propriedade "respostas" em loop até o final
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta

      corretas.delete(item)
      if(estaCorreta) {
        corretas.add(item)
      }

      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }
    
    quizItem.querySelector('dl').appendChild(dt)
    // buscar dentro do HTML a tag "dl" e atribuir a ela um filho com o valor da variável "dt"      
  }

  // apagar o primeiro conteúdo identificado como tag "dt" dentro de uma tag "dl" no HTML do quizItem
  quizItem.querySelector('dl dt').remove()

  // na variável "quiz", que nada mais é que a div de ID "quiz" no HTML original, atribuir como filho todo o HTML do quizItem presente na variável
  quiz.appendChild(quizItem)
}
