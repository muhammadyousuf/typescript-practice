// const anchor = document.querySelector('a');

// console.log(anchor?.href)

//const form = document.querySelector('form');
import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js';
import { ListTemplate } from './classes/ListTemplate.js';

// let docOne: HasFormatter;
// let docTwo: HasFormatter;

// docOne =  new Invoice('Muhammad Yousuf', "make a websit", 200);
// docTwo = new Payment('Muhammad Rafae', "Plumber work", 500);

// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);

// console.log("Docs", docs)


interface IsPerson {
    name: string,
    age: number,
    speak(a: string): void,
    spend(a: number): number
}


const me: IsPerson = {
    name: 'Yousuf',
    age: 24,
    speak(text: string): void {
        console.log(text)
    },
    spend(amount: number): number {
        console.log("I spent", amount);
        return amount;
    }
}
const greetPerson = (person: IsPerson) => {
    console.log("Hello", person.name)
}

greetPerson(me)
console.log("Me", me)




const invOne = new Invoice('yousuf', 'work on yousuf website', 450);
const invTwo = new Invoice('rafae', 'work on rafae website', 600);



let invoices: Invoice[] = []
invoices.push(invOne)
invoices.push(invTwo)

invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format())
})


//invOne.client = "raza";
invTwo.amount = 300;

// console.log(invOne, invTwo)

const form = document.querySelector('.new-item-form') as HTMLFormElement;
console.log(form.children)

const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;



const addUID = <T extends { username: string, age: number }>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    return { ...obj, uid }
}

let docOne = addUID({ username: "yousuf", age: 24 });

console.log(docOne.username)

enum ResourceType { BOOK, DIRECTOR, FLIM, PERSON, AUTHOR, CART }

interface Resource<T> {
    uid: number;
    resourceName: ResourceType;
    data: T
}


const docThree: Resource<object> = {
    uid: 1,
    resourceName: ResourceType.PERSON,
    data: { name: 'yousuf' }
}

const docFour: Resource<string[]> = {
    uid: 2,
    resourceName: ResourceType.CART,
    data: ['bread', 'mlik', 'toilet roll']
}

console.log(docThree, docFour)
// list template instance

const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    let values: [string, string, number];
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc: HasFormatter;
    if (type.value === 'invoice') {
        doc = new Invoice(...values)
    } else {
        doc = new Payment(...values)
    }
    list.render(doc, type.value, 'start');
})

// tuples

let arr = ['yousuf', 24, true];
arr[0] = 24;
arr[1] = true;
arr = [true, 'yousuf', 24];

let tup: [string, number, boolean] = ['yosuf', 24, false];
tup[0] = 'rafae';
tup[1] = 25;

let student: [string, number];
student = ['rafae', 222];