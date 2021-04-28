"use strict";
var greet = function () {
    console.log("Hello user");
};
var add = function (a, b, c, d) {
    if (d === void 0) { d = 5; }
    console.log(a + b);
    console.log("Value of C ", c);
    console.log("Value of D ", d);
};
greet();
add(4, 4);
var minus = function (a, b) {
    return a - b;
};
var res = minus(4, 2);
console.log("res", res);
