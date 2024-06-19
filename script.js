// variável contendo array de objetos "perguntas"
const perguntas = [
  {
    // Pergunta .01
    pergunta:
      'Qual é o nome do agente que possui habilidades baseadas em sombras em VALORANT?',
    respostas: ['Viper', 'Omen', 'Brimstone'],
    categoria: 'Abilities',
    correta: 1
  },
  {
    // Pergunta .02
    pergunta: 'Quantos jogadores compõem uma equipe completa em VALORANT?',
    respostas: ['4', '5', '6'],
    categoria: 'Teams',
    correta: 1
  },
  {
    // Pergunta .03
    pergunta: 'Qual é a arma com a maior taxa de disparo do jogo?',
    respostas: ['Spectre', 'Odin', 'Stinger'],
    categoria: 'Weapons',
    correta: 2
  },
  {
    // Pergunta .04
    pergunta:
      'Qual é o nome da habilidade ultimate da agente Jett em VALORANT?',
    respostas: ['Erupção das Brumas', 'Corrente Ascendente', 'Tormenta de Aço'],
    categoria: 'Abilities',
    correta: 2
  },
  {
    // Pergunta .05
    pergunta:
      'Após o lançamento oficial do jogo, qual coleção de skins foi vendida primeiro na loja?',
    respostas: ['Saqueadora', 'Sublime', 'Soberania'],
    categoria: 'Skins',
    correta: 1
  }
  // {
  //   // Pergunta .06
  //   pergunta:
  //     'Qual é o nome do agente que pode reviver aliados com sua habilidade ultimate?',
  //   respostas: ['Sage', 'Phoenix', 'Sova'],
  //   categoria: 'Agents',
  //   correta: 0
  // },
  // {
  //   // Pergunta .07
  //   pergunta: 'Qual é o tempo padrão de duração de uma rodada em VALORANT?',
  //   respostas: ['1 minuto', '1 minuto e 40 segundos', '2 minutos'],
  //   categoria: 'Gameplay',
  //   correta: 1
  // },
  // {
  //   // Pergunta .08
  //   pergunta:
  //     'Qual é o nome da organização que é central na história de VALORANT?',
  //   respostas: ['Valorant Protocol', "Omen's Order", 'Radiant Union'],
  //   categoria: 'Lore',
  //   correta: 0
  // },
  // {
  //   // Pergunta .09
  //   pergunta: 'Qual é a função principal do agente Cypher em VALORANT?',
  //   respostas: ['Duelista', 'Controlador', 'Sentinela'],
  //   categoria: 'Agents',
  //   correta: 2
  // },
  // {
  //   // Pergunta .10
  //   pergunta:
  //     'Quantos agentes do tipo Duelista existem atualmente em VALORANT?',
  //   respostas: ['5', '6', '7'],
  //   categoria: 'Agents',
  //   correta: 2
  // },
  // {
  //   // Pergunta .11
  //   pergunta:
  //     'Qual é o nome da coleção de skins que possui uma temática que remete exclusivamente a dragões?',
  //   respostas: ['Imperium', 'Ancifogo', 'Dragonheart'],
  //   categoria: 'Skins',
  //   correta: 1
  // },
  // {
  //   // Pergunta .12
  //   pergunta: 'Quantos créditos custa a arma Guardian?',
  //   respostas: ['2250', '2050', '2400'],
  //   categoria: 'Weapons',
  //   correta: 0
  // },
  // {
  //   // Pergunta .13
  //   pergunta:
  //     'Qual agente possui a seguinte fala: "Vocês já se divertiram, minha vez."',
  //   respostas: ['Fade', 'Raze', 'Clove'],
  //   categoria: 'Agents',
  //   correta: 2
  // },
  // {
  //   // Pergunta .14
  //   pergunta: 'Qual é o país de origem da agente Killjoy?',
  //   respostas: ['Alemanha', 'Turquia', 'França'],
  //   categoria: 'Agents',
  //   correta: 0
  // },
  // {
  //   // Pergunta .15
  //   pergunta:
  //     'Em qual mapa há um teletransporte que leva os jogadores de um ponto a outro?',
  //   respostas: ['Ascent', 'Bind', 'Split'],
  //   categoria: 'Maps',
  //   correta: 1
  // }
]

// importar HTML para variáveis do js
const quiz = document.querySelector('#quiz')
const quizItemTemplate = document.querySelector('#quiz-item-template')
const quizQuestionTemplate = document.querySelector('#quiz-question-template')
const quizNumberLabelContainer = document.querySelector(
  '#quiz-number-label-container'
)

const correctAnsweredQuestions = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')

