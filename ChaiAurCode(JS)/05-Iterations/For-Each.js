const coding = ["js", "ruby", "python", "cpp"]

// coding.forEach( function (item) { 
//     console.log(item) 
// } )

// coding.forEach( (item) => { 
//     console.log(item) 
// } )

// function printMe (item) {
//     console.log(item)
// }
// coding.forEach(printMe)

// coding.forEach( (item, index, array) => {
//     console.log(item, index, array);
// } )

//array ke andr object with comma separated
const myCoding = [
    {
        languageName: "JavaScript",
        languageFileName: "js"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    },
    {
        languageName: "Java",
        languageFileName: "java"
    },
    {
        languageName: "C++",
        languageFileName: "cpp"
    }
]

myCoding.forEach((item) => {
    console.log(item.languageName);
})