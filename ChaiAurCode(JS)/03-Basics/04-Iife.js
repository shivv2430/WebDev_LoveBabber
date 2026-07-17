//Immediately Invoked Function Expressions
// ()() -> First paranthesis is for creating function
// Second paranthesis is for executing function

//global scope ke variables se pollution hoti hai to usse bachne ke liye hum log IIFE ka use karte hai 

//named Iife:
(function chai() {
    console.log("DB is connected");
})();

(function chai1() {
    console.log("DB is connected 2")
})();

//agr yha upar waale 2 function h unke last mei hum semicolon nhi lagayenge to error ayega kyuki phle wala function close nhi hua 
//Unnamed Iife
(() => {
    console.log("DB is connected 3")
})();

//Iife with parameters
((name) => {
    console.log(`DB is connected ${name}`)
})('shivani');
