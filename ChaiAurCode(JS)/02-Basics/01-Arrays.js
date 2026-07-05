//arrays

const myArr = [0, 1, 2, 3, 4, 5]
const myHeroes = ["Shaktiman", "Spider-man", "Superman"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[0])

//shallow copy vs deep copy
//shallow copy --> copy of object with same refernce 
//deep copy --> copy of object with different reference 

//Array methods



//Push is used to add element to the array
myArr.push(6)

//pop is used to remove the last element from the array
myArr.pop()

//unshift is used to add element to the front of the array
myArr.unshift(0)

//shift is used to remove the first element from the array
myArr.shift()

//includes is used to check if an element is present in the array
console.log(myArr.includes(9))

//indexOf is used to find the index of an element in the array
console.log(myArr.indexOf(9))

//join is used to convert an array to a string
const newArr = myArr.join()
console.log(typeof newArr)


//Slice method -> returns a copy of a portion of an array 
console.log(myArr.slice(1, 3))
console.log(myArr)

//splice method -> changes the original array by removing, replacing elements 
console.log(myArr.splice(1, 3))
console.log(myArr)


