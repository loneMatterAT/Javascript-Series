// TUTORIAL CHALLENGE 12
{/*
  Create a JSON and make the keys a subject name and the
  value a corresponding grade.  

  Use FOR/IN Loop to ITERATE through the JSON and display the subjects
  and their grade, make sure to also compute the avearge of all the 
  grades and display it.
*/}
// Manual counting computation
let grades = {
  math:90,
  science:95,
  english:85
};

let sum = grades.math + grades.science + grades.english;
average = sum/=3;

// let average = (grades.math + grades.science + grades.english / 3);
// console.log(average);

for(let grade in grades) {
  console.log(`${grade} : ${grades[grade]}`);
}
console.log(`Average : ${average}`);

// Automatic counting computation
let studGrades = {
  Math:95,
  Science:98,
  Computer:94,
  Filipino:99,
  English:90
};
let gradeAverage = 0;

for(let k in studGrades) {
  console.log(`${k} : ${studGrades[k]}`); // Display all subject and their grades
  gradeAverage += studGrades[k]; // total: 476
  // gradeAverage = gradeAverage + studGrades[k];
  // gradeAverage(0) + studGrades[0(95)] = 95
  // gradeAverage(95) + studGrades[1(98)] = 193
  // gradeAverage(193) + studGrades[2(94)] = 287
  // gradeAverage(287) + studGrades[3(99)] = 386
  // gradeAverage(386) + studGrades[4(90)] = 476 (END reach 5th key which is English)
}
gradeAverage /= Object.keys(studGrades).length;
// gradeAverage = gradeAverage / Object.keys(studGrades(Math(1),Science(2),Computer(3),Filipino(4),English(5) = (5 keys))).length;
// gradeAverage = gradeAverage(476) / Object.keys(5) = 95.2
console.log('');
console.log(`Average :  ${gradeAverage}`); // Average : 95.2