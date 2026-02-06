                            //unary Operators
let a=3;
let b=4;
console.log(a++);                //post Increment
console.log(++a);                //pre Increment

console.log(--a);                  //pre Decrement
console.log(a--);                   //post Degreement
                            // Binary Operators
// arithmetic operators

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);

//assignment operators

console.log(a+=b);
console.log(a-=b);
console.log(a*=b);
console.log(a/=b);

//Relational operators
console.log( a>b);
console.log(a<b);
console.log( a>=b);
console.log(a<=b);
console.log(a==b);
console.log(a!=b);
console.log(a===b);
console.log(a!==b); 

// Logical Operators
// let ans =(true&& true&& true);
// let ans=(false|| false|| true);
let ans=!(true);
console.log(ans);

                                // Ternay Operators
                                // (condition? statement1:statement2)
 
 let age=25;
let status1 =(age>18? "i can vote":" i can't vote");
console.log(status1);

// Bitwise Operators
console.log(2 & 5);                 //AND Operator
console.log(2 | 5);                 //OR Operator
console.log(~(0));                  //NOT Operator
console.log(2^2);                   //XOR Operator
console.log(10>>1);                  //Right shift
console.log(10<<1);                  //Left shift