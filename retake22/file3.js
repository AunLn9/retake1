import { products } from './data/products.js'

function itemList(userItems) {
  const items = userItems
  // initalPage() adding filterItemsHandler() function to `<input type="text" />` with event 'input'. Then calling showItems() function to show list of all items as default when firstly loading page.
  const initialPage = () => {
    const inputElement = document.querySelector('input')
    // console.log(inputElement)
    inputElement.addEventListener('input', filterItemsHandler)
    showItems(items)
  }
  // filterItemsHandler() filtering an array of items that contains user’s keywords with case insensitive. Then calling showItems() function by sending filtered array as parameter.

  const filterItemsHandler = (event) => {
    // console.log(event.target)
    // console.log(event.target.value)
    const userKeywords = event.target.value.toLowerCase()
    const filterItems = items.filter((item) =>
      item.keywords.toLowerCase().includes(userKeywords)
    )
    showItems(filterItems)
  }
  // showItems(_items) accepting array of items and show them dynamically. You must remove previous ’s item list. Then creating `<li>` elements for each single item under `<ul id="items"></ul>`. Each `<li>` element contains a text content `'ID:product id, NAME:product name, KEYWORDS:product keywords’` . for example, `'ID:GGOEAFKA087499, NAME:Android Small Removable  Sticker Sheet', KEYWORDS:Android Small Removable Sticker Sheet, android stickers, sticker sheets, removable sticker sheets, small sticker sheet, android small sticker sheets, Android Sheet'`.
  const showItems = (items) => {
    //query ul element
    const ulElement = document.getElementById('items')
    //remove ul children
    ulElement.textContent = ''
    //create li elements
    items.forEach((item) => {
      const liElement = document.createElement('li')
      liElement.textContent = `ID:${item.id}, NAME:${item.name}, KEYWORDS:${item.keywords}`
      ulElement.appendChild(liElement)
    })
  }

  return {
    initialPage,
    filterItemsHandler,
    showItems
  }
}

export { itemList }
const { initialPage } = itemList(products)
initialPage()
