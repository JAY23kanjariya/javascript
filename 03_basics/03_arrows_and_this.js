const user = {
  username: "jay kanjariya",
  price: 999,
  welcomeMessage: function () {
    console.log(`${this.username}, welcome to website`);
    console.log(this);
  },
};

user.welcomeMessage();
user.username = "Abc";
user.welcomeMessage();

console.log(this);

// function chai() {
//   const username = "abc";
//   console.log(this);
// }
// chai();


//arrow function

// const chai = () =>{
//     const username = "abc";
//     console.log(this);
// }

// chai()

// const addTwo = (num1,num2) => {
//     return num1+num2
// }

// implicit return 
const addTwo = (num1,num2) => num1+num2;

console.log(addTwo(10,20));
 