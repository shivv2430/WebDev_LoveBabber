// Object---> Dynamic Nature(bcoz after call it, we can update/add value )

// let obj={
//     age:12,
//     ht: 158,
//     wt :85,
// };

// console.log(obj);
// obj.color="White";
// console.log(obj)

// let src={
//     age:12,
//     ht: 158,
//     wt :85,
// };
// let dest={...src};          //Spread Operations

// src.age = 90;

// console.log ("src : " , src);
// console.log("dest : ",dest);



                        //Assign Operator
// let src={
//     age:12,
//     ht: 158,
//     wt :85,
// };

// let src2={
//     roll_no : 10098,
//     name:"Shivani Pal",
// };

// let dest =Object.assign({},src,src2);
// src.age=90;
// console.log ("src : " , src);
// console.log("dest : ",dest);
// console.log(dest);

                            // Iteration Operators
let src={
    age:12,
    ht: 158,
    wt :85,
};

let dest={};
for(let key in src){
    let newKEY=key;
    let newValue =src[key];
    dest[newKEY]=newValue;
}
src.age=90;
console.log ("src : " , src);
console.log("dest : ",dest);


                                        // Garbage Collectors
// free the memory that has no use,....so to remove it called GC 
// Always run in background
// no control in it
// increase performance

