//Objects

//Objects are containers for storing data in key-value pairs
// {} --> object literal --> isko use krne se object nhi banega
// (function () {
//     const user = {} //object literal

//     return user
// })()


//Object.create() --> ye object banayega  (constructor lki trha bn rha h to object banega)

//object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "shivani",
    [mySym]: "mykey1",
    'full name': "shivani pal",
    age: 18,
    email: "shivani@gamil,com",
    location: "jaipur",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]

}
console.log(JsUser.email) //method-1
console.log(JsUser["email"]) //method-2

//important --> yaha pr 
console.log(JsUser["lastLoginDays"])

JsUser.email = "[EMAIL_ADDRESS]"
console.log(JsUser.email)

//freeze iske baad hum object me koi changes nhi kr skte 
Object.freeze(JsUser)
JsUser.email = "[EMAIL_ADDRESS]"
console.log(JsUser.email)

console.log(JsUser[mySym])

JsUser.greet = function () {
    console.log("Hello js user");
}

console.log(JsUser.greet) //undefined 


console.log(JsUser.greet()) //error--> it is not a function

//to make it function -->unfreeze object(JsUser) 
JsUser.greetTwo = function () {
    console.log(`Hello js user, ${this.name}`);
}

console.log(JsUser.greet())
console.log(JsUser.greetTwo());
