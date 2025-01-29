// TUTORIAL CHALLENGE 2
// Create a program that uses variables for 5 subject grades.
// Get the average of all the grades and display it.

// Solution
let mathGrade = 92;
let scienceGrade = 92;
let englishGrade = 85;
let filipinoGrade = 95;
let historyGrade = 93;

sum = mathGrade + scienceGrade + englishGrade + filipinoGrade + historyGrade;
sum/=5;
alert("Average : " + sum); // Output: 91.4
console.log("Average : " + sum);

// Mentor's solution
let math = 92;
let science = 91;
let computer = 89;
let mapeh = 92;
let english = 85;

let average = (math + science + computer + mapeh + english) / 5;
alert("Average : " + average); // Output 89.8

// Creating a real life scenario for the tutorial challenge
// Rui wants to know her average grade for the first quarter of the school year.
// She has 10 subjects: Math, Science, Computer, Katakana, English, History, Music, Arts, PE and Ethics.
// She decided to get the average of all her grades from registrar's office.

// Students Information
let person = "Rui";
let age = 18;
let sex = "Female";
let gradeLevel = "Grade 12";
let section = "A";
let studNum = 10010393;

// Grades for the first semester
let math1 = 98;
let science1 = 97;
let computer1 = 99;
let katakana1 = 100;
let english1 = 92;
let history1 = 98;
let music1 = 98;
let arts1 = 99;
let pe1 = 90;
let ethics1 = 95;

let average1 = (
  math1 + science1 + computer1 + katakana1 + english1 + 
  history1 + music1 + arts1 + pe1 + ethics1) / 10;
alert("First Semester Average : " + average1); // Output 96.6

// Grades for the second semester
let math2 = 99;
let science2 = 98;
let computer2 = 99;
let katakana2 = 100;
let english2 = 94;
let history2 = 99;
let music2 = 99;
let arts2 = 100;
let pe2 = 92;
let ethics2 = 97;

let average2 = (
  math2 + science2 + computer2 + katakana2 + english2 + 
  history2 + music2 + arts2 + pe2 + ethics2) / 10; // Output 97.7
alert("Second Semester Average : " + average2);

// Overall average for the school year
let overallAverage = (average1 + average2) / 2;
alert("General Average : " + overallAverage); 

// Scenario: Rui going to the registrar's office to get her grades
console.log("Rui : Good day! I'm Rui from Grade 12 - Section A. I would like to get my grades for the first semester.");
alert("Registrar : Good day, Rui! Please wait for a moment. I will get your grades.");
console.log("Rui : Okay, maam I'll wait.");
alert("Registrar : Okay, are you ready? Ms. Rui Ichigio.");
console.log("Rui : Yes, I'm ready. Please proceed.");
alert("Registrar : Here are your grades for the first semester.");
alert(
  "Student Information\nName : " + person + "\nAge : " + age + "\nSex : " + sex +
  "\nGrade Level : " + gradeLevel + "\nSection : " + section + "\nStudent Number : " + studNum +
  "\n\nGrade Information for First Semester\nMath : " + math1 + "\nScience : " + science1 +
  "\nComputer : " + computer1 + "\nKatakana : " + katakana1 + "\nEnglish : " + english1 +
  "\nHistory : " + history1 + "\nMusic : " + music1 + "\nArts : " + arts1 +
  "\nPhysical Education : " + pe1 + "\nEthics : " + ethics1 +
  "\nAverage : " + average1
);
alert("Registrar : Rui, your grades is so impressing!");
console.log("Rui : Thank you ma'am, for showing my grades for first semester!");
alert("Registrar : Rui, do you want to know your grades for Second semester?");
console.log("Rui : Yes ma'am, sure.");
alert("Registrar : Here are your grades for the second semester.");
alert(
  "Student Information\nName : " + person + "\nAge : " + age + "\nSex : " + sex +
  "\nGrade Level : " + gradeLevel + "\nSection : " + section + "\nStudent Number : " + studNum +
  "\n\nGrade Information for Second Semester\nMath : " + math2 + "\nScience : " + science2 +
  "\nComputer : " + computer2 + "\nKatakana : " + katakana2 + "\nEnglish : " + english2 +
  "\nHistory : " + history2 + "\nMusic : " + music2 + "\nArts : " + arts2 +
  "\nPhysical Education : " + pe2 + "\nEthics : " + ethics2 +
  "\nAverage : " + average2
);
alert("Registrar : Rui, your grades are impressive!");
console.log("Rui : Thank you ma'am, for showing my grades for the second semester!");
alert("Registrar : Rui, do you want to know your overall average for the school year?");
console.log("Rui : Yes ma'am, please.");
alert("Registrar : Your overall average is " + overallAverage + "\nYour standing is A+");
console.log("Rui : Thank you ma'am, for all the information!");
alert("Registrar : Goodbye, Rui! Have a great day!");
console.log("Rui : Goodbye, ma'am! Thank you!");





