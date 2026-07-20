const myObject = {
    js: "JavaScript",
    cpp: "C++",
    rb: "Ruby",
    swift: "Swift by apple"
}

for (const key in myObject) {
    console.log(`${key} => ${myObject[key]}`); //this will print the key and value of the object
}

const programming = ["js", "ruby", "python", "cpp"]

for (const key in programming) {
    console.log(key, '->', programming[key]); //this will print the key and value of the array
}

