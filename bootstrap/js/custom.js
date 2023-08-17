const quotes = [ {id: 1, quotation: "The only way to do great work is to love what you do", writer: "Steve Jobs"}, {id: 2, quotation: "Don't watch the clock; do what it does. Keep going", writer: "Sam Levenson"},{id: 3, quotation: "Success is not final, failure is not fatal. It is the courage to continue that counts", writer: "Winston Churchill"}, {id: 4, quotation: "Innovation distinguishes between a leader and a follower", writer: 'Steve Jobs'}, {id: 5, quotation: "The future belongs to those who believe in the beauty of their dream", writer: "Eleanor"}, {id: 6, quotation: "Do it tired. Do it happy. Do it sad. Do it weak. Consistency is the key not motivation", writer: "Solomon Bonney"}
]

const generateBtn = document.getElementById("generateBtn");
const quoteContent = document.getElementById("quote");
const writer = document.getElementById("writer");
const quoteContainer = document.getElementById("quoteContainer");
window.addEventListener("load", ()=> {
    quoteContainer.style.display = "none";
})
//generate random quote function 
const generateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    quoteContainer.style.display = "block";
    quoteContent.textContent = randomQuote.quotation;
    writer.textContent = randomQuote.writer;
}
//add event listener to the generate button
generateBtn.addEventListener("click", generateRandomQuote);


