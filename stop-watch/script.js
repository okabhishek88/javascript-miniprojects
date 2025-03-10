const btn1 = document.querySelector("#start")
const btn2 = document.querySelector("#stop")
const btn3 = document.querySelector("#reset")
const time = document.querySelector("#time")
let secondsElapsed = 0
let interval = null

// pad start 
const padStart = (value) => {
    return String(value).padStart(2, "0")
}

// to start timer
const startClock = () => {
    if (interval) return
    interval = setInterval(() => {
        secondsElapsed++
        const min = Math.floor(secondsElapsed / 60)
        const sec = secondsElapsed % 60
        time.textContent = `${padStart(min)}:${padStart(sec)}`
    }, 1000)
}

// to stop timer
const stopClock = () => {
    clearInterval(interval)
    interval = null
}

// to reset timer
const resetClock = () => {
    stopClock()
    secondsElapsed = 0
    time.textContent = "00:00"
}

// buttons to control time
btn1.addEventListener("click", () => {
    startClock()
})
btn2.addEventListener("click", () => {
    stopClock()
})
btn3.addEventListener("click", () => {
    resetClock()
})