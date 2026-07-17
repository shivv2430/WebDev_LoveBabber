//1st is Global Execution happen
//2nd memory face -> it only make space for variable by only its name and undefined their exact value
//3rd execution face -> it will run or execute it step by step

let val1 = 10;
let val2 = 5;
function addTwo(num1, num2) {
    let result = num1 + num2;
    return result;
}

addTwo(4, 5);
addTwo(val1, val2);

//Call Stack(LIFO)
// it has global execution
//koi bhi function ko execute krvakr bhar kr dete hai hum 
// addTwo call stack -> execute -> POP out of stack 
// addTwo call stack -> execute -> POP out of stack 
// global call stack -> finally POP out of stack
