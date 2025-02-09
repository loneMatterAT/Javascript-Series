// TUTORIAL CHALLENGE 11
// Create an array of JSONs with different keys an values. (THIS IS YOUR CHOICE)
// Iterate the aary and display all its values in an orderly way.

let students = [
  { // Student 1
    studNo:10001,
    firstName:"Rui",
    lastName:"Ichigio",
    age: 18,
    sex:"Female",
    birthDay:11,
    birthMonth:"May",
    birthYear:2000,
    address:"Kyoto, Japan",
    number:"+81-80-1234-5678",
    course:"BScPE",
    section: "A",
    years: 2,
    status:"Regular",
    hobbies:["Reading", "Coding", "Drawing"]
  },
  { // Student 2
    studNo:10002,
    firstName:"Naomi",
    lastName:"Katagaki",
    age: 18,
    sex:"Male",
    birthDay:12,
    birthMonth:"March",
    birthYear:2000,
    address:"Osaka, Japan",
    number:"+81-80-1234-8765",
    course:"BScPE",
    section: "A",
    years: 2,
    status:"Regular",
    hobbies:["Reading", "Gaming", "Watching Anime"]
  }
];

// Adding STUDENT 03 outside of JSON
students.push({
  studNo:10003,
  firstName:"Sakurako",
  lastName:"Chisana",
  age: 20,
  sex:"Female",
  birthDay:5,
  birthMonth:"December",
  birthYear:1998,
  address:"Shibuya, Japan",
  number:"+81-80-1234-1024",
  course:"BScPE",
  section: "A",
  years: 2,
  status:"Irregular",
  hobbies:["Singing", "Troubleshooting", "Playing instruments"]
});


// Searching an specific student
let isSearch = prompt("Enter student number you want to search : ");
let isFound = false;

if(isSearch === "10001") {
  isFound = true;
  // STUDENT 01
  alert(`\nStudent No : ${students[0].studNo}\nName : ${students[0].firstName} ${students[0].lastName}\nAge : ${students[0].age}
    \nSex : ${students[0].sex}\nBirthdate : ${students[0].birthMonth}, ${students[0].birthDay} ${students[0].birthYear}\nAddress : ${students[0].address}
    \nCellphone No : ${students[0].number}\nCourse : ${students[0].number}\nSection : ${students[0].section}\nYears : ${students[0].years}
    \nStatus : ${students[0].status}\nHobbies : ${students[0].hobbies[0]}, ${students[0].hobbies[1]}, ${students[0].hobbies[2]}.\n\n`);
} else if(isSearch === "10002") {
    isFound = true;
    // STUDENT 02
  alert(`\nStudent No : ${students[1].studNo}\nName : ${students[1].firstName} ${students[1].lastName}\nAge : ${students[1].age}
    \nSex : ${students[1].sex}\nBirthdate : ${students[1].birthMonth}, ${students[1].birthDay} ${students[1].birthYear}\nAddress : ${students[1].address}
    \nCellphone No : ${students[1].number}\nCourse : ${students[1].number}\nSection : ${students[1].section}\nYears : ${students[1].years}
    \nStatus : ${students[2].status}\nHobbies : ${students[1].hobbies[0]}, ${students[1].hobbies[1]}, ${students[1].hobbies[2]}.\n\n`);
} else if(isSearch === "10003") {
    // STUDENT 03
  alert(`\nStudent No : ${students[2].studNo}\nName : ${students[2].firstName} ${students[2].lastName}\nAge : ${students[2].age}
    \nSex : ${students[2].sex}\nBirthdate : ${students[2].birthMonth}, ${students[2].birthDay} ${students[2].birthYear}\nAddress : ${students[2].address}
    \nCellphone No : ${students[2].number}\nCourse : ${students[2].course}\nSection : ${students[2].section}\nYears : ${students[2].years}
    \nStatus : ${students[2].status}\nHobbies : ${students[2].hobbies[0]}, ${students[2].hobbies[1]}, ${students[2].hobbies[2]}.\n\n`);
} else if(isSearch === "Show Info") {
  // STUDENT 01
  console.log(`LIST OF STUDENTS\t(BSCPE)\t(SECTION A)\t(2ND YEAR)\t(ADVISER : MR KENTO TAKEHIKO)\n\nStudent No : ${students[0].studNo}\nName : ${students[0].firstName} ${students[0].lastName}\nAge : ${students[0].age}
    \nSex : ${students[0].sex}\nBirthdate : ${students[0].birthMonth}, ${students[0].birthDay} ${students[0].birthYear}\nAddress : ${students[0].address}
    \nCellphone No : ${students[0].number}\nCourse : ${students[0].number}\nSection : ${students[0].section}\nYears : ${students[0].years}
    \nHobbies : ${students[0].hobbies[0]}, ${students[0].hobbies[1]}, ${students[0].hobbies[2]}.\n\n`);

// STUDENT 02
  console.log(`\nStudent No : ${students[1].studNo}\nName : ${students[1].firstName} ${students[1].lastName}\nAge : ${students[1].age}
    \nSex : ${students[1].sex}\nBirthdate : ${students[1].birthMonth}, ${students[1].birthDay} ${students[1].birthYear}\nAddress : ${students[1].address}
    \nCellphone No : ${students[1].number}\nCourse : ${students[1].number}\nSection : ${students[1].section}\nYears : ${students[1].years}
    \nHobbies : ${students[1].hobbies[0]}, ${students[1].hobbies[1]}, ${students[1].hobbies[2]}.\n\n`);

// STUDENT 03
  console.log(`\nStudent No : ${students[2].studNo}\nName : ${students[2].firstName} ${students[2].lastName}\nAge : ${students[2].age}
    \nSex : ${students[2].sex}\nBirthdate : ${students[2].birthMonth}, ${students[2].birthDay} ${students[2].birthYear}\nAddress : ${students[2].address}
    \nCellphone No : ${students[2].number}\nCourse : ${students[2].number}\nSection : ${students[2].section}\nYears : ${students[2].years}
    \nHobbies : ${students[2].hobbies[0]}, ${students[2].hobbies[1]}, ${students[2].hobbies[2]}.\n\n`);
} else {
  alert(`${isSearch} is Invalid Student Number.`);
};

