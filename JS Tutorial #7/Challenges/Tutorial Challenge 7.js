// TUTORIAL CHALLENGE 7
{/*
  Create a program that checks the age(number) and isRegistered(boolean) variable.
  Given the condition and output below.
  
                    SAMPLE OUTPUT
      - Registered and 18 above -> Valid Voter
      - Not Registered and 18 above -> Register First
      - Registered and below 18 -> Invalid Voter
      - Not Registered and below 18 - Non Voter
*/}

// First Option Using Logical Operators with Conditional Statements
let age = 17;
let isRegistered = false;
// Conditions
// if(age >= 18 && isRegistered === true) {
//   alert("You are a Valid Voter!");
// } else if(isRegistered === false && age >= 18) {
//   alert("You need to Register First.")
// } else if(isRegistered === true && age >= 17) {
//   alert("You are Invalid Voter.")
// } else if(isRegistered === false && age >= 17) {
//   alert("You are a Non Voter.")
// } else {
//   alert("Invalid Input.")
// }

// Second Option Using Nested Conditional Operators
if(age >= 18) { // 1st

  if(isRegistered === true) { // 3rd
    alert("You are a Valid Voter!");
  } else { // 3rd
    alert("You need to Register First.")
  }

} else if(isRegistered === true) { // 2nd
  alert("You are Invalid Voter.")
} else { // 1st
  alert("You are a Non Voter")
}