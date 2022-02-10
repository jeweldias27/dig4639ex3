import fetch from 'node-fetch';

let quotes = [
    '"Who Dares Wins." - SAS',
    '"To be or not to be?" - Shakespeare',
    '"Woah" - Neo'
]


console.log(quotes[Math.floor(Math.random() * 3)])

const response = await fetch('https://quotable.io/random');
const data = await response.json();
console.log('"${data.content}" - ${data.author}')