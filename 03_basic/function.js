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
 
//console.log(loginuser("rohit"));

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "rohit",
    prices: 499
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

//  handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));