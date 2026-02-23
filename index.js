// Print output to the browser console
console.log("hello worasdasdld");

// document.write() works only in the browser (not recommended)
// It writes directly to the HTML document
// document.write("sadasdasd")

// ===============================
// Variables in JavaScript
// ===============================

// JavaScript has 3 ways to declare variables:
// 1. var
// 2. let
// 3. const

// -------------------------------
// var (old way)
// -------------------------------

// Declare variable using var
var fullName = "";

// Assign value later
fullName = "suman muahyakhwo";

// ❗ var allows redeclaration
var fullName = "asdasd";

// ❗ var also allows changing data type
fullName = 123123;

// Problems with var:
// - Function scoped
// - Can be redeclared
// - Can cause bugs in large applications

// -------------------------------
// let (modern & recommended)
// -------------------------------

// Declare variable using let
let email = "suman@gmail.com";

// ❌ Cannot redeclare with let
// let email = "test@gmail.com"; // ERROR

// ✅ But value can be updated
email = "newemail@gmail.com";

// let is block-scoped and safer than var

// -------------------------------
// const (constant value)
// -------------------------------

// Declare constant using const
const Roles = "admin";

// ❌ Cannot redeclare
// const Roles = "user"; // ERROR

// ❌ Cannot reassign
// Roles = "superadmin"; // ERROR

// Use const when value should NEVER change

// --------------------------------------------------------------------
/**
 * ===============================
 * Scope in JavaScript
 * ===============================
 *
 * Scope defines where a variable can be accessed.
 *
 * Types of Scope:
 * a. Global Scope
 *    - Variables declared outside any block or function
 *    - Accessible everywhere
 *
 * b. Block Scope
 *    - Variables declared inside { }
 *    - Applies only to let and const
 *
 * c. Function Scope
 *    - Variables declared inside a function
 *    - var is function-scoped, NOT block-scoped
 */

// -------------------------------------------------
// GLOBAL SCOPE with var
// -------------------------------------------------

var a = 10; // global variable
console.log(a); // 10

{
  // This is a block, BUT var ignores block scope
  var a = 20; // redeclares and overwrites the same global variable
  console.log(a); // 20
}

console.log(a); // 20 ❗
// Reason:
// - var is NOT block-scoped
// - The value 20 overwrites the global 'a'

// -------------------------------------------------
// BLOCK SCOPE with let
// -------------------------------------------------

console.log("-----------------------------------");

let b = 10; // global variable
console.log(b); // 10

{
  // This b exists ONLY inside this block
  let b = 20;
  console.log(b); // 20
}

console.log(b); // 10 ✅
// Reason:
// - let is block-scoped
// - inner 'b' does not affect outer 'b'

// -------------------------------------------------
// Reassigning let (without redeclaration)
// -------------------------------------------------

{
  // No 'let' keyword here → refers to outer 'b'
  b = 20; // reassigning the global variable
  console.log(b); // 20
}

console.log(b); // 20

// -------------------------------------------------
// const scope
// -------------------------------------------------

const name = "suman"; // block-scoped constant

// ❌ Cannot redeclare
// const name = "ram"; // ERROR

// ❌ Cannot reassign
// name = "hari"; // ERROR

// ---------------------------------------------------------------------------
console.log(
  "---------------------------------- DATA TYPES -----------------------------------------"
);

/**
 * ===============================
 * JavaScript Data Types
 * ===============================
 *
 * 1. String
 *    - Used to store text
 *    - Can be written using:
 *      '', "", ``
 *
 * 2. Number
 *    - Integer   → 10, 20
 *    - Float     → 10.5, 3.14
 *    - BigInt    → very large numbers
 *
 * 3. Boolean
 *    - true or false
 *
 * 4. Null
 *    - Represents an intentional empty value
 *
 * 5. Undefined
 *    - Variable declared but not assigned a value
 *
 * 6. Array
 *    - Collection of multiple values
 *    - Can store any data type
 *    - Values are separated by commas
 *    - Each value has an index
 *    - Index starts from 0
 *
 * 7. Object / JSON
 *    - Stores data in key-value pairs
 *
 * 8. Function
 *    - Block of reusable code
 */

// -------------------------------------------------
// Array Example (Literal Method)
// -------------------------------------------------

let e = [1, 2, 3, 4, 5, 6];

// Accessing array value using index
console.log(e[0]); // 1

// Printing entire array
console.log(e);

// Adding value at the end of array
e.push(7);

// -------------------------------------------------
// Array Example (Constructor Method)
// -------------------------------------------------

let arr = new Array(1, 2, 3, 4, 5);

console.log("----------------arr-----------");
console.log(arr);
// Output: [1, 2, 3, 4, 5]

// push() → adds value at the end
arr.push(7);
// [1, 2, 3, 4, 5, 7]

// unshift() → adds value at the beginning
arr.unshift(0);
// [0, 1, 2, 3, 4, 5, 7]

// splice(startIndex, deleteCount, insertValue)
// Insert 3.5 at index 4 without deleting anything
arr.splice(4, 0, 3.5);
// [0, 1, 2, 3, 3.5, 4, 5, 7]

// Remove 1 element from index 4 (removes 3.5)
arr.splice(4, 1);
// [0, 1, 2, 3, 4, 5, 7]

console.log(arr);

// Replace value at index 4 with 345
arr.splice(4, 1, 345);
// [0, 1, 2, 3, 345, 5, 7]

console.log(arr);

// -------------------------------------
console.log(
  "------------------------------------- OBJECT -------------------------------------"
);

let personObj = {
  name: "suman",
  email: "sumanmuhay@gmail.com",
  address: "BKT",
};

console.log(personObj.name); //suman
console.log(personObj.email); //sumanmuhay@gmail.com

let allUser = [
  {
    name: "suman",
    email: "sumanmuhay@gmail.com",
    address: "BKT",
  },
  {
    name: "aman",
    email: "anmn@gmail.com",
    address: "BKT",
  },
];
console.log(allUser)
console.log(allUser[0]) //{ name: 'suman', email: 'sumanmuhay@gmail.com', address: 'BKT' }

/**
 * Task 1 create an array of students
 * push atleast 5 random objects using push , unshift, and splice function in the array
 * print the values of each student from array
 */

// Task 1: Create an array of students
let std = [];

std.push({id:1, name:"suman",age:25})
std.push({id:2, name:"amadn",age:25})
std.push({id:3, name:"dasd",age:28})
std.push({id:4, name:"kjnl",age:27})
std.push({id:5, name:"tup",age:26})
console.log("-----------------------------")
std.splice(0, 1);   // remove 1 element from index 0
std.pop(); //last index

console.log(std)

console.log(`-------------------------------
Task 1: Create an array of students
- Push at least 5 random objects using push, unshift, and splice
- Print the values of each student from array
---------------------------------------------------------`);
// Task 1: Create an array of students
let std_new = [];

// Using push (add at end)
std_new.push({ id: 1, name: "Suman", age: 25 });
std_new.push({ id: 2, name: "Ram", age: 22 });

// Using unshift (add at beginning)
std_new.unshift({ id: 3, name: "Hari", age: 24 });

// Using splice (add at specific index)
std_new.splice(1, 0, { id: 4, name: "Gita", age: 23 });

// Another push
std_new.push({ id: 5, name: "Shyam", age: 26 });

console.log("----- All Students -----");

// Print each student
for (let i = 0; i < std_new.length; i++) {
  console.log("ID:", std_new[i].id);
  console.log("Name:", std_new[i].name);
  console.log("Age:", std_new[i].age);
  console.log("----------------");
}