// STUDENT 01
console.log(`LIST OF STUDENTS\t(BSCPE)\t(SECTION A)\t(2ND YEAR)\t(ADVISER : MR KENTO TAKEHIKO)\n\nStudent No : ${students[0].studNo}\nName : ${students[0].firstName} ${students[0].lastName}\nAge : ${students[0].age}
  \nSex : ${students[0].sex}\nBirthdate : ${students[0].birthMonth}, ${students[0].birthDay} ${students[0].birthYear}\nAddress : ${students[0].address}
  \nCellphone No : ${students[0].number}\nCourse : ${students[0].number}\nSection : ${students[0].section}\nYears : ${students[0].years}
  \nHobbies : ${students[0].hobbies[0]}, ${students[0].hobbies[1]}, ${students[0].hobbies[2]}.\n\n`);

// STUDENT 02
console.log(`\nStudent No : ${students[1].studNo}\nName : ${students[1].firstName} ${students[1].lastName}\nAge : ${students[1].age}
  \nSex : ${students[1].sex}\nBirthdate : ${students[1].birthMonth}, ${students[1].birthDay} ${students[1].birthYear}\nAddress : ${students[1].address}
  \nCellphone No : ${students[1].number}\nCourse : ${students[1].number}\nSection : ${students[1].section}\nYears : ${students[1].years}
  \nHobbies : ${students[1].hobbies[0]}, ${students[1].hobbies[1]}, ${students[1].hobbies[2]}.\n\n`);

// STUDENT 03
console.log(`\nStudent No : ${students[2].studNo}\nName : ${students[2].firstName} ${students[2].lastName}\nAge : ${students[2].age}
  \nSex : ${students[2].sex}\nBirthdate : ${students[2].birthMonth}, ${students[2].birthDay} ${students[2].birthYear}\nAddress : ${students[2].address}
  \nCellphone No : ${students[2].number}\nCourse : ${students[2].number}\nSection : ${students[2].section}\nYears : ${students[2].years}
  \nHobbies : ${students[2].hobbies[0]}, ${students[2].hobbies[1]}, ${students[2].hobbies[2]}.\n\n`);

// Mentor Solution
let people = [
  {
    firstName:"Seiko",
    lastName:"Hanaru",
    age:20
  },
  {
    firstName:"Toru",
    lastName:"Shikasama",
    age:21
  },
  {
    firstName:"Kenta",
    lastName:"Aoita",
    age:23
  },
  {
    firstName:"Rina",
    lastName:"Dokaru",
    age:24
  }
];

// iterate an array using for loop
for(let i = 0; i < people.length; i++) {
  console.log(`First Name : ${people[i].firstName}`);
  console.log(`Last Name  : ${people[i].lastName}`);
  console.log(`Age        : ${people[i].age}`);
  console.log(""); // New line empty space
};


