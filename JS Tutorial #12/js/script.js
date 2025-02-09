// JSON & FOR/IN Loop in Javascript
// We can use FOR/IN Loop to ITERATE over all the keys inside a JSON.
let person = {
  firstName:"Rui",
  lastName:"Ichigio",
  age:20
};

// Using FOR/IN Loop
for(let k in person) {
  console.log(k); // Display all keys of JSON person in console
  console.log(person[k]); // Display all value of JSON person in console
  console.log(`${k} : ${person[k]}`); // Mixing key and value to display
}

// Object.keys() Method
// Returns the keys of a JSON in an array format.
let student = {
  firstName:"Naomi",
  lastName:"Katagaki",
  age:20,
  bloodType:'O',
  sex:'M'
}

let keys = Object.keys(student);
console.log(keys); // Keys of JSON to array of keys format

let size = Object.keys(student).length; // We will know how many keys inside on JSON

for(let i = 0; i < keys.length; i++) {
  console.log(student[keys[i]]); // JSON(student) - keys - value[i]
}



