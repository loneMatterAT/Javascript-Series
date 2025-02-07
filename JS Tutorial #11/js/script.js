// JSON (Javascript Object Notation)
// Is a file format that is commonly used in transporting data, via API or other means.
// Syntax: let person = {key:value,.....}; and if we naming a key must be a purpose and not to duplicate a key to avoid overwrite value.

// JSON Structure
// A JSON Data should have a key | value pair and a colon ':' in the middle.
// JSON should be surrounded and indicated by {}.
let person = {
  firstName:"Rui",
  lastName:"Ichigio",
  age: 22, 
  bloodType:"A",
  sex:"F"
}; 
console.log(person);

// A JSON can have multiple JSON Data by using commas as separators. JSON's should be surrounded by {}.
let people = {
  firstName:"Naomi",
  lastName:"Katagaki",
  age:22
};

// JSON with array
// A JSON can also havea arrays as its value.
let user = {
  firstName:"Asakura",
  lastName:"Yagi",
  age:21,
  hobbies:["Gaming", "Reading", "Photography"] // Can have a array(datatype/object) inside on JSON
};
console.log(user);

// Nested JSON
// A JSON can also have JSON's as its value.
let human = { // First JSON
  firstName:"Natsumi",
  lastName:"Shira",
  age:18,
  hobbies:["Watching K-drama", "Playing guitar", "Singing"],
  pets:{ // Second JSON
    1:{ // key 1
      name:"Sky",
      type:"Dog",
      breed:"Golden retriever"
    },
    2:{ // key 2
      name: "Kari",
      type: "Cat",
      breed:"Munchin"
    }
  }
};
console.log(human);

// JSON Read
// We can READ specific values of a JSON by using its key surrounded by []
let character = {
  firstName:"Naruto",
  lastName:"Uzumaki",
  age:18,
  bloodType:'O',
  0:"Male",
  //           0          1          2
  hobbies:["Laughing", "Eating", "Sleeping"]
};

console.log(character["firstName"]); // Read and accessing a specific value on JSON using key surrounded by [] and use "" if string
console.log(character["lastName"]);
console.log(character["age"]);

// Using period notation for JSON Read. It will only works on a "String" Key except to number
console.log(character.firstName); // Read and accessing a specific value on JSON using "." period
console.log(character.lastName);
console.log(character.age);
console.log(character.bloodType);

// We can use template literals / backticks to concatenate two keys
console.log(`${character.firstName} ${character.lastName}`);

// If the key is number
console.log(character["0"]);

// We ca read array values in a JSON by using its key and accessing it normally by index
console.log(character["hobbies"][0]); // Output: Laughing
console.log(character["hobbies"][1]); // Output: Eating
console.log(character["hobbies"][2]); // Output: Sleeping

// We can also use period '.' notation
console.log(character.hobbies[0]); // Output: Laughing

// Nested JSON Read
let hero = { // 1st JSON
  firstName:"Tony",
  lastName:"Stark",
  age:32,
  hobbies:["Robotics", "Troubleshooting", "Coding"],
  suits:{ // 2nd JSON
    0:{
      name:"Iron Man Armor Model 1",
      type: "Metal Ion"
    },
    1:{
      name:"Iron Man Armor Model 2",
      type:"Iron"
    }
  }
};

// Read and Accesing nested JSON index using []
console.log(hero["suits"][0]["name"]); // Output: Iron Man Armor Model 1 
console.log(hero["suits"][1]["type"]); // Output: Iron

// We can also use period '.' notation
console.log(hero.suits[1]["name"]); // Output: Iron Man Armor Model 2
console.log(hero.suits[1]["type"]); // Output: Iron

// We can also both use [] and '.' notation for accesing a value on JSON
console.log(hero.suits[1].name); // Output: Iron Man Armor Model 2
console.log(hero.suits[1].type); // Output: Iron


