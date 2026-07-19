//for loop

for (let i = 0; i < 10; i++) {
    const element = i;
    if (element == 5) {
        //  console.log("Detected five");
        continue;
    }
    // console.log(element );
}

for (let i = 0; i < 10; i++) {
    console.log(`Outer loop value: ${i}`);

    for (let j = 0; j < 10; j++) {
        console.log(`Inner loop value: ${j}`);
    }
}

//print all the values of array
let myArray = ["flash", "batman", "superman"];
console.log(myArray.length);
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element);
}

for (let i = 1; i <= 10; i++) {

}