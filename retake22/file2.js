function init() {
  const addButton = document.getElementById("addButton");
  addButton.addEventListener("click", showName);
}
function showName() {
  const inputName = document.getElementById("yourName");
  const divShowName = document.getElementById("showName");
  const divElement = document.createElement("div");
  divElement.style = "display:flex";

  const checkboxElement = document.createElement("input");
  checkboxElement.setAttribute("type", "checkbox");
  divElement.appendChild(checkboxElement);

  checkboxElement.addEventListener("click", () => {
    divElement.remove();
    countCheckboxElement();
  });

  const pElement = document.createElement("p");
  pElement.textContent = inputName.value;

  divElement.appendChild(pElement);
  divShowName.appendChild(divElement);
  inputName.value = "";
  countCheckboxElement();
}

function countCheckboxElement() {
  let showNamediv = document.getElementById("showName");
  let checkboxes = showNamediv.querySelectorAll('input[type="checkbox"]');
  let checkboxCount = checkboxes.length;
  let totalName = document.getElementById("totalName");
  totalName.textContent = checkboxCount;
}
init();
