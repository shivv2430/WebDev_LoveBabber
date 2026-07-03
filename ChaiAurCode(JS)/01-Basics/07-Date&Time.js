//Dates

// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString()); 
// console.log(myDate.toUTCString());

// console.log(typeof myDate);     // object


let CreatedDate = new Date(2023, 0, 10)
console.log(CreatedDate.toDateString());

let newDate2 = new Date("2023-01-10")
console.log(newDate2.toDateString());

let newDate3 = new Date("01-10-2023")
console.log(newDate3.toDateString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myTimeStamp.toString());
console.log(myTimeStamp.getTime());
console.log(myTimeStamp.getDate());
console.log(myTimeStamp.toJSON());
console.log(myTimeStamp.getDay());
console.log(myTimeStamp.getHours());
console.log(myTimeStamp.getMinutes());
console.log(myTimeStamp.getSeconds());
console.log(myTimeStamp.getMilliseconds());
console.log(myTimeStamp.getTimezoneOffset());
console.log(myTimeStamp.toString());


newDate2.toLocaleString('default', {
    weekday: "long",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZoneName: "short",
})