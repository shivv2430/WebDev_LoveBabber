// const tinderUser = new Object() //or {} 
// const tinderUser = {} //object literal  

// console.log(Object) //output constructor
// console.log(tinderUser) //output empty object 
tinderUser.Userid = "123"
tinderUser.name = "shivani"
tinderUser.isLoggedIn = false
console.log(tinderUser)
//console.log(tinderUser) //undefined

const regularUser = {
    email: "shgihhb@gmail.com",
    fullName: {
        userfullname: {
            userFirstName: "shivani",
            userLastName: "pal"
        }
    }
}

console.log(regularUser.fullName.userfullname.userFirstName)
//similarly in this type if we use "?" i.e for optional chaining that if this present other not then it is nothning otherwise return undefined 
console.log(regularUser.fullName?.userfullname?.userFirstName)


//merge 2 object
const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "c", 4: "d" }
const obj3 = { 5: "e", 6: "f" }

//const result = { obj1, obj2, obj3 } //output --> {obj1: {1: "a", 2: "b"}, obj2: {3: "c", 4: "d"}, obj3: {5: "e", 6: "f"}}.    (object ke andr object ayega)

//method - 1
//const result = Object.assign({}, obj1, obj2, obj3) //method -1 --> output --> {1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "f"}    }


//method -2 --> spread operator
const result = { ...obj1, ...obj2, ...obj3 }  //output --> {1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "f"}   

console.log(result) // {1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "f"}


const users = [
    {
        id: 1,
        name: "shivam",
        email: "[EMAIL_ADDRESS]"
    },
    {
        id: 2,
        name: "shivani",
        email: "[EMAIL_ADDRESS]"
    },
    {
        id: 3,
        name: "shubham",
        email: "[EMAIL_ADDRESS]"
    }
]

//console.log(users[1]) // { id: 2, name: 'shivani', email: [EMAIL_ADDRESS]' }
console.log(Object.keys(tinderUser)) // [ 'Userid', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)) // [ '123', 'shivani', false ]
console.log(Object.entries(tinderUser)) // [ [ 'Userid', '123' ], [ 'name', 'shivani' ], [ 'isLoggedIn', false ] ]
console.log(tinderUser.hasOwnProperty('name')) // true


const course = {
    name: "js in hindi",
    price: "free",
    courseInstructor: "hitesh"
}

// course.courseInstructor
const { courseInstructor: instructor } = course
console.log(instructor) //hitesh


//{} = deconstructor
const navbar = ({ company }) => {
}
navbar(company = "hitesh")


//JSON format

// (api in object)
// {
//     name :"shivani",
//     coursename : " JS in hindi",
//     price : "free"
// }

// (api in array) 
//[
// {},
// {},
// {}
// ]