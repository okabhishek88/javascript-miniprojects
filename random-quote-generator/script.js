const btn = document.querySelector("#butt")
const quo = document.querySelector("#quote")

// generate quotes
btn.addEventListener("click", () => {
    generateQuote()
})

// random quotes
const quotes = [
    "Be the change you wish to see in the world. – Mahatma Gandhi",
    "Do what you love, love what you do.",
    "The best way to predict the future is to create it. – Abraham Lincoln",
    "Happiness is not by chance, but by choice.",
    "Believe you can and you're halfway there. – Theodore Roosevelt",
    "Success is the sum of small efforts, repeated day in and day out. – Robert Collier",
    "Stay focused and never give up.",
    "Dream big. Start small. Act now.",
    "Life is 10% what happens to us and 90% how we react to it.",
    "You are never too old to set another goal or to dream a new dream. – C.S. Lewis",
    "Everything you can imagine is real. – Pablo Picasso",
    "Don't count the days, make the days count. – Muhammad Ali",
    "Failure is not the opposite of success; it's part of success.",
    "In the middle of every difficulty lies opportunity. – Albert Einstein",
    "Believe in yourself and all that you are.",
    "Keep going. Everything you need will come to you at the perfect time.",
    "Small steps lead to big changes.",
    "Life is what happens when you're busy making other plans. – John Lennon",
    "Nothing is impossible; the word itself says 'I'm possible.' – Audrey Hepburn",
    "The only way to do great work is to love what you do. – Steve Jobs"
]

// to store unique index
const usedIndexes = new Set()

// generate random quotes
const generateQuote = () => {

    // Check if all quotes are used
    if (usedIndexes.size === quotes.length) {
        // Reset the usedIndexes set when all quotes have been used
        usedIndexes.clear()
    }

    while (true) {
        // Generate a random index
        randomIndex = Math.floor(Math.random() * quotes.length)
        // Skip if the index is already used
        if (usedIndexes.has(randomIndex)) continue
        // Get the quote at the random index
        const quote = quotes[randomIndex]
        // Display the quote
        quo.innerText = quote
        // Mark the index as used
        usedIndexes.add(randomIndex)
        // Exit the loop
        break
    }
}