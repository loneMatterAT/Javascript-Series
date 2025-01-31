// Arrays in Javascript
{/*
   A variable that can store multiple values.
  The values inside an array is called an element.
  The number where an element is located is called the index. 
  Array is object datatype.
*/}

// Array of Strings
let names = ["Kesuke", "Hayato", "Natsumori", "Aoi", "Toru"];
alert(names);

// Array of Numbers
let numbers = [2, 4, 6, 7, 9, 35, 12.75, 100, 3, 1];

// Array of Mixed Datatypes
let mixed = ["Kagami", 99, "Sato", true, 3.99];

// Empty Array
let dummy = [];

// Array Length
// We can use the length property to get the length
// of an array. (Count starts to 1)
let foods = ["Ramen", "Pizza", "Dorayaki", "Rice"];
alert(foods.length); // Output: 4

// Array Structure
let gadgets = ["Smartphone", "Ipad", "Laptop", "PC", "PS5"];

// Elements  Smartphone  Ipad  Laptop  PC  PS5  (Count starts 1)
// Index         0         1     2     3    4   (Count starts 0)

// Reading Arrays
// Syntax : identifier[index]; -> cars[2]

// Example
let cars = ["Yaris", "Suzuki", "Honda"];
console.log(cars[0]);
alert(cars[0]); // Output: Yaris

// Know the last element in an array using mathematical equation
let things = ["Book", "Fan", "Mug", "Eyeglasses"];
alert(things[things.length-1]); // Output: Eyeglasses

// Updating Arrays
// We need to specify the index in order to change/add a 
// certain element value.
// Syntax: identifier[index] = value -> games[1] = "LOL";

// Example 1
let games = ["Chess", "GTA5", "Mobile Legends"];
games[0] = "Dota";
alert(games); // Output: Dota, GTA5, Mobile Legends

// Example 2
let numbering = [13, 24, 36, 48];
numbering[1] = 29;
alert(numbering[1]); // Output: 29

// Adding Array element or value using vacant/last index
let appliances = ["Aircon", "Refrigerator", "Blender"];
appliances[3] = "Microwave";
alert(appliances); // Output: Aircon, Refrigerator, Blender, Microwave

// Updating Arrays: length
// Use length as an index to add an element to the last index
// ADD using LENGTH
let cities = ["Tokyo", "Kyoto"];
cities[cities.length] = "Osaka";
cities[cities.length] = "Saitama";
alert(cities); // Output: Tokyo, Kyoto, Osaka, Saitama

// Updating Arrays: push(value)
// Adds an element on the last index
// ADD using push(value)
cities.push("Nagoya");
alert(cities); // Output: Tokyo, Kyoto, Osaka, Saitama, Nagoya


// Updating Arrays: unshift(value)
// Adds an element on the first index
cities.unshift("Fukuoka");
cities.unshift("Sapporo");
alert(cities[1]); // Output: Fukuoka

// Deleting Arrays
// There are many ways to DELETE an element on the array.

// Using length()
// Change length to desired number
// DELETE using LENGTH
let subjects = ["Math", "Science", "Computer", "Ergonomics", "Ethics"];
subjects.length = 4;
// subjects.length = 0; // Deletes all element in array
alert(subjects); // Output: Math, Science, Computer, Ergonomics

// Using pop() 
// Deletes the last element
// DELETE using pop()
subjects.pop();
alert(subjects); // Output: Math, Science, Computer

// Using shift()
// Deletes the first element
// DELETE using shift()
subjects.shift();
alert(subjects); // Output: Science, Computer



// Using slice(start, end) (Always allowance to end index)
// Gets a parts of the array
// DELETE using slice(start_index, end_index);
let students = ["Naomi", "Rui", "Kaguya", "Hiro", "Sai"];
students = students.slice(2,4);
alert(students); // Output: Kaguya, Hiro





