function init() {
    const messageInput = document.createElement('input')
    messageInput.id = 'messageInput'
    messageInput.placeholder = 'Enter your greeting message'
    document.body.appendChild(messageInput)

    const colorSelect = document.createElement('select')
    colorSelect.id = 'colorSelect'
    const colors = ['Red', 'Green', 'Blue', 'Yellow']
    colors.forEach(color => {
        const option = document.createElement('option')
        option.textContent = color
        colorSelect.appendChild(option)
    })
    document.body.appendChild(colorSelect)

    const generateCardButton = document.createElement('button')
    generateCardButton.id = 'generateCardButton'
    generateCardButton.textContent = 'Generate Card'
    generateCardButton.addEventListener('click', generateCard)
    document.body.appendChild(generateCardButton)

    const cardDisplay = document.createElement('div')
    cardDisplay.id = 'cardDisplay'
    document.body.appendChild(cardDisplay)
}
 
function generateCard() {
    const messageInput = document.getElementById('messageInput')
    const message = messageInput.value
    
    const colorSelect = document.getElementById('colorSelect')
    const selectedColor = colorSelect.value


    const cardDisplay = document.getElementById('cardDisplay')

    cardDisplay.innerHTML = ''

    const card = document.createElement('div')
    card.textContent = message
    card.style.backgroundColor = selectedColor

    cardDisplay.appendChild(card)
}
 
init();
