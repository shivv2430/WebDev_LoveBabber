const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "batman", "wonderwoman"]

// marrvel_heros.push(dc_heros)
// console.log(marrvel_heros)

const all_heroes = marvel_heros.concat(dc_heros)
console.log(all_heroes)

//spread-operator
const all_heros = [...marvel_heros, ...dc_heros]
console.log(all_heros)

const nestedArr = [1, 2, 3, [4, 5, [6, 7]], 8, 9, [10]]

const flatArr = nestedArr.flat(2)
console.log(flatArr)

//Array.isArray()
console.log(Array.isArray([1, 2, 3])) // true
console.log(Array.isArray("shivam")) // false

//Array.from() 
// it is used to convert an array like object or iterable object into an array
// if we pass an object to from it will return empty array unless the object has length keys value 
console.log(Array.from("shivam")) // convert string to array  --> ["s", "h", "i", "v", "a", "m"]   

console.log(Array.from({ name: "shivam" })) // not convert object to array directly     // empty array []     interesting

//Array.of() 
// it is used to create an array from a list of values
const arr = Array.of(1, 2, 3, 4, 5)
console.log(arr)

