const balance = new Number(10000);
console.log(balance);

console.log(balance.toString());
console.log(balance.toString().length);

// toFixed() method
console.log(balance.toFixed(2));


// toPrecision() method
const newNumber = 123.894;
console.log(newNumber.toPrecision(2));
console.log(newNumber.toPrecision(3));
console.log(newNumber.toPrecision(4));

// toLocalString() method
const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN'));

// MAX_VALUE
const max = Number.MAX_VALUE;
const min = Number.MIN_VALUE;

// ++++++++++++++++++++++++++++ MATHS ++++++++++++++++++++++++++++++++++++++++++++
console.log(Math);
console.log(Math.abs(-5));
console.log(Math.round(4.43));
console.log(Math.ceil(4.43));
console.log(Math.floor(4.43));
console.log(Math.PI);
console.log(Math.sqrt(16));
console.log(Math.min(10,20,30,31));
console.log(Math.max(10,20,30,31));

console.log(Math.random());
console.log((Math.random()*10)+1);

// here 10 = min value & 20 = max value
console.log(Math.floor(Math.random() * (20 - 10 + 1) )+ 10 );


