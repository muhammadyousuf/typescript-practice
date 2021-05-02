// const anchor = document.querySelector('a');

// console.log(anchor?.href)

//const form = document.querySelector('form');

class Invoice {
//   readonly  client: string;
//   private  details: string;
//   public amount: number;

    // constructor(c: string, d: string, a: number) {
    //     this.client = c;
    //     this.details = d;
    //     this.amount = a;
    // }

    constructor (
        readonly client: string,
        private details: string,
        public amount: number,

    ){}

    format() {
        return `${this.client} owes £${this.amount} for ${this.details}`
    }

}

const invOne = new Invoice('yousuf', 'work on yousuf website', 450);
const invTwo = new Invoice('rafae', 'work on rafae website', 600);



let invoices: Invoice[] = []
invoices.push(invOne)
invoices.push(invTwo)

invoices.forEach(inv=>{
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
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber)
})