// TUTORIAL CHALLENGE 8
{/*
  Create a program that outputs the equivalent day of a number variable.
  1 - Monday
  2 - Tuesday
  3 - Wednesday
  4 - Thursday
  5 - Friday
  6 - Saturday
  7 - Sunday
*/}

// Long version
let day = 1;

// Conditions
switch(day) {
  case 1:
    alert("Monday");
    break;
  case 2:
    alert("Tuesday");
    break;
  case 3:
    alert("Wednesday");
    break;
  case 4:
    alert("Thursday");
    break;
  case 5:
    alert("Friday");
    break;
  case 6:
    alert("Saturday");
    break;
  case 7:
    alert("Sunday");
    break;
  default:
    alert("Invalid day");
    break;
}

// Short version: One liner of code
switch(day) {
  case 1: alert("Monday"); break; case 2: alert("Tuesday"); break; case 3: alert("Wednesday"); break; case 4: alert("Thursday"); break;
  case 5: alert("Friday"); break; case 6: alert("Saturday"); break; case 7: alert("Sunday"); break; default: alert("Invalid day"); break;
}