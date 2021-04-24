let character = 'Muhammad Yousuf';

console.log(character);



const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  console.log(input);
});

let username = "yousuf";

// username = 4

let age = 43
let flag = false

//flag = "no"

const circle = (daimeter: number) => {
  return daimeter * Math.PI
}

console.log(circle(7.5))


let names = ["yousf", "rafae", "raza"]
// names.push(3)
// names[2] = 3

let num = [1, 2, 3, 4]
// num.push("yousuf")
// num[2] = "rafae"

let mixArray = ["yousuf", 2, 5, "raza"];
mixArray.push("rafae");
mixArray.push(3);
// mixArray.push(false)

let ninga = {
  user: "yousf",
  age: 24
}

//ninga.age = "44";
//ninga.skills = ["programmer"]

ninga = {
  user: "raza",
  age: 36,
  // skills:["developer"]
}


let subject: string;
let total: number;
let result: boolean;

subject = "math";
total = 33;
result = false

let ningaValue: string[] = [];

//ningaValue = ["a", "b", "c"]

ningaValue.push("d")

let mixed: (string | number | boolean)[] = [];
mixed.push("Hello");
mixed.push(55);
mixed.push(true);

console.log("mixed", mixed);

let uid: string | number;
uid = "1234";
uid = 1234;

let ningaOne: object;
ningaOne = {name: "yousuf", age:45}
ningaOne = [];


let ningaTwo: {
  name:string,
  age:number,
  color: string
}

ningaTwo = {name:"yousuf", age: 33, color:"brown" }

