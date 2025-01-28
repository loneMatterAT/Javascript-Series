// Converting strings to numbers in JavaScript
// Converts String to Integer
let num = parseInt("5");

// Example of converting string to number
let num1 = "12";
let num2 = 2;
alert(parseInt(num1) + num2);

// Example of reassigning the value of a variable num1
num1 = parseInt(num1)
alert(num1 + num2);

// Converts String to Float(decimal)
let pi = parseFloat("3.14");

// Example of converting string to float
let num3 = "15.53"; // Always round down to the nearest whole number 15
let num4 = 2;

num3 = parseFloat(num3)
alert(num3 + num4);

// NaN - Unsuccesful conversion returns NaN(Not a Number) value

// Arithmetic operators in JavaScript
let firstnum = 5;
let secondnum = 2;
// (+) - Addition (5 + 5 = 10)
alert(firstnum + secondnum);

// (-) - Subtraction (5 - 5 = 0)
alert(firstnum - secondnum);

// (*) - Multiplication (5 * 5 = 25)
alert(firstnum * secondnum);

// (/) - Division (5 / 5 = 1)
alert(firstnum / secondnum);

// (**) - Exponentiation (5 ** 5 = 3125)
alert(firstnum ** secondnum);

// (%) - Modulus(remainder) (5 % 2 = 1)
alert(firstnum % secondnum);

// Arithmetic precedence in JavaScript
// PEMDAS is followed in the order of precedence
// 1. Parentheses
// 2. Exponents
// 3. Multiplication
// 4. Division
// 5. Addition
// 6. Subtraction

// Mini exercise 1
let x = 5;
let y = 10;

console.log((x + y) /x); 
// Dissecting the code
// 1. (x + y) = (5 + 10) = 15
// 2. 15 / x = 15 / 5 = 3
// 3. The output will be 3

// Mini exercise 2
let a = 12;
let b = 3;

console.log(a/b+a);
// Dissecting the code
// 1. a / b = 12 / 3 = 4
// 2. 4 + a = 4 + 12 = 16
// 3. The output will be 16

// Mini exercise 3
let i = 5;
let j = 2;
let k = 7;

alert((i - k) + j ** j);
// Dissecting the code
// 1. (i - k) = (5 - 7) = -2
// 2. j ** j = 2 ** 2 = 4
// 3. -2 + 4 = 2

// Shorthand Operators in JavaScript
let number = 5;
// Operator: += | Usage: x += 5 | Same as: x = x + 5
number += 5;
alert(number); // Output: 10

// Operator: -= | Usage: x -= 5 | Same as: x = x - 5
number -= 5;
alert(number); // Output: 5

// Operator: *= | Usage: x *= 5 | Same as: x = x * 5
number *= 3; // number = 5 * 3
alert(number); // Output: 10

// Operator: /= | Usage: x /= 5 | Same as: x = x / 5
number /= 5;
alert(number); // Output: 5

// Operator: **= | Usage: x **= 5 | Same as: x = x ** 5
number **= 2; // number = number ** 2;
alert(number); // Output: 25

let z = 2;
number += (z ** 2);

alert(number); // Output: 9

// Operator: %= | Usage: x %= 5 | Same as: x = x % 5
number %= 5;
alert(number); // Output: 0

// Increment and Decrement Operators in JavaScript
// Prefix
let e = 0;

console.log(++e); // Output: 1
console.log(e); // Output: 1

// Example of using prefix increment
let g = 0;

alert(++g); // Output: 1

// Example of using prefix decrement
let m = 5;

console.log(--m); // Output: 4

// Postfix
let f = 0;

console.log(f++); // Output: 0
console.log(f); // Output: 1

// Example of using postfix increment
let h = 0;

alert(h++); // Output: 0
alert(h); // Output: 1

// Example of using postfix decrement
let l = 0;
l++;
alert(l); // Output: 1

// Another example of using postfix decrement
let n = 0;

alert(n--); // Output: 0




