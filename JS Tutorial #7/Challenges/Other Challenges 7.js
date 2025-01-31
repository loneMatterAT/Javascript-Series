// TASK 1: LOGIN SYSTEM VALIDATOR
let userName = "admin";
let password = "1234";

// Conditions
if(userName === "" || password === "") { // If user input both empty username and password
  alert("Please enter your username and password.");
} else if(userName === "admin" && password === "1234") {
  alert("Login successful! Welcome, admin.");
} else if(userName === "admin" && password !== "1234") {
  alert("Incorrect password. Try again.");
} else if(userName !== "admin" && password === "1234") {
  alert("Username not recognized.");
} else {
  alert("Username and password are incorrect."); // If user input both wrong username and password
}