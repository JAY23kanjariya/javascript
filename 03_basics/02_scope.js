if (true) {
  let number1 = 10;
  const number2 = 10;
  var number3 = 10;
}
// console.log(number1);    => let out of scope
// console.log(number2);   => const out of scope
console.log(number3);

function one(){
    const name = "jay kanjariya";

    function two(){
        const website = "youtube";
        console.log(name);
    }
    // console.log(website);    => out of scope
    
    two()
}
one()

const addOne = function(nums){
    return nums+1;
}

console.log(addOne(6));
