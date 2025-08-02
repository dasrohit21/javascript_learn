//const tinderuser = new Object()
const tinderuser = {}

tinderuser.id = "123abc"
tinderuser.name = "ross"
tinderuser.islogin = false


// console.log(tinderuser);

const regularuser = {
    email : "rohit@1234",
    fullname : {
        username : {
            firstname :"rohit",
            lastname : "kumar"
        }
    }
}

//console.log(regularuser.fullname?.username.firstname);


const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}

//const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1,...obj2}

//console.log(obj3);

const users = [
    {
        id:1,
        email:"jgfiuf@hfus"
    },   
    
]

console.log(tinderuser);
console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));

console.log(tinderuser.hasOwnProperty('islogin'));


