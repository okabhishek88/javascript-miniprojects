const btn = document.querySelector("button")
const input = document.querySelector("input")
const oList = document.querySelector("#oList")

// empty array to store values
let items = []

// add items
const addItems = () => {
    const val = input.value.trim()
    if (val) {
        items.push(val)
        input.value = ""
        renderItems()
    }
}

// remove items
const removeItems = (itemToRemove) => {
    items = items.filter((item) => item !== itemToRemove)
    renderItems()
}

// render items
const renderItems = () => {
    oList.innerHTML = null
    items.forEach((item) => {
        const itemElement = document.createElement("li")
        itemElement.textContent = item
        // remove elements
        const removeButton = document.createElement("button")
        removeButton.textContent = "Remove Item"
        removeButton.addEventListener("click", () => removeItems(item))
        // delete button
        itemElement.appendChild(removeButton)
        // add element to ol
        oList.appendChild(itemElement)
    })
}

// add items
btn.addEventListener("click", addItems)