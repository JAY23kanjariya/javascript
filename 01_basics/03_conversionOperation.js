// 03. Conversion Operations 

let score = "67";
// let score = true;
// let score = null;
// let score = undefined;
// let score = "67a";

console.log(typeof score);

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

/* conversion : Number()/Boolean()/String()/BigInt()
"33" => 33
"33a" => NaN
true =>1/false=>0
undefined => NaN
*/

// ************************ Operations ************************************

let value = 89;
let negValue = - value;
console.log(negValue);

// console.log(10*2);
// console.log(10+2);
// console.log(10-2);
// console.log(10/2);
// console.log(10%2);
// console.log(10**2);

let str1 = "hello";
let str2 = " world!!";

let str3 = str1+str2;
console.log(str3);

console.log(1+ "2");
console.log("1"+ 2);
console.log("1"+ 2 + 2);
console.log(1+ 2 + "2");
console.log(1+ "2" + 2);

console.log(true);
console.log(+true);
console.log(+"");
