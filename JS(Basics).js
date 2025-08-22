// ------------- VARIABLES -------------

// var

var a = 10;
var a = 20; // redeclarion is allowed but the value overwrites

console.log("Var: ", a)

// let

let b = 30;
// let b = 40; // redeclarion not allowed

console.log("Let: ", b)

// const

const c = 40;
// const c = 50; // redeclarion not allowed

console.log("Const: ", c)


// ------------- DATA TYPES -------------

// string
let str_var = "myString";
// number
let num_var = 1;
// boolean
let myBoolean_var = true;
// null
let mynull_var = null; // variable declared with a null values
// undefined
let myUndefined_var; // variable is declared with no initial value this is why it will show 'undefined'
// symbol
let mySymbol_var = Symbol("id"); // it is used for unique values(for not being accidentally overwritten)
// bigint
let myBigint_var = 12345678901234567890n; // n used at the end to represent bigint 
// array
let myArray = [1,2,3,4];
// object
let myObj = {name:"XYZ"}; // basically dictionaary but named as object in JS

// ------------- CONDITIONALS STATEMENTS -------------

//  if else
let age = 10;

if (age > 18){
    console.log("Adult");
}

else if (age < 18 && age > 0) {
    console.log("Not Adult");
}

else {
    console.log("Invalid")
}

// switch

let day = "Monday";
switch(day){
    case "Monday" : 
        console.log("It's Monday!");
        break;

    case "Sunday":
        console.log("It's Sunday!");
        break;
    default: // when no case matched // like 'else'
        console.log("other days");
}

// ternary

let result = age >= 18 ? "Adult" : "Minor";
console.log(result)

// ------------- LOOPS -------------

// while
let i = 0;
while(i<3){
    console.log("while: ", i);
    i++;
}
// for
for (let j = 0; j < 3; j++){
    console.log("for", j);
}
// for of
let arr = [10,20,20,40];
for(let val of arr){
    console.log("for of:", val)
}
// for in
let obj = {
    a:1,
    b:2
}
for(let key in obj){
    console.log("key:", key, "val:", obj[key])
}

// ------------- COMPARISON OPERATORS -------------
// == -> Comparing (2=="2") automatically converted str to int and checked, ans: true
// === -> this is for strict matching (2=="2") will be false, only (2==2) is true
// != -> (5!= "5") -> ans=false(loose equality)
// != -> (5!== "5") -> ans=true(strict)

// ------------- FUNCTIONS -------------

function add(x = 0, y = 0){
    return x+y;
}

console.log(add(5, 3))
console.log(add()) // default vals will be used

//  callback
// passing a function in argument to the other funtion and then calling it
function greet(name, cb){
    cb(name);
}
greet("ali", 
    function(n){
        console.log("hello", n)}
)
// function is passed as parameter in greet funtion and then n is used for the value of name this is passed before

// ------------- ARRAYS & OBJECTS -------------

let arr3 = [1,2,3];
arr3.push(4);
// 4 will be added in arr3

let obj3 = {
    name:"XYZ",
    age:18
}
console.log(obj3.name)

// ------------- TRUTHY / FALSY -------------

let values = [false, 0, "", null, undefined, NaN, "hello", 123]
values.forEach(v => console.log(v, ":", Boolean(v)))
// declared an arr and used for each loop v is the cuurent val, => is sytanx of arrow function
// false = falsy
// 0 = falsy
// empty string = falsy
// falsy
// falsy
// falsy
// non-empty string = truthy
// non-zero number = truthy

// ------------- ERROR HANDLING -------------

try {
    throw new Error("something broke");
}catch(e){
    console.log("Caught", e.message);
}finally{
    console.log("always runs");
}
