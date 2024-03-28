function formValidation() {
  //   addEventHandler() adding saveHandler() function when a save button with event 'click' and adding resetHandler() function to a reset button with event 'click’.
  const addEventHandler = () => {
    const saveButton = document.getElementById('save')
    const resetButton = document.getElementById('reset')

    saveButton.addEventListener('click', saveHandler)
    resetButton.addEventListener('click', resetHandler)
  }
  // saveHandler() when a user clicks a save button, you must check that each a form field (name and feedback) is empty or not.
  // If a name field is empty, you must assign an error message 'please enter your name’ to `<p id="nameValidateMsg"></p>`.
  // If a feedback field is empty, you must assign an error mesage 'please enter your feedback' to ` <p id="feedbackValidateMsg"></p>`.
  const saveHandler = () => {
    const fullNameElement = document.getElementById('fullname')
    const feedbackElement = document.getElementById('feedback')

    const pNameMsg = document.getElementById('nameValidateMsg')
    const pFeedbackMsg = document.getElementById('feedbackValidateMsg')

    if (fullNameElement.value.trim().length === 0) {
      pNameMsg.textContent = 'please enter your name'
    } else pNameMsg.textContent = ''
    if (feedbackElement.value.trim().length === 0) {
      pFeedbackMsg.textContent = 'please enter your feedback'
    } else pFeedbackMsg.textContent = ''
  }
  // resetHandler() when a user clicks a reset button, you must reset all form values to its initial values.
  const resetHandler = () => {
    const fullNameElement = document.getElementById('fullname')
    const feedbackElement = document.getElementById('feedback')
    fullNameElement.value = ''
    feedbackElement.value = ''
  }

  return {
    addEventHandler
  }
}

const { addEventHandler } = formValidation()
addEventHandler()
