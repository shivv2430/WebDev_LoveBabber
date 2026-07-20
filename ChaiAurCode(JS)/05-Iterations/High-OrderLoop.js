//for of 

// ["","",""]
// [{},{},{}]

const arr = [1, 2, 3, 4, 5, 6];
for (const num of arr) {
    console.log(num);
}

//Maps --> for unique value and order is maintained
const map = new Map();
map.set('IN', "India");
map.set('US', "United States");
map.set('FR', "France");
map.set('IN', "India");//this will not be printed as map keys are unique

for (const [key, value] of map) {
    console.log(key, '->', value);
}

//Objects are not iterable in for of loop

const myObj = {
    game1: "NFS",
    game2: "GTA",
    game3: "Valorant"
};

for (const [key, value] of myObj) {
    console.log(key, '->', value);
}
