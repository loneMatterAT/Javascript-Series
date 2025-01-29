// Strings in Javascript
let word1 = "Hello World";
let len1 = word1.length;
console.log(len1); // Output: 11 always including space

let word2 = "HelloWorld";
let len2 = word2.length;
console.log(len2); // Output: 10 without space

let word3 = "Hello Everyone!";
let len3 = word3.length;
alert(len3); // Output: 15

// Direct way of string length
let word4 = "Thank You ! ";
alert(word4.length); // Output: 12

// String Indices
let person1 = "Hiyori";
alert(person1[0]); // Output: H (Always starts on 0...)

let person2 = "Kuyagai";
alert(person2[3]); // Output: a

// Knowing the whole length of a word
let person3 = "Kroitsu";
alert(person3.length); // Output: 7

// Knowing the last letter of a word
// We can use equation to know the specific letter
let person4 = "Sakimoto Jashin";
alert(person4[person4.length-1]); // Output: n

// We can also use variable
let greet1 = "Good Day!";
let x = 0;
alert(greet1[x + 5]); // Output: D

// String Methods
// toUppercase[]: Turns string to uppercase
let greet2 = "Ohayo Gozaimasu";
alert(greet2.toUpperCase());

// toLowercase[]: Turns string to lowercase
let greet3 = "KONNICHIWA!";
alert(greet3.toLowerCase());

let greet4 = "MosHI MOShi";
greet4 = greet4.toLowerCase();
alert(greet4);

// trim(): Removes extra spaces on start and end of a string
let food1 = "  Ramen Noodles      "; // Length: 21
food1 = food1.trim();
alert(food1.length); // Length: 13

// trimEnd(): Removes extra spaces on the end of a string
let food2 = "Tempura              ";
alert(food2.trimEnd());

// trimStart(): Removes extra spaces on the start of a string
let food3 = "            Dorayaki";
alert(food3.trimStart());

let food4 = "   Zunda Mochi";
food4 = food4.trimStart();
alert(food4);

// replace(): Replaces first matching word on a string
let s1 = "I have a dog, my dog is brave.";
s1 = s1.replace("dog", "cat"); // Only first dog word replaced
alert(s1);

// replaceAll(): Replaces all matching words on a string
let s2 = "I have a bird, my bird is very beautiful.";
s2 = s2.replaceAll("bird", "goldfish"); // All bird word replaced to goldfish
alert(s2);

// slice(): Gets a part of a string by specifying the start and end index exclude
let s3 = "I have a cellphone, my cellphone is good for gaming.";
s3 = s3.slice(2, 6); // 2(h), 6(space or allowance but exclude)(e)
alert(s3); // Output: have

// String template literals
// Create string values by using `` (backticks).
// We can use double quotes inside a string `""`

// Sample 1
let q1 = `"Action speaks louder than words."`;
alert(q1);

// We can use ${} to add an expression inside
// a string such as variables or mathematical expressions
// Sample 2
let firstName = "Taki";
alert(`Hi, ${firstName}. Welcome to my farm!`);

// Sample 3: Long vesion
let num1 = 5;
let num2 = 3;
let sum = num1 + num2;
alert(`${num1} + ${num2} = ${sum}`);

// Sample 4: Short version
let num3 = 10;
let num4 = 2;
alert(`${num3} + ${num4} = ${num3+num4}`);

