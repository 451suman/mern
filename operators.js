/**
 * a. math operatios
 *  +,-,/,*,%,++,--
 * b. assignment operator 
 *      =.+=,-=*=,/=,%=
 * c. comperision
 *  <,>, <=,=> ==, ===,!=, !==
 * d. logical operators
 * &&, ||,!
 * e. concatenation operators 
 * +,+=, ,
 * f. conditional operators
 *  ?:
 * g. Spread or rest
 * h. object destructure
 * i. template literals 
 *  `${}`
 */
console.log("------ Math Operators ------");

let a = 1;
let b = 2;

console.log(a + b); // 3 -> addition

let d = a / b;
console.log(d); // 0.5 -> division

let e = a % b;
console.log(e); // 1 -> remainder of 1/2



console.log("------ Increment Operators ------");

let t = 1;

console.log("t:", t); // t: 1

// post increment -> prints current value then increases
console.log("t:", t++); 
// output: t: 1
// after this line t becomes 2

// pre increment -> increases first then prints
console.log("t:", ++t); 
// t becomes 3
// output: t: 3

console.log("++t:", ++t);
// t becomes 4
// output: ++t: 4



console.log("------ Assignment Operators ------");

let q = 1;

q += 1; // same as q = q + 1 -> q becomes 2
q -= 1; // same as q = q - 1 -> q becomes 1



console.log("------ Template Strings ------");

// template literals use backticks ``
// variables can be inserted using ${}

let name = `suman muhay ${q}`;
console.log(name); 
// output: suman muhay 1



console.log("------ Default Value with OR ------");

let user = { age: 12 };

// if user.age exists use it
// if it is undefined/null then use 0
let userAge = user.age || 0;

console.log(userAge); // 12



console.log("------ Object Destructuring ------");

let product = {
    productName: "Hp pavilion",
    productPrice: 1000,
    category: "Laptop",
    stock: 1,
    discoint: 3
};

// extracting properties from object
let { productName: Pname, productPrice: price, discoint, ...remaining } = product;

console.log(Pname, price, discoint);
// Hp pavilion 1000 3

console.log(remaining);
// { category: "Laptop", stock: 1 }



console.log("------ Array Destructuring ------");

let arr1 = ["suman", "mushyakhwo", "suman@gmail.com", "987651231"];

// extracting first two values
// rest go into others
let [first, last, ...others] = arr1;

console.log(first, last);
// suman mushyakhwo

console.log(others);
// ["suman@gmail.com", "987651231"]



console.log("------ Spread Operator ------");

let product_data = {
    productName: "Hp pavilion",
    productPrice: 1000,
    category: "Laptop",
    stock: 1,
    discoint: 3
};

// reference copy (not a real copy)
let data = product_data;

data.productName = "Asus";

console.log(product_data);
// productName becomes "Asus"
// because both variables point to same object



console.log("---- using spread ----");

// spread creates a new copy
let data2 = { ...product_data };

data2.productName = "Dell";

console.log(product_data);
// still "Asus"

console.log(data2);
// productName becomes "Dell"



console.log("------ Template Literal Example ------");

let name1 = "suman";
let age = 20;

console.log(`My name is ${name1} and age is ${age}`);
// My name is suman and age is 20



console.log("------ Ternary Operator ------");

let a1 = 10;
let b1 = 20;

// if a1 > b1 return a1
// else return b1
let c1 = a1 > b1 ? a1 : b1;

console.log(c1); 
// 20 (because b1 is larger)



console.log("------ Nullish Coalescing ------");

let a2 = 0;
let b2 = null;

// ?? returns right value only if left is null or undefined
let c2 = a2 ?? b2;

console.log(c2);
// 0 (because a2 is not null or undefined)



console.log("------ Bitwise Operator ------");

var a3 = 10;
var b3 = 20;

// bitwise AND compares binary values
var c3 = a3 & b3;

console.log(c3); 
// result: 0



console.log("------ Logical Operators ------");

var a4 = 10;
var b4 = 20;

var c4 = a4 > b4; 
// false because 10 is not greater than 20

var c5 = a4 || b4;
// OR returns first truthy value
// result: 10

var c6 = a4 && b4;
// AND returns last value if both are truthy
// result: 20

console.log(c4); // false