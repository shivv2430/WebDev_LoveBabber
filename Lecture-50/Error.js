// Flow of code can disrupt(can't run)------>Error
// 1.Compile-time Error
// 2.Run Time Error
                                            // 1.Compile-time Error
// Syntax_Error
// console.log(1;
                                            // 2.Run Time Error
 //Reference Error(we don't initialize the x int)                                               
// console.log(x);

try{
    console.log("Try block starts here ");
    console.log(x);
    console.log("Try block ends here ");
    //a
    //b
    //c

}
catch(error) {
    //define krte h error ke sath aap kya krna chahte h
    //retry logic
    //fallback mechanism
    //logging
    //custom error
    console.log("I AM TRYING CATCH BLOCK ");
}
finally{
    console.log("I WILL RUN EVERYTIME ");
}



// we show errors to others in aur code by owns(throws)
try{
    // reference error
    console.log(x);
}
catch(err) {
    throw new Error ("Phle x ko declare kro fir uske baad print karvana")
}

let errorcode=420;
if(errorcode==420){
    throw new Error ("Invalid Json");
}































