// Dates

let myDates = new Date();
console.log(myDates);
console.log(myDates.toString());
console.log(myDates.toDateString());
console.log(myDates.toLocaleDateString());

// let createDate = new Date(2026,0,21);
// let createDate = new Date(2026, 0, 21, 17, 33, 5);
let createDate = new Date("01-23-2026");
console.log(createDate.getTime());
console.log(createDate.toString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);

let newDate = new Date();
console.log(newDate.getDay());
console.log(newDate.getDate());
console.log(newDate.getMonth());
console.log(newDate.getFullYear());
console.log(newDate.getHours());
console.log(newDate.getMinutes());
console.log(newDate.getSeconds());

newDate.toLocaleDateString('default',{weekday:"long"})
