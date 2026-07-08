// console.log("S");
// console.log("H");
// console.log("I");
// console.log("V");
// console.log("A");
// console.log("N");
// console.log("I");


function sayMyname() {
    console.log("S");
    console.log("H");
    console.log("I");
    console.log("V");
    console.log("A");
    console.log("N");
    console.log("I");
}

sayMyname();


// function addTwonumbers(number1, number2) {
//     console.log(number1 + number2);
// }
// addTwonumbers(4, 5);


function addTwonumbers(number1, number2) {
    const result = (number1 + number2);
    console.log("inside function")
    return result;
    console.log("after function"); // (this is never executed)
}

// addTwonumbers(4, 5);
const result = addTwonumbers(4, 5)

console.log(result);


function loginUserMessage(username) {
    if (username === undefined) {      //or if(!username){}
        console.log("please enter a username");
        return;
    }
    return `${username} just logged in`

}

// console.log(loginUserMessage("shivani"));
console.log(loginUserMessage());   //undefined because nothing is passed in the argument and if not passed in function return undefined (and it is not error)
