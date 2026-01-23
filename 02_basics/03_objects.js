// singleton object: create from construtor
// non-singleton object : create from literals

// Object.create()     // using constructor

// using literal
const jsUser = {
  name: "jay",
  age: 21,
  location: "gujarat",
  email: "abc.gmail.com",
  isLoggedIn: false,
  lastLoginDays : ["Mon","Wed","Fri"],
  //[mySymbol] : "hello"  // symbol define in [] and access using obj[] & datatype change...
};

// object access
console.log(jsUser.email);  //access way-1 {not access if key in "double quotes"}
console.log(jsUser["email"]);   // access way-2 

// update object elements
jsUser.age = 22;

// restricted js object to change using freeze()
// Object.freeze(jsUser);

// add new element in object
jsUser.greeting = function(){
    console.log("hello from js"); 
}
jsUser.greetingTwo = function(){
    console.log(`hello from js ${this.name}`); 
}
console.log(jsUser.greeting);
console.log(jsUser.greetingTwo());
