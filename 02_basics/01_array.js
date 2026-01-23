// arrays
// array create a shallow copy(reference to same)
const myArr = [1, 2, 3, 4, 5];
const myHeros = new Array("shaktiman","doga")

console.log(myArr[0]);

// Array methods
myArr.push(6);
console.log("push():",myArr);

myArr.pop();
console.log("pop():",myArr);

myArr.unshift(0);
console.log("unshift():",myArr);

myArr.shift();
console.log("shift():",myArr);

console.log(".include()",myArr.includes(9));
console.log(".index()",myArr.indexOf(9));

// convert array into join
const strArr = myArr.join();

//slice
console.log(".slice() ",myArr.slice(1,4));

//splice : remove the elements from original arr
console.log(".splice() ",myArr.splice(1,4));
console.log(myArr);


