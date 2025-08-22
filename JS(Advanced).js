// ------------- HOISTING -------------

console.log(aVar);
var aVar = 5;
// the variable is hoisted used before declartion, it will have value 'undefined'

var bVar;
bVar = 5;
console.log(bVar);

// console.log(bLet);
let bLet = 10;
// error

sayHi();
function sayHi(){
    console.log("hi")
}

// ------------- SCOPED CHAIN -------------

function outer() {
    let x = 10;
    function inner() {
        console.log("Outer func var: ", x);
    }
    inner();
}
outer();

// ------------- IIFE -------------

(function () {
    console.log("IIFE runs immediately")
})

();

(function(){
    let secret = "hidden";
    console.log("Inside:", secret);
})();

// running the code immediately after creation

// ------------- USE STRICT -------------
"use strict";
x_val = 10; // error because x is not declated
console.log(x_val);
let x1 = 20;
console.log(x1);

// ------------- CLOSURES -------------
// inner func accesing vars of outer func
function makeCounter() {
    let count = 0;
    return function(){
        count++;
        return count;
    }
}

let counter = makeCounter()
console.log(counter())
console.log(counter())

// ------------- This - KEYWORD -------------
console.log(this)

let obj4 = {
    name: "XYZ",
    sayName: function(){
        console.log(this.name);
    }
};

obj4.sayName();

let arrow = () => {
    console.log(this)
}

arrow()

// ------------- BIND -------------

function greeting(){
    console.log("HI", this.name);
}

let person = {
    name: "XYZ"
}
let bound = greeting.bind(person)
bound()

// ------------- ITRARTORS & GENERATORS -------------
// genartor func can pause / resume execution
// yeild means return and pause the result uptill now
// next() resumes the generator
function* gen() {
    yield 1;
    yield 2;
    yield 3;
}

let g = gen();
console.log(g.next().value)
console.log(g.next().value)
console.log(g.next().value)

// ------------- CLASSES & INHERITENCE -------------

class Person {
    constructor(name){
        this.name = name;
    }
    greet() {
        console.log("Hi", this.name)
    }
}
class Student extends Person {
    constructor(name, roll){
    super(name); //calling parent class constructor
    this.roll = roll;
  }
}
let s1 = new Student("Sara", 101);
s1.greet();

// ------------- CALL BACK HELL -------------
// mutiple callbacks
// setTimeout(()=> {
//     console.log("Step 1");

//     setTimeout( () => {
//         console.log("Step 2");

//         setTimeout( () => {
//         console.log("Step 3");
//         },1000);

//     },1000);

// },1000);

// ------------- PROMISE-------------


let p = new Promise( (res, rej) => {
    let success = true;
    if(success) {
        res("done")
    }
    else{
        rej("error")
    }
})

p.then(
    val => console.log(val)
).catch(
    err => console.log(err)
)

// ------------- ASYNC / AWAIT -------------

async function test() {
    let promise = new Promise(
        res => setTimeout( () => res("Finished"), 1000
    ));

    let result_ = await promise;
    console.log(result_)
}
test()


// ------------- EVENT LOOP -------------

console.log("Start");

setTimeout(()=>console.log("setTimeout"), 0);

Promise.resolve().then(()=>console.log("Promise resolved"));

console.log("End");
// Output order: Start → End → Promise resolved → setTimeout
