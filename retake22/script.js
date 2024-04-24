
let items = [];

function init() {
    const itemInput = document.createElement("input");
    itemInput.id = "itemInput";
    itemInput.placeholder = "Enter item"; 

    const addButton = document.createElement("button");
    addButton.id = "addButton";
    addButton.textContent = "Add"; 

    const clearAllButton = document.createElement("button");
    clearAllButton.id = "clearAllButton";
    clearAllButton.textContent = "Clear All"; 

    const itemList = document.createElement("ul");
    itemList.id = "itemList"; 

    document.body.appendChild(itemInput); 
    document.body.appendChild(addButton);
    document.body.appendChild(clearAllButton);
    document.body.appendChild(itemList); 


    addButton.addEventListener("click", addItem); 
    clearAllButton.addEventListener("click", clearAll); 
}

function addItem() {
    const input = document.getElementById("itemInput");
    const newItem = input.value.trim(); // Trim input to remove extra spaces

    if (newItem !== "") { 
        items.push(newItem); 
        displayItems(); 
        input.value = ""; 
    }
}


function clearAll() {
    items = []; 
    displayItems(); 
}


function displayItems() {
    const itemList = document.getElementById("itemList");
    itemList.innerHTML = ""; 


    items.forEach(item => {
        const listItem = document.createElement("li"); 
        listItem.textContent = item; 
        itemList.appendChild(listItem); 
    });
}


init(); 
