const user = {
    username: "shivi",
    price: 999,

    welcome: function () {
        console.log(`${this.username} , welcome`);
        console.log(this);     // Return current context ({username: 'shivi', price: 999})
    },
};

user.welcome();
username = "Sam";
user.welcome();

console.log(this);   // return empty object () -- In node not in browser

// Global Context of browser vs Node
function chai() {
    console.log(this);   // return global object -> window in browser -- it's different in node 
    console.log(this.username);   // Undefined in node
}
chai();

const chai2 = function () {
    console.log(this);   // return global object -> window in browser -- it's different in node 
    let username = "Sam";
    console.log(this.username);   // Undefined in node -- 
}
chai2();

// Arrow Function
const chai3 = () => {
    console.log(this);   // return global object -> window in browser -- it's different in node 
    let username = "Sam";
    console.log(this.username);   // Undefined in node -- 
}
chai3();

//basic arrow function
const add = (num1, num2) => {
    return num1 + num2;
}
console.log(add(2, 3));

//Implicit Return
const addTwo = (num1, num2) => num1 + num2;
console.log(addTwo(3, 5));

const addThree = (num1, num2, num3) => ({ username: "shivi" }); // return object

console.log(addThree(3, 5, 7));

const myArray = [2, 4, 5, 6, 3, 8];
myArray.forEach();
