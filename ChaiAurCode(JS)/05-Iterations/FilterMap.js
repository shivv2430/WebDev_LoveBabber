//====== Filter in JS======
const coding = ['Javascript', "Python", "Java", "C++", "Python", "Ruby", "Perl"]

//forEach does not return anything
const values = coding.forEach((item) => {
    console.log(item)
})

console.log(values)

const MyNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNum = MyNums.filter((num) => {
    return num > 4
})
const NewNums = []

MyNums.forEach((num) => {
    if (num > 4) {
        NewNums.push(num)
    }
})
console.log(NewNums)

const books = [
    { title: "Book One", genre: "Sci-Fi", publish: 1983, Edition: 2004 },
    { title: "Book Two", genre: "fantasy", publish: 2004, Edition: 2004 },
    { title: "Book Three", genre: "non-fiction", publish: 1990, Edition: 1996 },
    { title: "Book Four", genre: "fiction", publish: 1983, Edition: 2004 },
    { title: "Book Five", genre: "Self-help", publish: 1999, Edition: 2007 },
    { title: "Book Six", genre: "Sci-Fi", publish: 2007, Edition: 2011 },
    { title: "Book Seven", genre: "fantasy", publish: 2010, Edition: 2012 },

]

const userBooks = books.filter((bk) => {
    return bk.genre === 'history'
})

const yrbooks = books.filter((bk) => {
    return bk.publish >= 2000 && bk.genre === "fantasy"
})
console.log(userBooks)
console.log(yrbooks)


//====Map in JS======

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNumbers = myNumbers.map((num) => {
    return num + 10
})

console.log(newNumbers);


//====Chaining======
const Nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = Nums
    .map((num) => { return num * 10 })
    .filter((num) => { return num >= 40 })
    .map((num) => { return num * 2 })
    .filter((num) => { return num >= 50 })

console.log(newNums);

