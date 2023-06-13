/*
Type conversion and Coercing

*/

console.log(parseInt("12cm") + parseInt("13cm"));
console.log(Number("12") + Number("13"));
console.log(String(12));
console.log(Boolean(12));

/*
    parse and type functions (difference number & parseInt)
    Coercing +, other operations
    ==,!=, comparison operators

    ===,!==

False Values
    0,'',undefined,null,NaN,false

Operators (Review)
Operator Precedence

|| , &&  for all false values
*/
const displayName = (firstName, lastName) => {
  let name = firstName ?? "Guest";
  let name1 = firstName || "Guest";

  return firstName || lastName || "Guest";

  //   if (name) {
  //     return name;
  //   } else {
  //     return "Guest";
  //   }
};

function calculateValueAfterTax(val, tax) {
  //debugger;
  //tax = tax || 0.14;
  tax = tax ?? 0.14;
  return val + val * tax;
}
//?? (Nullish coalescing operator) null , undefined

//Objects
// let name = "Michel";
let age = 28;
// let street = "Mahmoud Azmy";
// let apt = 20;
// let city = "Zamalek";

// let name1 = "";
// let age1 = 35;
// let street1 = "18";
// let apt1 = 1;
// let city1 = "October city";

let student = {
  name: "Michel",
  age: 28,
  address: { apt: 20, city: "Zamalek" },
  isAdmin: true,
};

let student1 = {
  name: "Ramy",
  age: 35,
  address: {
    apt: 1,
    city: "October city",
  },
};

let student2 = new Object();
student2.name = "Ahmed";

//student = null;
if (student && student.isAdmin) {
  console.log("Is ADMIN");
} else {
  console.log("Not ADMIN");
}

let name = student && student.name;
name = student?.name;

//Reference Type vs Value Type
//&&
//? Optional Chaining
//Arrays
let studentArray = [
  [1, 2, 3],
  "Michel",
  28,
  { city: "Zamalek", apt: 20, stree: "Mahmoud Azmy" },
];

//ToDo Application (Task)
//Function Types
//    HOF, return Function