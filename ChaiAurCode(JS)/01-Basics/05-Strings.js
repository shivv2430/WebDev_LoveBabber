const name = "Shivani";
const repoCount = 50;

// console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Shivani");

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('i'));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-4, 4);
console.log(anotherString);

const newStringOne = "   Shivani   ";
console.log(newStringOne.trim());
console.log(newStringOne.trimEnd());
console.log(newStringOne.trimStart());


// Replacing characters in a string
const newStringTwo = "Shivani";
console.log(newStringTwo.replace('i', '-'));
console.log(newStringTwo.replaceAll('i', '-'));



const url = "https://shivani.com/shivani%20pal"
console.log(url.replace('%20', '-'));

console.log(url.includes('shivani'));
console.log(url.includes('hello'));

const n = "Shivani-ki-mail-id";
console.log(n.split('-'));

