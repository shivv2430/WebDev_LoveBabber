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
// console.log(loginUserMessage());   //undefined because nothing is passed in the argument and if not passed in function return undefined (and it is not error)


function calculateCartPrice(val1, val2, ...num1) {
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000)) //output --> [ 500, 2000 ] (rest operator)


//object in function

const user = {              //user is object
    username: "shivi",
    price: 199.       //if there were two key with same name like price and prices it will only take first key name
}

function handleObject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}


// handleObject(user);
handleObject({ username: "sammy", price: 299 })


//array in function

const myArray = [200, 400, 100, 600]

function handleArray(anyarray) {
    console.log(`array element is ${anyarray[0]} and ${anyarray[1]}`);
}

handleArray(myArray);


