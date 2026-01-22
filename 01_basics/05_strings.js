const name = "jay kanjariya"
const repoCount = 4;

// console.log(name+repoCount + "value");
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

//another way to declare the string as object
let gameName = new String("mini-game");

console.log(gameName.length);
console.log(gameName.toLocaleLowerCase);
console.log(gameName.toUpperCase);
console.log(gameName.charAt(2));
console.log(gameName.indexOf('-'));
console.log(gameName.endsWith('me'));
console.log(gameName.startsWith('me'));

// const newStr = gameName.slice(-2,6); // use negative indexing
// console.log(newStr);

const newStr = gameName.substring(2,6);
console.log(newStr);

const newStr2 = "   jay      ";
console.log(newStr2);
console.log(newStr2.trim());

const url = "https://hitesh.com/jay%20kanjariya";
console.log(url.replace("%20","-"));

console.log(url.includes("https"));
console.log(url.bold());




