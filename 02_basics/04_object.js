// singleton object: create from construtor
const user = new Object();
user.id = "abc";
user.name = "sam";
user.isLoggedIn = false;

console.log(user);
console.log(user.id);  

const user2 = {
    lastname : "kanjariya"
}

// const user3 = {user,user2}   // create user3 obj 2elements 1. user, 2. user2

// const user3 = Object.assign({},user,user2);  //way-1 to merge objs
const user3 = {...user,...user2}    // way-2 to merge objs
console.log(user3);

// objs come form databse
const userdb = [{
    fname : "jay",
    lname : "kanjaraiya"
}]
console.log(userdb[0].fname);

// keys
console.log(Object.keys(user));     // all keys array
console.log(Object.values(user));     // all values array
console.log(Object.entries(user));     // all key:values array's of array elements

console.log(user.hasOwnProperty('isLoggedIn')); // check this property is there or not

