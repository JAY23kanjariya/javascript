function sayHello() {
  console.log("hello ");
}
// sayHello();

function addTwoNumber(number1, number2) {
  return number1 + number2;
}

// console.log(addTwoNumber(10,20));

function loginUserMessage(username = "guest") {
  if (username === undefined) {
    console.log("please enter a username.");
    return;
  }
  console.log(`${username} just logged in.`);
}

// loginUserMessage("jay");
// loginUserMessage();

function calculateCartPrice(...values){
    return values;
}

// calculateCartPrice(10,20,30)

const user = {
    name : "jay",
    price : 200
}

function handleObject(anyObject){
    console.log(`username : ${anyObject.name} and total price : ${anyObject.price}`);
}

// handleObject(user);

const newarray = [200,30,40,43];

function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue(newarray));
