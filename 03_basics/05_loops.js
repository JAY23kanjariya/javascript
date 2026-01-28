const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const evenNumber = myNumber.filter((nums) => nums % 2 == 0);
// console.log(evenNumber);

// const newNums = [];

// myNumber.forEach((nums) => {
//     if(nums % 2 == 0){
//         newNums.push(nums);
//     }
// })

// console.log(newNums);

// console.log (myNumber.map((item) => item + 10));

// chaining
// console.log(
//   myNumber
//     .map((nums) => nums * 10)
//     .map((nums) => nums + 1)
//     .filter((nums) => nums >= 41),
// );

// reduce

const reduceLoop = myNumber.reduce((acc, currval) => {
  console.log(`acc : ${acc} & currval : ${currval}`);
  return acc + currval;
}, 0);
console.log(reduceLoop);
