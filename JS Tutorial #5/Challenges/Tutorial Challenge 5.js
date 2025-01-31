// TUTORIAL CHALLENGE 5
{/*
  Use three arrays and use each index as a data
  for a person. Access and output one of the data
  by using a variable for the index.

  Information Arrays:
  - First Name
  - Last Name
  - Age

  Example Output:
  Index: 0
  First Name : Rui
  Last  Name: Ichigio
  Age :  18
*/}

// Arrays: First Solution
let firstNames = ["Rui", "Naomi", "Keiko", "Hiro", "Chisana"];
let lastNames = ["Ichigio", "Katagaki", "Kushida", "Yamada", "Sasaki"];
let ages = [18, 18, 20, 25, 23];

alert(
  `Index        : ${firstNames.length-5}
  \nFirst Name : ${firstNames[0]}
  \nLast Name  : ${lastNames[0]}
  \nAge        : ${ages[0]}`
);

// Second Solution
let foods = ["Ramen", "Gyoza", "Dorayaki", "Mochi", "Sushi"];
let sizes = ["Medium", "Large", "Small", "Medium", "Small"];
let prices = ["¥250.00", "¥130.00", "¥50.00", "¥10.00", "¥530.00"];

let i = 0;

alert(
  `Food ID : ${i}
  \nFood  : ${foods[i]}
  \nSize  : ${sizes[i]}
  \nPrice : ${prices[i]}`
);

// Mentor solution
let fruits = ["Apples", "Ponkans", "Grapes", "Melon", "Mangoes"];
let colors = ["Red", "Orange", "Violet", "Yellow", "Brown"]
let weights = ["1kg", "5.6kg", "1.2kg", "3kg", "10kg"]

let id = 3;
console.log(`ID     : ${id}`);
console.log(`Fruit  : ${fruits[id]}`);
console.log(`Color  : ${colors[id]}`);
console.log(`Weight : ${weights[id]}`);

alert(
  `ID  : ${id}
  \nFruit  : ${fruits[id]}
  \nColor  : ${colors[id]}
  \nWeight : ${weights[id]}`
);