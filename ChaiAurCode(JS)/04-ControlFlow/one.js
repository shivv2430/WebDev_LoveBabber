// if
const isUserLoggedIn = true

if (isUserLoggedIn) {
    console.log("Executed");
}
// greater(<) , smaller(>), greater then or equal to (>=) , smaller then or equal to (<=) , equal to (==) , not equal to (!=) , strictly equal to (===) , strictly not equal to (!==)
// Note (==) check only value but (===) check value and type both

const temperature = 40;
if (temperature === 40) {
    console.log("temperature = 40");
}
else {
    console.log("temperature greater then 40");
}
console.log("temperture is executed");


const score = 200;
if (score > 100) {
    let power = "fly";
    console.log(`User power: ${power}`);
}
// console.log(`User power: ${power}`);


const balance = 1000;
if (balance > 500) console.log("balance is greater than 500");

if (balance > 500) console.log("Executed"), console.log("Greater then 500"); // this is not a good way of writing code


if (balance < 500) {
    console.log("less than 500")
}
else if (balance > 750) {
    console.log("less than 750")
}
else if (balance > 900) {
    console.log("less than 900")
}
else {
    console.log("less than 1200")
}

const userLoggedIn = true;
const debitCard = true;
const LoggedInFromGoogle = false;
const LoggedInFromEmail = true;

// (&&) is logical AND operator -> this will check both condition are true or not if one is false then it will not execute
if (userLoggedIn && debitCard) {
    console.log("Allow to buy courses");
}

// (||) is logical OR operator -> this will check both condition are true or not if one is true then it will execute
if (LoggedInFromGoogle || LoggedInFromEmail) {
    console.log("User l ogged in");
}
