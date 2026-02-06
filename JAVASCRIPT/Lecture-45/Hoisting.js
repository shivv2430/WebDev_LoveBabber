                                              //variable Hoisting

console.log(age);// agr console.log() var se phle aaya hai to var to declare hoga pr value nahi..... output undefined ayega
var age =25;            //agr console.log()  var dec ke baad aa rha h to vo value ko bhi declare krega

                                            //function Hoisting
// function ke case mei console.log() ko phle likho ya baad mei function declare hoga
saymyname("Shivani");
function saymyname (finalName){
    console.log(finalName);
}

                                            //let&const Hoisting
//let ke case mei agr console.log() baad mei print krne pr value dega ..... agr console.log() ko phle likhenge to error dega
let age=25;
const Age=20;
console.log(age);
console.log(Age);

//BluePrint->Class.        Object->instance
// similarly as let&const Hoisting
class Human{

}
const object1 = new Human();

//Stack --->container that contain data structure in LIFO(Last In First Output) format

