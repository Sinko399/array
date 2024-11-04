'use strict';
let name = "John";
let age = 13;

console.log(`My name is ${name} and I am ${age} years old.`);
let identity = `My name is ${name}. <br> and I am ${age} years old.`;
document.getElementById("inter").innerHTML = identity;

let customerName = "John";
let amount = 1000;

console.log(`Dear ${customerName} your account balance is ${amount} naira.`);
let withdrawal = `Dear ${customerName} your account balance is ${amount} naira.`;
document.getElementById("withdraw").innerHTML = withdrawal;

const pricePerLiter = 1200;
const liters = 30;
console.log(`Your total purchase of petrol is ${pricePerLiter * liters}`);
document.getElementById("price").innerHTML = `Your total purchase of petrol is ${pricePerLiter * liters}`;


let k = 34;
let m = "Felix";
let multiple = k * m;
console.log(multiple);
console.log(typeof NaN);
