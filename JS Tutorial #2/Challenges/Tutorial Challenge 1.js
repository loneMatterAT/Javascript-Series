// TUTORIAL CHALLENGE 1
// Create a program that uses variables to display the output below:
// OUTPUT: Naomi, the friendly neighbor, waved at Rui as he walked bu Rui's house. 
//         Rui smiled back at Naomi a bit coldly. Rui invited Naomi in for a cup of tea.

// Output 1 displays on the console and the browser
let person = "Rui";
let neighbor = "Naomi";
let gender = "he";
let drink = "tea";
console.log(
  neighbor + ", the friendly neighbor, waved at " +
  person + " as " + gender + " walked by " +
  person + "'s house. " + person + " smiled back a bit coldly. " +
  person + " invited " + neighbor + " in a cup of " + drink + "."
);

// Output 2 displays on webpage
document.getElementById("text").innerHTML = neighbor + ", the friendly neighbor, waved at " 
  + person + "as " + gender + " walked by " + person + "'s house. " +
  person + " smiled back a bit coldly. " +
  person + " invited " + neighbor + " in a cup of " +
  drink + ".";

// Output 3 displays an alert
alert(
  neighbor + ", the friendly neighbor, waved at " + person + " as " +
  gender + " walked by " + person + "'s house. " +
  person + " smiled back a bit coldly. " + 
  person + " invited " + 
  neighbor + " in a cup of " + drink + "."
);

// Output 4 created by the Mentor
let p1 = "Elara";
let p2 = "Lucian";
let pronoun = "she";
let beverage = "coffee";

alert(
  p1 + " the friendly neighbor, waved and smiled at " + 
  p2 + " as she walked and encountered " + 
  p2 + "'s black cat. " + p2 + " smiled back a bit but seriously, and invited " +
  p1 + " for a " + "genuine conversation over a cup of " + beverage + "."
);