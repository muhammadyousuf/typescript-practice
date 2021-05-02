"use strict";
let character = 'Muhammad Yousuf';
console.log(character);
const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
    console.log(input);
});
let username = "yousuf";
// username = 4
let age = 43;
let flag = false;
//flag = "no"
const circle = (daimeter) => {
    return daimeter * Math.PI;
};
console.log(circle(7.5));
let names = ["yousf", "rafae", "raza"];
// names.push(3)
// names[2] = 3
let num = [1, 2, 3, 4];
// num.push("yousuf")
// num[2] = "rafae"
let mixArray = ["yousuf", 2, 5, "raza"];
mixArray.push("rafae");
mixArray.push(3);
// mixArray.push(false)
let ninga = {
    user: "yousf",
    age: 24
};
//ninga.age = "44";
//ninga.skills = ["programmer"]
ninga = {
    user: "raza",
    age: 36,
    // skills:["developer"]
};
let subject;
let total;
let result;
subject = "math";
total = 33;
result = false;
let ningaValue = [];
//ningaValue = ["a", "b", "c"]
ningaValue.push("d");
let mixed = [];
mixed.push("Hello");
mixed.push(55);
mixed.push(true);
console.log("mixed", mixed);
let uid;
uid = "1234";
uid = 1234;
let ningaOne;
ningaOne = { name: "yousuf", age: 45 };
ningaOne = [];
let ningaTwo;
ningaTwo = { name: "yousuf", age: 33, color: "brown" };
let newAge = 24;
newAge = "Yousuf";
console.log("newAge String", newAge);
newAge = false;
console.log("newAge Bool", newAge);
let newMixed = [];
newMixed.push("Yousuf");
newMixed.push(44);
newMixed.push(true);
console.log("newMixed", newMixed);
let newNinga;
newNinga = { name: "Yousuf", age: 24 };
newNinga = { name: false, age: "Yousuf" };
console.log("newNinga", newNinga);
