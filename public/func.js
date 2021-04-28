"use strict";
var add = function (a, b, c, d) {
    if (d === void 0) { d = 5; }
    console.log(a + b);
    console.log("Value of C ", c);
    console.log("Value of D ", d);
};
add(4, 4);
var minus = function (a, b) {
    return a - b;
};
var res = minus(4, 2);
console.log("res", res);
var logDetail = function (uid, item) {
    console.log(item + " has a uid of " + uid);
};
var greet = function (user) {
    console.log("Hello user");
};
// function signature
// example one
var sayHello;
sayHello = function (name, greeting) {
    console.log(name + " says " + greeting);
};
// example two
var calc;
calc = function (numOne, numTwo, action) {
    if (action === "add") {
        return numOne + numTwo;
    }
    else
        return numOne - numTwo;
};
//example three
var logD;
logD = function (ninga) {
    console.log(ninga.name + " is " + ninga.age + " year old");
};
