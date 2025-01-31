// Conditional Statements in Javascript
// Are statements that executes actions depending on different conditions.
// They are used with Comparion Operators and Logical Operators

{/*
Comparison Operators
- Are opeartors used to compare 2 values
Operators
1. == -> Equal
2. === -> Equal value and Type
3. != -> Not Equal
4. !== -> Not Equal Value and Type 
*/}

// Equal any datatype but same value
let x = 12;
let y = "12";
alert(x == y); // True

// Equal value and Type (strictly equal case sensitive)
let i = "15";
let j = 15;
alert(i === j); // False

let a = "Hello World";
let b = "Hello world";
alert(a === b); // False

// Not Equal
let c = 5;
let d = 7;
alert(c != d); // True (negate/contradict the real result)

// Not Equal Value and Type
let e = 20;
let f = "20";
alert(e !== f); // True (1st: equal-2nd: not equal-3rd: equal)

// Comparison Operators
// 1. Greater Than (>)
alert(13 > 10); // Output: True
alert(10 > 10); // Qutput: False

// 2. Less Than (<)
alert(5 < 10); // Output: True
alert(10 < 10); // Qutput: False

// 3. Greater Than or Equal (>=)
alert(5 >= 5); // Output: True
alert(10 >= 10); // Qutput: True

// 4. Less Than or Equal (<=)
alert(5 <= 7); // Output: True
alert(10 <= 10); // Qutput: True

// IF Statement
// Uses the IF keyword and {} to check for a certain condition.
let age = 18;

if(age >= 18) {
  alert("Legal Age"); // Meet the condition
  alert("You can Vote!");
}
alert("Thank You"); // Unmeet the condition
// Output: Legal Age, Thank You

// IF-ELSE Statement
// Uses the ELSE keyword and {} it is used in combination with the IF keyword
let personAge = 1;

if(personAge >= 18) {
  console.log("Legal Age");
} else {
  console.log("Minor Age");
}
console.log("Thank You!");
// Output: Minor Age, Thank you

// Double IF Statement
let studAge = 18;

if(studAge >= 18) {
  console.log("Legal Age");
}

if(studAge <= 18) {
  console.log("Minor Age");
}
console.log("Thank You!");

// ELSE IF Statement
{/*
  Uses the ELSE IF keyword and {} it is used in combination
  with the IF keyword if we want additional specific conditions.
  We can add as many as we want.
  (ELSE IF runs sequentially when the IF comparison is false)
*/}
let userAge = 12;

if(userAge >= 18) {
  console.log("Legal Age");
} else if(userAge <= 0) {
  console.log("Invalid Age");
} else {
  console.log("Minor Age");
}
console.log("Thank You!");
// Output: Legal Age, Thank you
// Age (18-Up): Legal Age
// Age (17-Down): Minor Age
// Age (-1): Invalid Age