const accountId = 1445343
let accountEmail = "[EMAIL_ADDRESS]"
var accountPass = "123456"
accountCity = "Delhi"


/*
prefer no to use var because of 
block scope and functional scope
*/

// accountId = 2;    //not allowed
accountEmail = "abc@gmail.com"   //not allowed
accountPass = "74265876"    //not allowed
accountCity = "Banglore"     //not allowed
console.log(accountId)

console.table([accountId, accountEmail, accountPass, accountCity])