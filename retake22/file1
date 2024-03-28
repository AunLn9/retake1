let randomQuiz

function init() {
  console.log('init started1')
  //insert your code here
  const buttonArea = document.getElementById('menu')
  const br = document.createElement('br')

  //new
  const newQbtn = document.createElement('button')
  newQbtn.setAttribute('id', 'newB')
  newQbtn.textContent = 'New Quiz'
  newQbtn.addEventListener('click', () => {
    generateQuiz()
  })

  //   //clear
  const ClearQbtn = document.createElement('button')
  ClearQbtn.setAttribute('id', 'clearB')
  ClearQbtn.textContent = 'Clear Quiz'
  ClearQbtn.addEventListener('click', () => {
    clearQuiz()
  })

  //   //combined
  buttonArea.appendChild(newQbtn)
  buttonArea.appendChild(ClearQbtn)
}

function generateQuiz() {
  clearQuiz()
  //console.log('generateQuiz')
  const qArea = document.getElementById('quizContainer')
  let selected = []
  //insert your code here
  const jod = getRandomQuiz()

  const quiz1 = document.createElement('div')
  quiz1.setAttribute('id', 'question')
  quiz1.textContent = `${jod.question}`

  const br = document.createElement('br')

  //ทำ foreach แล้วเช็คคำตอบไม่ได้

  //   jod.options.forEach((element) => {
  //     let op = document.createElement('button')
  //     op.setAttribute('style', 'margin : 5px')
  //     op.textContent = `${element}`
  //     op.addEventListener('click', () => {
  //       selected = op.textContent
  //       console.log(selected)
  //       console.log(answer)
  //       if (selected === answer) {
  //         checkAnswer(1)
  //       } else {
  //         checkAnswer(0)
  //       }
  //     })
  //     quiz1.appendChild(op)
  //   })

  const op1 = document.createElement('button')
  op1.setAttribute('style', 'margin : 5px')
  const op2 = document.createElement('button')
  op2.setAttribute('style', 'margin : 5px')
  const op3 = document.createElement('button')
  op3.setAttribute('style', 'margin : 5px')
  const op4 = document.createElement('button')
  op4.setAttribute('style', 'margin : 5px')

  op1.textContent = `${jod.options[0]}`
  op2.textContent = `${jod.options[1]}`
  op3.textContent = `${jod.options[2]}`
  op4.textContent = `${jod.options[3]}`
  const answer = `${jod.answer}`

  op1.addEventListener('click', () => {
    selected = op1.textContent
    console.log(selected)
    console.log(answer)
    if (selected === answer) {
      checkAnswer(1)
    } else {
      checkAnswer(0)
    }
  })
  op2.addEventListener('click', () => {
    selected = op2.textContent
    console.log(selected)
    console.log(answer)
    if (selected === answer) {
      checkAnswer(1)
    } else {
      checkAnswer(0)
    }
  })
  op3.addEventListener('click', () => {
    selected = op3.textContent
    console.log(selected)
    console.log(answer)
    if (selected === answer) {
      checkAnswer(1)
    } else {
      checkAnswer(0)
    }
  })
  op4.addEventListener('click', () => {
    selected = op4.textContent
    console.log(selected)
    console.log(answer)
    if (selected === answer) {
      checkAnswer(1)
    } else {
      checkAnswer(0)
    }
  })

  qArea.appendChild(quiz1)
  quiz1.appendChild(br)
  quiz1.appendChild(op1)
  quiz1.appendChild(op2)
  quiz1.appendChild(op3)
  quiz1.appendChild(op4)

  return selected, answer
}

function clearQuiz() {
  console.log('clearQuiz')
  //insert your code here
  const qArea = document.getElementById('quizContainer')
  qArea.textContent = ''
  const showResult = document.querySelectorAll('div')[2]
  showResult.textContent = ''
}

function checkAnswer(e) {
  //insert your code here

  const showResult = document.querySelectorAll('div')[3]
  const op1 = document.createElement('button')

  showResult.appendChild(op1)
  if (e === 1) {
    showResult.textContent = 'Correct'
  } else showResult.textContent = 'Incorrect'
}
