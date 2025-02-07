// OTHER CHALLENGES
// Challenge 1: What is your favorite drink?
let text;
let favDrink = prompt("What's your favorite cocktail drink?");
switch(favDrink) {
  case "Coca-Cola":
    alert("Excellent choice! Coca-Cola is good for your soul.");
    break;
  case "Pepsi":
    alert("Pepsi is my favorite too!");
    break;
  case "Sprite":
    alert("Really? Are you sure the Sprite is your favorite?");
    break;
  case "Royal":
    alert("Yah, Royal is tasty and refreshing!")
    break;
  default:
    alert("I have never heard of that one!");
}

// Challenge 2: Finding a Specific Name
// You are given an array of names. Write a for loop to check if the name "Alice" exists in the array.
// If found, print "Alice is in the list!", otherwise, print "Alice is not in the list."

let names = ["Lisa", "Rika", "Jin", "Kento", "Sumire"];
let isSearch = prompt("Search a name : ");
let isFound = false;

for(i = 0; i < names.length; i++) {
  if(names[i] === isSearch) {
    isFound = true;
    alert(`${isSearch} is in the list!`);
    break;
  }
}
if(!isFound) {
  alert(`${isSearch} is not in the list.`);
}

// Challenge 3: Finding an Item in a Warehouse (Recursion)
{/*
  You are given a large warehouse represented as an array of boxes.
  Each box can contain either an item name (a string) or another array of boxes (nested arrays).
  Write a recursive function to check if a specific item exists inside the warehouse.
  If the item is found, print "Item found: <item>",
  otherwise print "Item not found" after checking all boxes.
*/}

const warehouse = [
  "TV", // [0]

  // [1][0] [1][1]    [1][2][0]   [1][2][1]
  ["PC", "Laptop", ["Smartphone", "Tablet"]], 

  "Refrigerator", // [2]

  // [3][0]  [3][1]  [3][2][0]    [3][2][1]
  ["Stove", "Oven", ["Blender", "Microwave"]], 

  "Toolbox", // [4]

  // [5][0]     [5][1]      [5][2][0]  [5][2][1]
  ["Hammer", "Screwdriver", ["Nails", "Screws"]]
];

// Variables
let itemSearch = prompt("What item you want to search? : "); // Case sensitive
let itemFound = false;

// Short solution using logical operators
for (i = 0; i < warehouse.length; i++) {
  if(warehouse[i] === itemSearch || warehouse[1][0] === itemSearch
     || warehouse[1][1] === itemSearch || warehouse[1][2][0] === itemSearch
     || warehouse[1][2][1] === itemSearch) { itemFound = true; alert(`Item found : ${itemSearch}`); break;
  } else if (warehouse[2] === itemSearch || warehouse[3][0] === itemSearch
     || warehouse[3][1] === itemSearch || warehouse[3][2][0] === itemSearch 
     || warehouse[3][2][1] === itemSearch) { itemFound = true; alert(`Item found : ${itemSearch}`); break;
  } else if(warehouse[4] === itemSearch || warehouse[5][0] === itemSearch
     || warehouse[5][1] === itemSearch || warehouse[5][2][0] === itemSearch
     || warehouse[5][2][1] === itemSearch) { itemFound = true; alert(`Item found : ${itemSearch}`); break;
  } else { alert(`Item ${itemSearch} has not found after checking all boxes on warehouse.`); break; }
}

