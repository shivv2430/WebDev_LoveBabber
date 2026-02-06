// DefaultParameters---> allow us to use function default use
// when we call funstion and got give their value so we use default value that we use in function 


function sayname(myname ="Shivani"){
     console.log("My name is : ",myname)
}
sayname();

function Name(fname,lname=fname.toUpperCase()){
console.log("My name is : ",fname," ",lname);
}
Name("Shivani");

        // dafault value mei object/array[] bhi insert kr skte hai

function solve(value ={age:17,wt:49,ht:170}){
    console.log("HELLO JEE",value);
}
solve();

function solve(value =["Rahul","Love","Kunal"]){
    console.log("HELLO JEE",value);
}
solve();

        // Null value
function solve(value =["Rahul"]){
    console.log("HELLO JEE",value);
}
solve(null);
solve(undefined);

function getage(){
    return 36;
}
function utility(name="Shivani",age=getage()){
console.log(name," ",age);
}
utility();


