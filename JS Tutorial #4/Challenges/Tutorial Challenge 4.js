// TUTORIAL CHALLENGE 4
{/*
   Create a program that uses string template literals
   and variables to display the output below:

                        OUTPUT
        Naomi, the friendly neighbor, waved at Rui
      as he walked by Rui's house. Rui smiled back
      at Naomi a bit coldly. Rui invited Naomi in
      for a cup of tea.
*/}

let person = "Rui";
let neighbor = "Naomi";
let pronoun = "he";
let beverage = "tea";
let food = "ramen";

alert(
  `  ${neighbor}, the friendly neighbor, waved at ${person} as
  ${pronoun} walked by ${person}'s house.
  ${person} smiled back at ${neighbor} a bit coldly.
  ${person} invited ${neighbor} in for a bowl of ${food}.`
);
