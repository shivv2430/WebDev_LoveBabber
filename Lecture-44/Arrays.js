// let obj= {
//     Name:"shivani",
//     age:"19",
//     weight:"35Kg" ,
//     height:"4ft 7inch",
//     greet : function(){
//         console.log("hello jii kaise ho sare");
//     }
// };
// console.log(obj);
// obj.greet();
// console.log(typeof(obj));

// // Creation of array
// let arr=[1,2,3,4,5];
// //array constructor
// let brr =new Array("shivani",1,true);
// brr.push("pal");    //add element at last
// brr.pop("pal");     //delete element from last
// brr.shift("shivani");       //remove leftest element
// brr.unshift("hello");           //add element in left side
// brr.push(10);
// brr.push(20);
// brr.push(30);
// brr.push(40);
// // console.log(brr.slice(2,4));         //get value via index value
// brr.splice(1,2, "kunal");           //remove value via index  value
// console.log(brr);

// // console.log(typeof(arr));
// // console.log(typeof(brr));

let arr=[n1,n2,n3];
let ansArray = arr.map((number){
    return number*number;
})

console.log(ansArray);
