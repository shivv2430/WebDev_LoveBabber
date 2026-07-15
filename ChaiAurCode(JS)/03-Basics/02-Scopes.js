//global scope
//bahar wali chij andr ja sakti hai (in let, const and var)
let a = 10;
const b = 20;
var c = 30;

if (true) {
    console.log(a);
    console.log(b);
    console.log(c);
}

//block scope
//andr wli chij bahar nhi aa sakti (only for let, const)
if (true) {
    let a = 40
    const b = 50
    var c = 60

    console.log(a);
    console.log(b);
    console.log(c);
}

console.log(a);

//Nested-Scope
function one() {
    const username = "shivi"

    function two() {
        const website = "youtube"
        console.log(username); //accessible
    }
    // console.log(website); //not accessible
    // two();
}

// one();

//Important
if (true) {
    const username = "shivi"
    if (username === "shivi") {
        const website = " youtube"
        console.log(username);
        console.log(website);
        console.log(username + website);
    }
    // console.log(username); //not give output (error)
    console.log(website);
}
console.log(username); //not give output(error)



//++++++++++++++++++++++interesting++++++++++++++++++++++++++++++++++

//addOne ----> 6
function addOne(number1) {
    return number1 + 1
}
console.log(addOne(5)) //6


//addTwo(5) ---->error
const addTwo = function (num) {
    return num + 2;
}
console.log(addTwo(5));

