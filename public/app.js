// const anchor = document.querySelector('a');
// console.log(anchor?.href)
//const form = document.querySelector('form');
import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { ListTemplate } from './classes/ListTemplate.js';
const me = {
    name: 'Yousuf',
    age: 24,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log("I spent", amount);
        return amount;
    }
};
const greetPerson = (person) => {
    console.log("Hello", person.name);
};
greetPerson(me);
console.log("Me", me);
const invOne = new Invoice('yousuf', 'work on yousuf website', 450);
const invTwo = new Invoice('rafae', 'work on rafae website', 600);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
//invOne.client = "raza";
invTwo.amount = 300;
// console.log(invOne, invTwo)
const form = document.querySelector('.new-item-form');
console.log(form.children);
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ username: "yousuf", age: 24 });
console.log(docOne.username);
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["DIRECTOR"] = 1] = "DIRECTOR";
    ResourceType[ResourceType["FLIM"] = 2] = "FLIM";
    ResourceType[ResourceType["PERSON"] = 3] = "PERSON";
    ResourceType[ResourceType["AUTHOR"] = 4] = "AUTHOR";
    ResourceType[ResourceType["CART"] = 5] = "CART";
})(ResourceType || (ResourceType = {}));
const docThree = {
    uid: 1,
    resourceName: ResourceType.PERSON,
    data: { name: 'yousuf' }
};
const docFour = {
    uid: 2,
    resourceName: ResourceType.CART,
    data: ['bread', 'mlik', 'toilet roll']
};
console.log(docThree, docFour);
// list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'start');
});
// tuples
let arr = ['yousuf', 24, true];
arr[0] = 24;
arr[1] = true;
arr = [true, 'yousuf', 24];
let tup = ['yosuf', 24, false];
tup[0] = 'rafae';
tup[1] = 25;
let student;
student = ['rafae', 222];
