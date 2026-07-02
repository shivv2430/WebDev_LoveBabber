//Primitive datatype(string,number,boolean,undefined,bigint,symbol)
// Num_Datatype
// let marks=78;                 //defined marks//
// marks="Shivi";                //string//
// marks=true;                   //boolean//
// marks=null;                   //null//
// let marks=432457654654354765655321887665432309887667543221112224870988098087655432431;                   //Big Int//
// console.log (marks);                    //print

// let marks;                                  //UnDefined//
// console.log(marks);

marks = false;
console.log(typeof (marks));

//non primitive(reference)-----> object,array,function
console.log(typeof ({ name: "shivi" }));    //object (under curly braces)
console.log(typeof ([1, 2, 3, 4, 5]));       //array

const myFunction = function () {
    console.log("Hello world!");
}
console.log(typeof myFunction);       //function