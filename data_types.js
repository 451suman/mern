/**
 * JavaScript Data Types Overview:
 * a. String
 *    - "", '', ``
 *    - Example: let name = "Suman";
 * 
 * b. Number
 *    - Integers, decimals, exponential
 *    - Example: 1, 1.2, 1e3
 * 
 * c. Boolean
 *    - true, false
 * 
 * d. Undefined
 *    - A variable declared but not assigned
 *    - Example: let g;
 * 
 * e. Null
 *    - Represents an intentional "empty" value
 *    - Example: let i = null;
 * 
 * f. Array
 *    - A collection of elements enclosed in []
 *    - Can store any type of data
 *    - Example: let arr = [1, "two", true];
 * 
 * g. Object / JSON
 *    - Key-value pair collection
 *    - Example: let obj = { name: "Suman", age: 23 };
 * 
 * h. Function
 *    - Reusable block of code
 *    - Example: function greet() { console.log("Hello"); }
 */

/*------------------------ Variables ------------------------*/
let a = "suman";        // string
let b = "suman";        // string
let g;                  // undefined
let i = null;           // null
let j = "";             // empty string

/*------------------------ Arrays ------------------------*/
// Array is a collection of elements
let k = [];
k.push(1);              // add to end
k.push(2, 3, 4);        // multiple elements
k.unshift(55);          // add at the start
k.splice(2, 2, 505);    // remove 2 elements at index 2, insert 505
// console.log(k) // [55, 1, 505, 4]

/*------------------------ String split example ------------------------*/
// let aa = "aasdasd-asdasdasd";
// let parts = aa.split("-"); // splits string into array at "-"
// console.log(parts); // ["aasdasd", "asdasdasd"]

/*------------------------ Product Array ------------------------*/
let products_1 = ["product name", "product category", 1000, 1];

// Add elements to the end
products_1.push("product description");
products_1.push("product brand", "store name", "store address");
// console.log(products_1);
// ["product name", "product category", 1000, 1, "product description", "product brand", "store name", "store address"]

// Replace elements at specific index
products_1.splice(1, 2, 5); 
// Removes 2 elements starting at index 1 and inserts 5
console.log(products_1); 
// ["product name", 5, 1, "product description", "product brand", "store name", "store address"]

/*------------------------ Remove elements ------------------------*/
let first = products_1.shift(); // removes first element
console.log(first);              // "product name"

let last = products_1.pop();    // removes last element
console.log(last);              // "store address"

// Remove elements using splice
let index = products_1.splice(1, 2); // remove 2 elements starting at index 1
console.log(index);                  // returns removed elements
console.log(products_1);             // remaining array

console.log("---------------------- Objects -----------------------");