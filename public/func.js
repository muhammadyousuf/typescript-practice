"use strict";
const add = (a, b, c, d = 5) => {
    console.log(a + b);
    console.log("Value of C ", c);
    console.log("Value of D ", d);
};
add(4, 4);
const minus = (a, b) => {
    return a - b;
};
let res = minus(4, 2);
console.log("res", res);
const logDetail = (uid, item) => {
    console.log(`${item} has a uid of ${uid}`);
};
let greet = (user) => {
    console.log("Hello user");
};
// function signature
// example one
let sayHello;
sayHello = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
// example two
let calc;
calc = (numOne, numTwo, action) => {
    if (action === "add") {
        return numOne + numTwo;
    }
    else
        return numOne - numTwo;
};
//example three
let logD;
logD = (ninga) => {
    console.log(`${ninga.name} is ${ninga.age} year old`);
};
