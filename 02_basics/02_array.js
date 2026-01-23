const marvel_heros = ["thor","ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

// marvel_heros.push(dc_heros);    // push another array as single element
// console.log(marvel_heros);
// console.log(marvel_heros[3]);

// const all_heros = marvel_heros.concat(dc_heros); // not change in original in array
// console.log(all_heros);

const all_heros = [...marvel_heros,...dc_heros];
console.log(all_heros);

// flat(dimi) : to flat array (1-d)
const arr2 = [1,2,3,[4,5,6],7,8,[1,2,[3,4]],9];
console.log(arr2.flat(Infinity));

console.log(Array.isArray("hello"));   // check given is array or not
console.log(Array.from("hello"));       // convert into array from any other datatypes

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));    // convert individual variables into single array
