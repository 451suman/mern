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
 * scope
 * a. global
 * b. block
 * c. funcional
 */