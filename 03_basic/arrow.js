const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username ='rohit'
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username ="devraj"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username ="devraj"
//     console.log(this.username);
// }

// chai()

// const chai = () => {
//     let username ="devraj"
//     console.log(this);
// }

// chai()

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) =>  (num1 + num2)

const addTwo = (num1, num2) =>  ({username:"rohit"})


console.log(addTwo(3, 4))

const myArray = [2, 5, 3, 7, 8]

myArray.forEach()