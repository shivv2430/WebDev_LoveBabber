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