// loop acessando CADA objeto dentro da variável "perguntas" e armazenando em outra variável "pergunta"
for (const pergunta of perguntas) {
  // importar o conteúdo da variável HTML acima e clonar ele para outra variável "quizItem"
  const quizItem = quizItemTemplate.content.cloneNode(true)
  // manipular o valor de uma tag dentro do HTML para uma propriedade "pergunta" dentro do objeto "pergunta"
  quizItem.querySelector('#question').textContent = pergunta.pergunta
  quizItem.querySelector('#question-category').textContent = pergunta.categoria
  for (let resposta of pergunta.respostas) {
    // clonar o conteúdo HTML "dt" que é filho de uma tag "dl", especificamente
    const dt = quizItem.querySelector('dl dt').cloneNode(true)

    dt.setAttribute(
      'id',
      `pergunta-${perguntas.indexOf(
        pergunta
      )}-resposta-${pergunta.respostas.indexOf(resposta)}-dt`
    )
    // acessar dentro do HTML clonado a tag "span", e manipular o conteúdo para os valores da propriedade "respostas" em loop até o final
    dt.querySelector('label').textContent = resposta
    dt.querySelector('input').setAttribute(
      'name',
      'pergunta-' + perguntas.indexOf(pergunta)
    )
    dt.querySelector('label').setAttribute(
      'for',
      `pergunta-${perguntas.indexOf(
        pergunta
      )}-resposta-${pergunta.respostas.indexOf(resposta)}`
    )
    dt.querySelector('input').setAttribute(
      'id',
      `pergunta-${perguntas.indexOf(
        pergunta
      )}-resposta-${pergunta.respostas.indexOf(resposta)}`
    )
    dt.querySelector('input').value = pergunta.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = event => {
      document
        .getElementById(`quiz-number-${perguntas.indexOf(pergunta)}`)
        .classList.add('answered')
      const estaCorreta = event.target.value == pergunta.correta

      correctAnsweredQuestions.delete(pergunta)
      if (estaCorreta) {
        correctAnsweredQuestions.add(pergunta)
      }
    }

    quizItem.querySelector('dl').appendChild(dt)
    // buscar dentro do HTML a tag "dl" e atribuir a ela um filho com o valor da variável "dt"
  }

  const quizNumberTemplate = quizQuestionTemplate.content.cloneNode(true)
  const quizNumber = quizNumberTemplate.querySelector('div')
  quizNumber.textContent = `.${(perguntas.indexOf(pergunta) + 1)
    .toString()
    .padStart(2, '0')}`
  quizNumber.setAttribute('id', `quiz-number-${perguntas.indexOf(pergunta)}`)

  quizNumberLabelContainer.appendChild(quizNumber)

  // apagar o primeiro conteúdo identificado como tag "dt" dentro de uma tag "dl" no HTML do quizItem
  quizItem.querySelector('dl dt').remove()

  // na variável "quiz", que nada mais é que a div de ID "quiz" no HTML original, atribuir como filho todo o HTML do quizItem presente na variável
  quiz.appendChild(quizItem)
}

function submitForm(event) {
  event.preventDefault()
  disableForm()
  mostrarTotal.textContent =
    correctAnsweredQuestions.size + ' / ' + totalDePerguntas
  window.scrollTo(0, 0)
  const answeredQuestions = perguntas.map(pergunta => {
    if (correctAnsweredQuestions.has(pergunta)) {
      return { ...pergunta, answeredCorrect: true }
    } else {
      return { ...pergunta, answeredCorrect: false }
    }
  })

  // const answeredQuestions = perguntas.map((pergunta) => correctAnsweredQuestions.has(pergunta));
  // Exemplo de retorno de array [false, true, true, ...]

  answeredQuestions.forEach(
    ({ answeredCorrect, correta, respostas }, index) => {
      document
        .getElementById(`quiz-number-${index}`)
        .classList.add(answeredCorrect ? 'correct' : 'wrong')

      respostas.forEach((_, answerIndex) => {
        const answerContainer = document.getElementById(
          `pergunta-${index}-resposta-${answerIndex}-dt`
        )
        const input = answerContainer.querySelector('input')
        if (input.id === `pergunta-${index}-resposta-${correta}`) {
          answerContainer.classList.add('correct')
        } else if (input.checked) {
          answerContainer.classList.add('wrong')
        }
      })
    }
  )
}

function disableForm() {
  document.querySelectorAll('input').forEach(function (input) {
    input.disabled = true
  })
}

var toggle = document.getElementById('theme-toggle')

var storedTheme = localStorage.getItem('theme') || 'light'
if (storedTheme) {
  toggle.checked = storedTheme === 'dark'
  document.documentElement.setAttribute('data-theme', storedTheme)
}

toggle.onclick = function () {
  var currentTheme = document.documentElement.getAttribute('data-theme')
  var targetTheme = 'light'

  if (currentTheme === 'light') {
    targetTheme = 'dark'
  }

  document.documentElement.setAttribute('data-theme', targetTheme)
  localStorage.setItem('theme', targetTheme)
}

console.log(localStorage)
