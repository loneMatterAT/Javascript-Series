// While loop in Javascript
// Is used to execute a block of code, while the condition is met/true.
let i = 0;

// Condition
while(i < 5) {
  console.log("Hello World!");
  i++; // Increment i(0) + 1..4
}

// Iterate Array using While loop
// We can use while loop to read through all the array elements.
let names = ["Rui", "Kaguya", "Natsumi", "Haruka"]; // Our Array
let j = 0; // Id index of element

while(names[j]) {
  console.log(names[j]); // Output: Rui, Kaguya, Natsumi, Haruka
  j++;
}

// Using undefined to set a error message if the condition met
let nums = [1, 2, 3, 5, 7, 8, 10];
let k = 0;

while(nums[k] !== undefined) { // If nums[k] is not equal to undefined, displays all element in array, if undefined displays undefined message
  console.log(nums[k]); // Output: 1,2,3,5,7,8,10
  k++;
}

// Decrementation in while loop
let pets = ["Dog", "Cat", "Rabbit", "Parrot", "Hamster"];
let x = pets.length-1; // We have 5 elements and 4 indexes, 5-1 = 4. We start to last index which is index 4 Hamster to lower index 0

while(pets[x]) {
  console.log(pets[x]) // Output: Hamster, Parrot, Rabbit, Cat, Dog
  x--;
}

// Break Keyword
// We can use the break keyword to break out of a loop earlier than expected
let countries = ["Japan", "South Korea", "USA", "Denmark"];
let y = 0;

while(countries[y]) {
  console.log(countries[y]); // Output: Japan
  y++;
  break; // When the condition is met 0 index which is Japan, condition is break and it display Japan only among the other country
}

// Using a if statement and break
let foods = ["Bread", "Rice", "Ramen", "Steak", "Tempura"];
let z = 0;

while(foods[z]) {
  console.log(foods[z]); // Output: Bread, Rice
  z++;

  if(z === 2) break; // If the condition is met which is index 2, it displays the value of 0,1 index, Bread and Rice
}

// Searching an specific element
let fruits = ["Apple", "Orange", "Banana", "Grapes", "Jackfruit", "Melon"];
let a = 0;
let search = "Banana";

while(fruits[a]) {
  if(fruits[a] === search) {
    console.log(`We find ${fruits[a]}`); // Output: We find Banana
    break; // If Banana is find, the loop is break
  }
  a++; // Increment index while the condition is not met, which is element Banana or index 2
}


// Do-While loop
// Always runs the code once before checking the condition
// Execution before Checking Condition
let b = 0;

// Condition
do {
  console.log("Hi, everyone!"); // Output: X5 Hi, everyone!, display it first
  b++; // Add index from 0 to 1..4
} while(b < 5); // Check condition b(1) < 5(true)....loop until the condition met which is index 4


