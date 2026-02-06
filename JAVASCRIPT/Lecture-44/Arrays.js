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


// let arr=[10,20,30];
// arr.map((number) =>{
//     console.log(number+1);
// })
// arr.map((number,index) => {
//     console.log(number,index);
//     // console.log(index);
// })
                                // Filter
// let arr =[10,20,30,11,21,44,51];
// let evenArray = arr.filter((number) => {
//     return number%2 ===0;});
//     if ( number%2 === 0){
//         return true;
//     }
//     else {
//         return false;
//     }
// })
// console.log(evenArray)


// let ansArray = arr.map((number) =>{
//     return number*number;
// });

// console.log(ansArray);

// let arr =[1,2,'Kunal','babbar',null];
// let ans =arr.filter((value) => {
//     if( typeof(value) === 'string') {
//         return true;
//     }
//     else{
//         return false;
//     }
// });
// console.log( ans);


// let arr=[10,20,30,40];
// let ans =arr.reduce((acc,curr) => {
//     return acc + curr;
// },0);
// console .log(ans);

//             // Ascending order
// let arr = [9,1,7,4,2,8];
// arr.sort();        //acsending order

// // arr.sort((a,b) => b-a);             //descending order

// console.log(arr);

// console.log(arr.indexOf(9));           //indexing of any value

                                     //FOR EACH 
// let arr = [10,20,30];
// let length = arr.length;
// console.log("length: " , length);
// // tradinational method
// for( let index=0;index<length;index++){
//     console.log (arr[index]);

// }

// arr.forEach((value,index) =>{
//     console.log(" Number : ", value ,"Index : ",index);
// })

                                         // FOR IN
// let obj= {
//     Name:"shivani",
//     age:"19",
//     weight:"35Kg" ,
//     height:"4ft 7inch",
//     greet : function(){
//         console.log("hello jii kaise ho sare");
//     }
// };
// for (let key in obj){
//     console.log(key," ",obj[key]);
// }
// console.log(obj);
// // obj.greet();
// // console.log(typeof(obj));

                                //FOR-OF
// let arr = [10,20,30,40];
// for(let value of arr){
//     console.log (value);
// }
// let fullName ="Shivani";
// for(let val of fullName){
//     console.log (val);
// }

                            // Arrays  with function
let arr =[10,20,30,40,50];

// function getSum(arr) {

let getSum = (arr) => {
    arr.forEach((value) =>{
        let sum=0;
        arr.forEach((value) =>{
             sum = sum + value;
        })
       return sum;
    })
    // let len = arr.length;
    // let sum = 0;
    // for(let index=0; index<len; index++){
    //     sum = sum + arr[index];
    // }
    // return sum;
}
let totalSum = getSum(arr);
console.log(totalSum);