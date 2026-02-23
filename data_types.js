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
let a = "suman"; // string
let b = "suman"; // string
let g; // undefined
let i = null; // null
let j = ""; // empty string

/*------------------------ Arrays ------------------------*/
// Array is a collection of elements
let k = [];
k.push(1); // add to end
k.push(2, 3, 4); // multiple elements
k.unshift(55); // add at the start
k.splice(2, 2, 505); // remove 2 elements at index 2, insert 505
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
console.log(first); // "product name"

let last = products_1.pop(); // removes last element
console.log(last); // "store address"

// Remove elements using splice
let index = products_1.splice(1, 2); // remove 2 elements starting at index 1
console.log(index); // returns removed elements
console.log(products_1); // remaining array

console.log(
    "---------------------- single dimensional array -----------------------",
);
let arr = ["element1", "element2", "element3", "element4"];
console.log(arr);
console.log(arr[1]); //return element2
console.log(
    "---------------------- multi dimensional array -----------------------",
);
let arr1 = [
    ["user one", "one@gmail.com", "address 1"],
    ["user two", "two@gmail.com", "address 2"],
];
console.log(arr1);
console.log(arr1[0]); // return  ["user one", "one@gmail.com", "address 1"],
console.log(arr1[0][0]); // return user one

console.log(
    "--------------------------java script object notation(JSON)------------------------------------",
);

let user = {
    name: "suman",
    email: "one@gmail.com",
    address: "address 1",
};
console.log(user);
console.log(user.name); //suman
console.log(user["name"]); // "suman"

let alluser = [
    {
        name: "suman",
        email: "one@gmail.com",
        address: "address 1",
    },
    {
        name: "ram",
        email: "two@gmail.com",
        address: "address 1",
    },
];

console.log(alluser[1].name);

console.log(
    "------------------------Function +--------------------------------------",
);
console.log(`
    In JavaScript, functions are “first-class objects”, which means:
    They can be assigned to variables.
    They can be passed as arguments to other functions.
    They can be returned from other functions.
    They can have properties and methods just like objects.
    Because of this flexibility, functions are actually special objects in JS.`);



const getname = function(){
    
}