// JSON Write
// We can UPDATE specific values od a JSON by using its key surrounded by [] and assigning a value to it.
let anime = {
  animeName:"Doraemon",
  creator:"Fujiko F. Fujio",
  genre:"Shonen, Sci-fi, Adventure",
  strongest:["Naruto", "Sasuke"]
};
// Without Update
console.log(anime);

// Update Existing "key|value"
anime["animeName"] = "One Piece"; // Doraemon to One piece
anime["creator"] = "Eiichiro Oda";
anime["genre"] = "Shonen, Fantasy, Comedy";
console.log(anime);

// Create New "key|value"
// Assigning a value to a non-existent key will result into adding it on JSON
anime["protagonist"] = "Luffy";
console.log(anime); 

// We can also UPDATE specific values of a JSON by using a period followed by the key and assigning a value to it
// First Update
console.log(anime);

// Second Update
// Update Existing "key|value"
anime.animeName = "Naruto"; // One piece to Naruto
anime.creator = "Masashi Kishimoto";
anime.genre = "Shonen, Action, Fantasy";
anime.protagonist = "Naruto"
console.log(anime.animeName); // Knowing specific value if has changes
console.log(anime);

// Create New "key|value"
// Assigning a value to a non-existent key will result into adding it on JSON
anime.antagonist = "Black zetsu";
console.log(anime.antagonist); // Knowing if specific value has changes
console.log(anime); // Console is alphabetically ordered and key antagonist is on the top

// We can also update the value of array inside on JSON using '.'
console.log(anime.strongest);
anime.strongest[0] = "Hagoromo";
anime.strongest[1] = "Hamura";
console.log(anime.strongest);


// JSON Stringify
// We can convert JSON into string by using the JSON.stringify() method
let game = { // 1st JSON
  gameName:"Tekken",
  leadChar:"Jin",
  boss:"Azrael",
  genre:["Action", "Fantasy", "Drama"], // This array can also be a string once we used stringify
  otherChar:{ // 2nd JSON is also be a string once we used stringify
    0:{
      name:"Kazuya",
      type:"Anti-hero"
    },
    1:{
      name:"Heihachi",
      type:"Villain"
    }
  }
};

// We can manipulate it by string, we can access by index and use string methods
let strGame = JSON.stringify(game); // JSON to string
console.log(strGame); // game(JSON) to strGame(string)

// JSON Parsing
// We can convert valid Strings into JSON by using the JSON.parse() method
// let strStudent = {
//   "student ID":1001,
//   "firstName":"Seina",
//   "lastName":"Kuwata",
//   "age":25
// } - Invalid string without backticks, double quotes "" and comma

let strStudent = `{"student ID":1001,"firstName":"Seina","lastName":"Kuwata","age":25,"bloodType":"B"}`; // All keys must be double quotes "key" even numbers

let student = JSON.parse(strStudent); // If a string is invalid, it would throw an error at the console
console.log(student); // String to JSON


// JSON Array
// We can also create an Array of JSONs. Which can be manipulated the same as any other arrays []
let students = [
  { // index 0
    firstName:"Chona",
    lastName:"Miyazawa",
    age:20
  },
  { // index 1
    firstName:"Kenta",
    lastName:"Sukima",
    age:21
  },
  { // index 2
    firstName:"Risa",
    lastName:"Ayami",
    age: 19
  }
];

console.log(students[0].firstName); // Output: Chona
console.log(students[1].lastName); // Output: Sukima

// We can also use concatenation in period '.' notation
console.log(`${students[2].firstName} ${students[2].lastName}`); // Output: Risa Ayami 

// We can also use concatenation in square bracket[] notation
console.log(`${students[1]["firstName"]} ${students[1]["lastName"]}`); // Output: Kenta Sukima

// Completed
console.log(`Name : ${students[0].firstName} ${students[0]["lastName"]}\nAge : ${students[0].age}`);
// Output: Name : Chona Miyazawa
//         Age : 20


