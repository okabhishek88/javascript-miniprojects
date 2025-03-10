const body = document.querySelector("body")
const buttons = document.querySelectorAll("button")

// change color function
const setColor = (name) => {
    body.style.backgroundColor = name
}

// generate random color
const randomColor = () => {
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)
    const color = `rgb(${red}, ${green}, ${blue})`
    body.style.backgroundColor = color
}

// eventlistner
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.id === "random") {
            randomColor()
        }
        else {
            setColor(button.id)
        }
    })
})
