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

let a= 1
let b= 2
// console.log(a+b) //3

let d = a/b // d => 0.5
let e = a%b //1



a= a+1
a++
++a



let t = 1;

console.log("t:", t); // t: 1
// t is 1

console.log("t:", t++); 
// t++ is **post-increment**:
// - The current value of t (1) is used first (if in an expression), then t is increased by 1
// - Here, since we log after increment, t becomes 2

console.log("t:", ++t); 
// ++t is **pre-increment**:
// - t is increased first, then its value is used
// - t was 2, after ++t it becomes 3

console.log("++t:", ++t); 
// pre-increment in console.log:
// - t is 3, first incremented to 4, then printed
// Output: ++t: 4

console.log("----------------- assignment operator -----------------------------")
let q = 1 
q+=1 //2
q-=1 //1



// Js Continue, Data types-20250223_080304