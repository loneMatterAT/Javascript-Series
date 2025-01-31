// TUTORIAL CHALLENGE 6
{/*
  Given the following conditions
  * 101 above = Invalid Grade
  * 98 - 100 = With Highest Honor
  * 95 - 97 = With High Honor
  * 90 - 94 = With Honor
  * 75 - 89 = Passed
  * 74 below = Failed

  - Create a program that output 
    the standing of a student based on their general average.
*/}
// STUDENT INFORMATIONS
let studentsID = ["1000123", "1000456", "1000789", "1000971", "1000572"];
let firstNames = ["Rui", "Naomi", "Toru", "Kaisen", "Haru"];
let lastNames = ["Ichigio", "Katagaki", "Hanagata", "Yamamoto", "Watanabe"];
let ages = [18, 18, 22, 19, 24];
let genders = ["Female", "Male", "Male", "Female", "Gay"];
let programs = ["BSCpE", "BSCpE", "BSHM", "BSCS", "BSBM"];
let yearLevels = ["First year", "First Year", "Third Year", "Second Year", "Fourth Year"];
let sections = ["A", "A", "C", "D", "E"];

let id = 0; // ID for student index

// GRADE COMPUTATIONS
let mathGrades = [98, 92, 80, 95, 100];
let scienceGrades = [99, 95, 70, 98, 200];
let computerGrades = [100, 98, 70, 95, 400];
let average = `${mathGrades[id] + scienceGrades[id] + computerGrades[id]}`;
let genAve = average/3;


// GRADE STANDINGS
if(genAve > 100) {
  standing = `Invalid Grade`;
} else if(genAve >= 98) {
  standing = `With Highest Honor`;
} else if(genAve >= 95) {
  standing = `With High Honor`;
} else if(genAve >= 90) {
  standing = `With Honor`;
} else if(genAve >= 75) {
  standing = `Passed`;
} else {
  standing = `Failed`;
}

alert(`
  STUDENT INFORMATION
    Student ID\t : ${studentsID[id]}
    Name\t       : ${firstNames[id]} ${lastNames[id]}
    Age\t        : ${ages[id]}
    Gender\t     : ${genders[id]}
    Programs\t   : ${programs[id]}
    Section\t    : ${sections[id]}
  \nGRADE INFORMATION
  Math\t            : ${mathGrades[id]}
  Science\t         : ${scienceGrades[id]}
  Computer\t        : ${computerGrades[id]}
  General Average\t : ${genAve}
  Standing          : ${standing}`
);

// Mentor First Solution start from highest to lowest grade
let grade = 75;

if(grade > 100) {
  alert("Invalid Grade");
} else if(grade >= 98) {
  alert("With Highest Honors");
} else if(grade >= 95) {
  alert("With High Honors");
} else if(grade >= 90) {
  alert("With Honors");
} else if(grade >= 75) {
  alert("Passed");
 } else {
  alert("Failed")
 }

// Second Solution start from lowest to highest grade
let studGrade = 75;

if(studGrade < 75) {
  alert("Failed")
} else if(studGrade <= 89) {
  alert("Passed");
} else if(studGrade <= 94) {
  alert("With Honors");
} else if (studGrade <= 97) {
  alert("With High Honors");
} else if(studGrade <= 100) {
  alert("With Highest Honors");
} else {
  alert("Invalid Grade");
}

