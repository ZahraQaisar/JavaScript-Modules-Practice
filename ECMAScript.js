// // Object Destructuring
// let person = { name: "Ali", age: 22, city: "Lahore" };

// // console.log(person.name, person.age);

// let { name, age } = person;
// console.log(name, age); 

// Object Literal (Property Shorthand)
let name = "Ali";
let age = 22;

// let person1 = { name: name, age: age };

let person2 = { name, age };
console.log(person2); 

// Spread Operator (...)
let arr1 = [1, 2, 3];
let arr2 = [4, 5];

let combined = [...arr1, ...arr2];
console.log(combined); 

let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3 };
let merged = { ...obj1, ...obj2 };
console.log(merged);

// Rest Operator (...)
function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4));

// Nullish Coalescing (??)
let username = null;
console.log(username ?? "Guest"); 
let age_ = 0;
console.log(age_ ?? 18); 

// Optional Chaining (?.)
let user = { profile: { name: "Ali" } };

console.log(user.profile?.name); 
console.log(user.address?.city); // undefined no error
