/*  
  // Micro and Macro task queues & Call stack
  // Immediately Invoked Function Expression
  // IIFE
    // Final Project
  // localstorage
  // Modules
  // JQuery Intro

  // Q&A
  */

//AJAX Async JavaScript and XML

document.querySelector('.class1').innerHTML="";
$('.class1,#id,a').html("");

(function () {
  let req = "";
})();

console.log("Start Test");

(function () {
  console.log("IIFE");
})();
setTimeout(function () {
  console.log("Set Time Out");
}, 0);
for (let i = 0; i < 1000000000; i++) {
  let k = 1 + i;
}

console.log("After Set Time out");

function calculateValue() {
  let val = getTax(getValue());
  console.log(val);
}

function getValue() {
  console.log("getValue");
  return 1000;
}

function getTax(val) {
  console.log("getTax");
  return 0.1 * val;
}

calculateValue();

let arr = [1, 2, 3];

localStorage.setItem("arr", JSON.stringify(arr));

let arr2 = JSON.parse(localStorage.getItem("arr"));
arr2.push(4);
arr2.push(5);

localStorage.setItem("arr", JSON.stringify(arr2));

let arr3 = localStorage.getItem("arr");
console.log(arr3);
console.log(JSON.parse(arr3));

const prices = [0, 100, 200];
const colors = ["red", "blue", "green"];

// const filterColor = (x, colors) => {
//   return colors.includes(x.color);
// };
// products.filter((x) => {
//   return filterPrice(x, prices) && filterSize(x, s1) && filterColor(x, c1);
// });

import calc from "./modules/tax.js";

console.log(calc.calculateGrossSalary(1000));
console.log(calc.salaryCalculated);
