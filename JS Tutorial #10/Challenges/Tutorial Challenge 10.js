// TUTORIAL CHALLENGE 10
{/*
  Create an array of names then search a name using any for loop on the array.
  
  Output: "Found(name)" if the name exists in the array, otherwise Output: "Not Found" if the 
  name does not exists in the array.
*/}

// Array of Names
let names = ["Goku", "Gon", "Luffy", "Ichigo", "Tanjiro", "Naruto"];
let hasSearch = "Sasuke";
let found = false;

for(i = 0; i < names.length; i++) {
  if(hasSearch === names[i]) {
    console.log(`We Found ${names[i]}!`);
    found = true;
    break;
  }
}
if(!found) {
  console.log(`${hasSearch} is Not Found on array.`);
}

// First Solution: Normal loop
let people = ["Rui", "Naomi", "Toru", "Haru"];
let search = "rUI";
let isFound = false;

for(let i = 0; i < people.length; i++) {
  if(people[i].toLowerCase() === search.toLowerCase()) {
    isFound = true;
    console.log(`We Found ${people[i]}`); // If people search on array, display it
    break; // If people is succefully found on array, the loop is terminate
  }
}
if(!isFound) {
  console.log(`${search} is Not Found on array.`);
}

// Second Solution: For/In loop
for(let i in people) {
  if(people[i].toLowerCase() === search.toLowerCase()) {
    isFound = true;
    console.log(`We Found ${people[i]}`); // If people search on array, display it
    break; // If people is succefully found on array, the loop is terminate
  }
}
if(!isFound) console.log(`${search} is Not Found on array.`);

// Third Solution: For/Of loop
for(let person of people) {
  if(person.toLowerCase() === search.toLowerCase()) {
    isFound = true;
    console.log(`We Found ${person}`); // If people search on array, display it
    break; // If people is succefully found on array, the loop is terminate
  }
}
if(!isFound) console.log(`${search} is Not Found on array.`);





































// Second Option
// for(let i = 0; i < names.length; i++) {
//   if(names[i] === isSearch) alert(`We Found ${names[i]}!`);
// } 


// Third Option
// for(let i = 0; i < names.length; i++) {
//   if(isSearch === true) {
//     alert(`Nahanap ko na si ${names[i]}!`);
//   }
// }