// ใส่รหัสนักศึกษา ชื่อ และนามสกุลของคุณในบรรทัดเดียว
// ตัวอย่าง: "ID: 123456, Name: John Doe"

import { Multiplication } from "./Multiplication.js";

function initialPage() {
// Generate Button Style: Set the background color of the "Generate" button <input type="button" id="generate" value="Generate" /> to #4CAF50.
    const generateButton = document.getElementById("generate");
    generateButton.style.backgroundColor = "#4CAF50"; 

// Add a "click" event listener to the "Generate" button, invoking showMultiplicationTable.
    generateButton.addEventListener("click", showMultiplicationTable);

// Add a "click" event listener to the "Reset" button <input type="button" id="reset" value="Reset" />, invoking resetMultiplicationTable.
    const resetButton = document.getElementById("reset");
    resetButton.addEventListener("click", resetMultiplicationTable);
}

function showMultiplicationTable() {
  // get num และให้มันมีค่า .value ถ้าไม่ใส่จะมองว่าเป็นตัวอะรไรไม่รู้และรันไม่ได้
  const numInput = document.getElementById('num').value
  // parseInt เอาไว้เช็คว่ามีตัวอักษรมาไหม ถ้ามีจะรันไม่ได้
  const multiplicationBase = parseInt(numInput)


  if (isNaN(multiplicationBase)) {
    alert('กรุณาใส่ค่าที่เป็นตัวเลข')
    return
  }

  const multiplicationInstance = new Multiplication(multiplicationBase)
  const multiplicationArray = multiplicationInstance.getArrayOfMultiplicationTable()

// Table Generation: Use the getArrayOfMultiplicationTable() method from the
// Multiplication class instance to obtain an array of objects detailing the
// multiplication table entries.
  const resultList = document.getElementById('showMultiplicationTable')
  resultList.innerHTML = ''

// Display: Iterate over the array to create <li> elements for each multiplication fact
// and append them to <ul id="showMultiplicationTable"></ul>, formatting the
// content as "operand1 operator operand2 = result".
  multiplicationArray.forEach((entry) => {
    const listItem = document.createElement('li')
      listItem.textContent = `${entry.operand1} x ${entry.operand2} = ${entry.result}`
    resultList.appendChild(listItem)
  })


  // ตั้งปุ่มเป็นสีแดงเมื่อเราทำงานคำสั่ง showMultiplicationTable()
  // Reset Button Style: Change the background color of the "Reset" button to red.
  const resetButton = document.getElementById('reset')
  resetButton.style.backgroundColor = 'red'
}

// ให้ default เป็นสีปกติ พอ fuction showMultiplicationTable() ทำงานค่อยเปลี่ยนเป็นสีแดงเลยไม่ต้องตั้งสีในปุ่มเป็นสีแดง 
function resetMultiplicationTable() {

    // Clear Display: Remove all content from <ul *** id="showMultiplicationTable"> *** </ul>.
    const resultList = document.getElementById("showMultiplicationTable");
    resultList.innerHTML = "";

    // Clear Input: Reset the value of <input type="text" *** id="num" *** placeholder="E.g. 2" /> to an empty string.
    const numInput = document.getElementById("num");
    numInput.value = "";

    // Reset Button Style: Restore the "Reset" button's background color to "" *none color
    const resetButton = document.getElementById("reset");
    resetButton.style.backgroundColor = "";
    
}
initialPage();
