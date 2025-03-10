const input = document.querySelector("#input")
const btn = document.querySelector("button")

btn.addEventListener("click", () => {
    check()
})

// check if it is palindrome or not
const check = () => {
    const val = input.value
    const valArr = val.split("")
    const rValArr = valArr.reverse().join("")
    if (val === rValArr) {
        alert("it's palindrome!")
    }
    else {
        alert("it's not palindrome")
    }
}