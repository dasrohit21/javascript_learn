const marvel =["thor","ironman","daredevil"]
const dc = ["superman","batman","flash"]

//marvel.push(dc)

// console.log(marvel);
// console.log(marvel[3][2]);

// const allheros = marvel.concat(dc)
// console.log(allheros);

const allnew = [...marvel, ...dc]

// console.log(allnew);

const another_arr =  [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_arr = another_arr.flat(Infinity)

//console.log(real_another_arr);

// console.log(Array.isArray("rohit"))
// console.log(Array.from("rohit"))
// console.log(Array.from({name: "rohit"}))


let score1 = 100
let score2 = 400
let score3 = 500

console.log(Array.of(score1,score2,score3));

