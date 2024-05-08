// ใส่รหัสนักศึกษา ชื่อ และนามสกุลของคุณในบรรทัดเดียว
// ตัวอย่าง: "ID: 123456, Name: John Doe"

import { Multiplication } from "./Multiplication.js";

function initialPage() {
    const generateButton = document.getElementById("generate");
    generateButton.style.backgroundColor = "#4CAF50"; 

    generateButton.addEventListener("click", showMultiplicationTable);

    const resetButton = document.getElementById("reset");
    resetButton.addEventListener("click", resetMultiplicationTable);
}

function showMultiplicationTable() {
    const numInput = document.getElementById("num").value;
    const multiplicationBase = parseInt(numInput); 

    if (isNaN(multiplicationBase)) { 
        alert("กรุณาใส่ค่าที่เป็นตัวเลข"); 
        return; 
    }

    const multiplicationInstance = new Multiplication(multiplicationBase); 
    const multiplicationArray = multiplicationInstance.getArrayOfMultiplicationTable();

    const resultList = document.getElementById("showMultiplicationTable"); 
    resultList.innerHTML = ""; 

    multiplicationArray.forEach((entry) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${entry.operand1} x ${entry.operand2} = ${entry.result}`; 
        resultList.appendChild(listItem); 
    });
    const resetButton = document.getElementById("reset");
    resetButton.style.backgroundColor = "red";
}

function resetMultiplicationTable() {
    const resultList = document.getElementById("showMultiplicationTable");
    resultList.innerHTML = "";
    const numInput = document.getElementById("num");
    numInput.value = "";
    const resetButton = document.getElementById("reset");
    resetButton.style.backgroundColor = "";
}
initialPage();
