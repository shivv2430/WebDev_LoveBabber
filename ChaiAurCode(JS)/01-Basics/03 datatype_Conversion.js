let score = "33"  //string
console.log(score)
console.log(typeof score)

let score2 = 33  //number
console.log(score2)
console.log(typeof score2)

let valueinNumber = Number(score)
console.log(valueinNumber)
console.log(typeof valueinNumber)


let score3 = "33abc"
let valueinNumber2 = Number(score3)
console.log(valueinNumber2)
console.log(typeof valueinNumber2)


let score4 = null
let valueinNumber3 = Number(score4)
console.log(valueinNumber3)
console.log(typeof valueinNumber3)

//conversion
//33 = number
//"33" = string
//"33abc" = NaN(Not a Number)
//null => number => 0
// true => 1 , false = 0