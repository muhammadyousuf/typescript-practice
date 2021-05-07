// const anchor = document.querySelector('a');

// console.log(anchor?.href)

//const form = document.querySelector('form');
import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js';

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

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    let doc: HasFormatter;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
    } else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber)
    }
    console.log(doc)
})