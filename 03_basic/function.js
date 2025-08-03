function saymyName() {
  console.log("r");
  console.log("o");
  console.log("h");
  console.log("i");
  console.log("t");
}


//saymyName()

// function addtwonumber(num1 , num2){
//     console.log(num1 + num2);
// }
function addtwonumber(num1 , num2){
    // let result = num1 + num2
    // return result
    return num1 + num2

}


const result = addtwonumber(3,4)

// console.log("result: ", result);

function loginuser(username = 'sam'){
  if(!username){
        console.log("PLease enter a username");
        return
    }
  return `${username} just logged in` 
}

// console.log(loginuser("meassage"));
 
console.log(loginuser("rohit"));
