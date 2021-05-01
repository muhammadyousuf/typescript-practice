"use strict";
// const anchor = document.querySelector('a');
// console.log(anchor?.href)
//const form = document.querySelector('form');
var Invoice = /** @class */ (function () {
    function Invoice(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes \u00A3" + this.amount + " for " + this.details;
    };
    return Invoice;
}());
var invOne = new Invoice('yousuf', 'work on yousuf website', 450);
var invTwo = new Invoice('rafae', 'work on rafae website', 600);
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);
invOne.client = "raza";
invTwo.amount = 300;
console.log(invOne, invTwo);
var form = document.querySelector('.new-item-form');
console.log(form.children);
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
