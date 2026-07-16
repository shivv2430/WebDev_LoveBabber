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

