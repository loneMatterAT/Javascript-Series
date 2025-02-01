// Switch Statement in Javascript
// Are used to execute code depending on a case. It acts like Conditional Statements but can only check equality.
// Ordering of code in switch it doesn't matter. Whether the case starts on lowest or highest

// BREAK Keyword
// break; is necessary after a case since it will let the program break out of the switch statement.
// Without it, the switch statement will continue running all code blocks.

// DEFAULT Keyword
// Default is used to handle all cases that weren't specified.
let difficulty = 5;

// Conditions
switch(difficulty) {
  case 1:
    alert("Easy");
    break; // Conditions break
  case 2:
    alert("Normal");
    break;
  case 3:
    alert("Hard");
    break;
  default: // Handles the wrong cases or unrecognized cases like else statement
    alert("Invalid Difficulty");
    break;
}

// COMMON Case
// We can specify two or more cases in a code block
// It's like a OR Logical Operator, it's either one true, remains true
// Sample 1:
let num = 2;

// Conditions
switch(num) {
  case 2: 
  case 4:
    alert("Even"); // If user enter it's either 2 or 4 number, it displays "Even"
    break;
  case 3:
  case 5:
    alert("Odd"); // If user enter it's either 3 or 5 number, it displays "Odd"
    break;
  default:
    alert("Unknown");
    break;
}

// Sample 2:
let letter = "A";

// Conditions
switch(letter) {
  case "a":
  case "A":
    alert("Apple"); // a and A only allowed
    break;
  case "b":
  case "B":
    alert("Banana"); // b and B only allowed
    break;
  default:
    alert("Unknown Letter");
    break;
}
