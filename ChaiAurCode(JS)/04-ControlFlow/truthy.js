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

