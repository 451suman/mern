/**
 * if-else
 * esle-if
 * switch
 * will control the flow of the program and gives directisons to the program
 */

let day = "sunday";
if (day == "saturday" || day == "sunday") {
  console.log("weekend");
} else {
  if (day == "monday") {
    console.log("weekday");
  }
  console.log("weekday");
}

console.log("------ Switch ------");
switch (day) {
  case "sunday":
    console.log("weekend");
    break;
  case "monday":
    console.log("weekday");
    break;
  default:
    console.log("weekday");
    break;
}

/**
 * task 1
 * create a JS program to print the division based on percentage
 * create a variable to strore the obtained . the calue should be less tahn 500
 * consider 500 as a total
 * calculate the percentage and find the dicision based on following
 * a. if percentage is greated than or equal to 80 print ===> Divivsion = Distinction
 * a. if percentage is greated than or equal to 60 print ===> Divivsion = First
 * a. if percentage is greated than or equal to 45 print ===> Divivsion = second
 * a. if percentage is greated than or equal to 32 print ===> Divivsion = third
 * a. if percentage is less than 32 print ===> Divivsion = fail
 *
 */

let english = 100;
let c = 80;
let python = 40;
let java = 30;
let total = 500;
let percentage = ((english + c + python + java) / total) * 100;
console.log("percentage: ", percentage);

if (percentage >= 80) {
  console.log("Distinction");
} else if (percentage >= 60) {
  console.log("First");
} else if (percentage >= 45) {
  console.log("second");
} else if (percentage >= 32) {
  console.log("third");
} else {
  console.log("fail");
}

/**
 * TASK 2
 * Calculate the amount bill that has to be paid by a house hold if it conuses units of electricity for a month
 * the bill is calculated in ths pattern:
 * a. for next 20 units,the rate is 5 per unit
 * b. for next 30 units, the rate is 7.5 per unit
 * c. for next 50 units, the rate is 12 per unit
 * d. for next 100 units, the rate is 15 per unit
 * e. for next 200 units, the rate is 20 per unit
 * g. and above all, the rate is 25 per unit
 */
// electricity bill calculation using slab rates

let consumedUnit = 350;
let billAmount = 0;

if (consumedUnit <= 20) {
  // first 20 units -> rate 5
  billAmount = consumedUnit * 5;
} else if (consumedUnit <= 50) {
  // first 20 units -> 20 * 5
  // remaining units -> rate 7.5
  billAmount = 20 * 5 + (consumedUnit - 20) * 7.5;
} else if (consumedUnit <= 100) {
  // first 20 -> 5
  // next 30 -> 7.5
  // remaining -> 12
  billAmount = 20 * 5 + 30 * 7.5 + (consumedUnit - 50) * 12;
} else if (consumedUnit <= 200) {
  // first 20 -> 5
  // next 30 -> 7.5
  // next 50 -> 12
  // remaining -> 15
  billAmount = 20 * 5 + 30 * 7.5 + 50 * 12 + (consumedUnit - 100) * 15;
} else if (consumedUnit <= 400) {
  // first 20 -> 5
  // next 30 -> 7.5
  // next 50 -> 12
  // next 100 -> 15
  // remaining -> 20
  billAmount =
    20 * 5 + 30 * 7.5 + 50 * 12 + 100 * 15 + (consumedUnit - 200) * 20;
} else {
  // above 400 units -> 25
  billAmount =
    20 * 5 +
    30 * 7.5 +
    50 * 12 +
    100 * 15 +
    200 * 20 +
    (consumedUnit - 400) * 25;
}

console.log("Bill amount:", billAmount);
