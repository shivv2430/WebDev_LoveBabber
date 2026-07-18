const userEmail = "s@shivani.ai"

if (userEmail) {
    console.log("Got user email");
}
else {
    console.log("Don't have user email");
}

// falsy value:
// false,zero,negative number,0n,null,undefined,NaN,string empty,BigInt , -0,0n,"" "

// truthy value:
// "0", "false", " " (space in string), empty object {}, array [], function(){} 

const Useremail = [];

if (Useremail.length === 0) {
    console.log("Array is empty");
}
else {
    console.log("Array is not empty");
}

const emptyObj = {};
if (Object.keys(emptyObj).length === 0) {
    console.log("Empty object");
}
else {
    console.log("Object is not empty");
}


//Nullish Coalescing Operator (??) :: null undefined

let val1;
val1 = 5 ?? 10;
console.log(val1);  //output:5

val1 = null ?? 10;
console.log(val1);   //output:10

val1 = undefined ?? 15;
console.log(val1);   //output:15

val1 = null ?? 10 ?? 20;
console.log(val1);   //output:10

//Terniary Operator
//Condition ? exprIfTrue : exprIfFalse

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
