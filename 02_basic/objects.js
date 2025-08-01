// singleton 
// Object.create


//object literals

mysym = Symbol("passkey")

const users = {
    name :"rohit",
    "full name": "rohit kumar das",
    [mysym] : "key1",
    age : 18,
    location :"jajpur",
    emails : "rohit@gmail.com",
    isloggedin : false,
    lastlog : ["monday" , "saturday"]
}

// console.log(users.emails);
// console.log(users.emails);
//console.log(users["emails"]);
// console.log(users["full name"]);
// console.log(users[mysym]);

users.emails = "random@gamil.com"
//Object.freeze(users)
users.emails = "random@gpt.com"
//console.log(users);


users.greeting = function(){
    console.log("hello js users");
}
users.greetingtwo = function(){
    console.log(`hello js users ${this.name}`);
}

console.log(users.greeting());
console.log(users.greetingtwo());
