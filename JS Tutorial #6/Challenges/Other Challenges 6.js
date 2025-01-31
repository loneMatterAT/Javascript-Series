// TASK 01: AGE GROUP CLASSIFIER
{/*
  0 - 12 years old -> Child
  13 - 19 years old -> Teenager
  20 - 59 years old -> Adult
  60 years old and above -> Senior Citizen
*/}
let age = 125;

// Conditions
if(age <= -1) {
  alert(` TASK 01: AGE GROUP CLASSIFIER\n Age : ${age}\n"Your age is Invalid."`);
} else if(age <= 12) {
  alert(` TASK 01: AGE GROUP CLASSIFIER\n Age : ${age}\n"You are an Child."`);
} else if(age <= 19) {
  alert(` TASK 01: AGE GROUP CLASSIFIER\n Age : ${age}\n"You are an Teenager."`);
} else if(age <= 59) {
  alert(` TASK 01: AGE GROUP CLASSIFIER\n Age : ${age}\n"You are an Adult."`);
} else if(age <= 99) {
  alert(` TASK 01: AGE GROUP CLASSIFIER\n Age : ${age}\n"You are an Senior Citizen."`);
} else if(age <= 123) {
  alert(` TASK 01: AGE GROUP CLASSIFIER\n Age : ${age}\n"You are an Centenarian."`);
} else if(age <= 124) {
  alert(` TASK 01: AGE GROUP CLASSIFIER\n Age : ${age}\n"You are an Oldest Human in this World. Year of 1897"`);
} else {
  alert(` TASK 01: AGE GROUP CLASSIFIER\n Age : ${age}\n"Your age is Invalid."`);
}

// TASK 02: EVEN OR ODD NUMBER CHECKER
let number = 1;

// Conditions
if(number % 2 == 0) {
  alert(` TASK 2: EVEN OR ODD CHECKER\n Number : ${number}\n Number ${number} is a Even Number.`);
} else {
  alert(` TASK 2: EVEN OR ODD CHECKER\n Number : ${number}\n Number ${number} is a Odd Number.`);
}

// TASK 03: TRAFFIC LIGHT SIMULATION
// Arrays
let colors = ["Red", "Yellow", "Green"];
let rules = ["Stop", "Slow Down", "Go"]
let id = 3;

// Conditions
if(colors[id] == "Red") {
  alert(` TASK 3: TRAFFIC LIGHT SIMULATION\n Color : ${colors[id]}\n Rules : ${rules[id]}`);
} else if(colors[id] == "Yellow") {
  alert(` TASK 3: TRAFFIC LIGHT SIMULATION\n Color : ${colors[id]}\n Rules : ${rules[id]}`);
} else if(colors[id] == "Green") {
  alert(` TASK 3: TRAFFIC LIGHT SIMULATION\n Color : ${colors[id]}\n Rules : ${rules[id]}`);
} else {
  alert(` TASK 3: TRAFFIC LIGHT SIMULATION\n Color : ${colors[id]}\n The Traffic Light Color is Undefined.`);
}

