const greetings = require("./greeting.js");
const f = require('./formula.js');
const fs = require('fs');

// "Hello"
greetings.greetingEnglish();

// "Konichiwa"
greetings.greetingJapanese();

// "Hola"
greetings.greetingSpanish();

// "Hallo"
greetings.greetingIcelandic();

// 100
console.log(f.times(10, 10));

// 10
console.log(f.divide(f.times(10, 10), 10));

