// logical Operators in Javascript
// Are used in combination with conditiona statements to create more complex conditions.
// It Allows programmers to put 2 or more conditions in one expression.

// AND Operator: Both and all conditions should be true
let age = 19;
let experience = 10;
let language = "C++";

// Conditions
alert(age >= 18 && experience > 1 && language === "C++");
alert(age >= 18 && experience > 3);
console.log(age >= 18 && experience > 1); // True (age and experience condition both true)
console.log(age >= 18 && experience > 3); // False (age condition true but exoerience condition false)

// Using AND Operator on Conditional Statements
if(age >= 18 && experience > 3 && language === "C++") {
  alert("You are Qualified for the Job");
} else {
  alert("You are Not Qualified for the Job");
}

// One liner code of if-else condition
if(age >= 18 && experience > 3 && language === "C#") alert("You are Qualified for the Job"); else alert("You are Not Qualified for the Job");


// OR Operator: Either conditions should be true
let hasDegree = true;
let exp = 3;

console.log(hasDegree || exp); // True (It's either one true condition is true)
console.log(hasDegree || exp > 4); // True (Remains true because hasDegree condition is true even though exp condition is false)

// OR Operator with both condition false
let aplicantExp = 0;
let progLanguage = "Python";

// Condition
alert(aplicantExp > 1 || progLanguage === "Java"); // False (aplicantExp condition false, progLanguage is false, so this condtion is false)

// Using OR Operator on Conditional Statements
let hasBallpen = false;
let hasPencil = false;

if(hasBallpen === true || hasPencil === true) { // True
  alert("You can come in on my class.")
} else {
  alert("Go home or buy, it's either ballpen or pencil.")
}


// NOT Operator: Inverts the result of a condition
let personDegree = true;
let personExp = 3;

// Condition
console.log(!personDegree); // False (Condition is true but negate or invert it using ! into false condition)
console.log(!(personExp)); // False (Condition is true but negate it using ! into false condition)

// NOT Operator using Conditional Statement
let isTall = false;

if(!isTall) {
  alert("You are Fit to play Basketball"); // True (Condition is true but it inverts into false condition of else statement)
} else {
  alert("You are Fit for Gymnastics");
}


// NESTED Conditional Statements: We can nest conditional statements inside a conditional statement
let userAge = 18;
let userExp = 10;

// Nested Conditions: Long version
if(userAge >= 18) { // First condition

  if(userExp >= 1) { // Second condition
    
    if(userExp >= 5) { // Third condition
      alert("You are Over Qualified!");
    } else {
      alert("You are Qualified!"); // Third condition
    }

  } else {
    alert("You don't have enough experience."); // Second condition
  }

} else {
  alert("You are a Minor"); // First condition
}

// Nested Conditions: Short version
if(userAge >= 18) { // 1st

  if(userExp > 1) { // 2nd

    if(userExp >= 5) alert("You are Over Qualified!"); // 3rd
    else alert("You are Qualified"); // 3rd

  }
  else alert("You don't have enough experience."); // 2nd

} else alert("You are a Minor"); // 1st



