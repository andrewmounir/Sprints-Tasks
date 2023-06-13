"use strict";
// Task review

// Function Types
//Declared function (Hoisting,can be replaced)
function funcName() {}

const funcName2 = function () {
  return false;
};

//Arrow function
const funcName3 = () => {
  return false;
};

const funcName4 = () => false;

// Functions in Objects
// var age = 12;
// var gender = "female";
// var name = "Sara";

const dd = function (a, b) {
  console.log(
    `Name: ${this.name}, age:${this.age}, gender:${this.gender}, t:${a + b}`
  );
};

const student1 = {
  name: "Michel",
  age: 28,
  address: { apt: 20, city: "Zamalek" },
  isAdmin: true,
  gender: "male",
  //displayData: dd,
};
const student2 = {
  name: "Ramy",
  age: 35,
  address: {
    apt: 1,
    city: "October city",
  },
  //displayData: dd,
};

//This => caller of the function
// arrow function does not have this

// This, Call, bind, apply

// Scope Chaining
let var1 = 1;
function scopeTest() {
  let var2 = 2;
  let var1 = 5;
  if (true) {
    let var3 = 3;
    console.log(var1);
    console.log(var2);
    console.log(var3);
  }
}

// HOF,callback and return Function

// Numbers
//0.1 Problem
//Number Functions
//Number Constants (MAX_SAFE_INTEGER) 2^53
//BigInt 1n

// Dates

// 01/02/2023
// yyyy-mm-dd
//Unix time
//YYYY-MM-DDTHH:mm:ss.sssZ
let date1 = new Date();
let date2 = new Date("2023-05-21");
let date3 = new Date(105214523);
let date4 = Date.UTC(2023, 5, 21);

//const date = new Date(Date.UTC(2020, 11, 20, 3, 23, 16, 738));
//console.log(new Intl.DateTimeFormat('en-US').format(date));

const timeOut1 = setTimeout(() => {
  alert("Hello");
}, 1500);

clearTimeout(timeOut1);

const interval1 = setInterval(() => {
  console.log(new Date());
}, 1000);

//clearInterval(interval1);

//SetTimeOut
//SetInterval

//Find the highest priority task
