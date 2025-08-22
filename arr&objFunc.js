let arr = [10, 20, 30, 40, 50];
let users = [
  {id: 1, name: "Ali"},
  {id: 2, name: "Sara"},
  {id: 3, name: "Ahmed"}
];

//find()
// First element jo condition satisfy karega
let found = arr.find(num => num > 25);
console.log("find:", found); // 30

//findIndex()
// Index return karega jis element ne condition satisfy ki
let foundIndex = arr.findIndex(num => num > 25);
console.log("findIndex:", foundIndex); // 2

//indexOf()
// Value ka index return karega (nahi mila toh -1)
console.log("indexOf 30:", arr.indexOf(30)); // 2

//filter()
// Saare elements jo condition satisfy karte hain, new array return karega
let filtered = arr.filter(num => num > 25);
console.log("filter:", filtered); // [30,40,50]

// includes()
// Check karta hai value exist karti hai ya nahi
console.log("includes 20:", arr.includes(20)); // true

// push()
// Last mein element add karta hai
arr.push(60);
console.log("push:", arr); // [10,20,30,40,50,60]

// pop()
// Last element remove karta hai
arr.pop();
console.log("pop:", arr); // [10,20,30,40,50]

// map()
// Har element par function apply karta hai, aur new array banata hai
let mapped = arr.map(num => num * 2);
console.log("map:", mapped); // [20,40,60,80,100]

// reduce()
// Sab elements ko reduce karta hai ek single value mein
let sum = arr.reduce((acc, num) => acc + num, 0);
console.log("reduce sum:", sum); // 150

// slice()
// Array ka part return karta hai (original change nahi hota)
let sliced = arr.slice(1, 3);
console.log("slice:", sliced); // [20,30]

// splice()
// Elements add/remove karta hai (original array change hota hai)
arr.splice(2, 1, 99); // index 2 pe 1 element remove, aur 99 add
console.log("splice:", arr); // [10,20,99,40,50]

// shift()
// Pehla element remove karta hai
arr.shift();
console.log("shift:", arr); // [20,99,40,50]

// unshift()
// Pehle element par add karta hai
arr.unshift(5);
console.log("unshift:", arr); // [5,20,99,40,50]

// valueOf()
// Array ka primitive value deta hai (bas array hi return hota hai)
console.log("valueOf:", arr.valueOf()); // [5,20,99,40,50]

// forEach()
// Har element pe function run karta hai
arr.forEach(num => console.log("forEach:", num));

// some()
// Agar koi ek element condition satisfy kare, true return hoga
let someCheck = arr.some(num => num > 90);
console.log("some:", someCheck); // true

// Object.keys()
// Object ki keys ka array return karega
console.log("Object.keys:", Object.keys(users[0])); // ["id","name"]

// Object.values()
// Object ki values ka array return karega
console.log("Object.values:", Object.values(users[0])); // [1, "Ali"]

// Object.entries()
// Key-value pairs ka array return karega
console.log("Object.entries:", Object.entries(users[0])); 
// [["id",1],["name","Ali"]]
