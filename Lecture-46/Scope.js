                                                        // Global Scope
// ( also for var,const,let instead for vsr in first line)

// var age =15;

// console.log(age);

// {
//     console.log(age);
// }
// if(true){
//     console.log(age);
// }
// for(let i=0;i<2;i++) {
//     console.log(i,age);
// }
// function sayHello(){
//     console.log("hii",age);
// }
// sayHello();


//                                                      // Function Scope(function)
// we can access variable if they were inside the curly braces:-

// function sayHello() {
//     var Name ="Earth";
//     console.log("Hello Dunia",Name);
// }
// sayHello();


                                                        // Block Scope(let)
{
    let height = 180;
}
console.log(height);


