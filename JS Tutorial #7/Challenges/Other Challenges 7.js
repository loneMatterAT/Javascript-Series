// TASK 1: LOGIN SYSTEM VALIDATOR
{/*
  📌 Conditions:
      If user enter an empty username and password: "Please enter your username and password."
      If user enter an correct username and password: "Login successful! Welcome, admin."
      If user enter an incorrect password but username is correct: "Incorrect password. Try again."
      If user enter an incorrect username but password is correct: "Username not recognized."
      If user enter an incorrect username and password: "Username and paaword are incorrect."
*/}
// Variables
let userName = "admin";
let password = "1234";

// Conditions: Long version
if(userName === "" || password === "") { // If user input both empty username and password
  alert(`TASK 1: LOGIN SYSTEM VALIDATOR\nPlease enter your username and password.`);
} else if(userName === "admin" && password === "1234") {
  alert(`TASK 1: LOGIN SYSTEM VALIDATOR\nLogin successful! Welcome, user.`);
} else if(userName === "admin" && password !== "1234") {
  alert(`TASK 1: LOGIN SYSTEM VALIDATOR\nIncorrect password. Try again.`);
} else if(userName !== "admin" && password === "1234") {
  alert(`TASK 1: LOGIN SYSTEM VALIDATOR\nUsername not recognized.`);
} else {
  alert(`TASK 1: LOGIN SYSTEM VALIDATOR\nIncorrect username and password.`);
}

// Variables
let user_id = 1001;
let user_name = "user";
let user_password = "12345";

// Conditions: Short version
if(user_id === "" || user_name === "" || user_password === "") alert(`TASK 1: LOGIN SYSTEM VALIDATOR\nPlease enter your user id, username and password.`);
else if(user_id === 1001 && user_name === "user" && user_password === "12345") alert(`TASK 1: LOGIN SYSTEM VALIDATOR\nLogin successful! Welcome, user.`);
else if(user_id !== 1001 && user_name === "user" && user_password === "12345") alert(`TASK 1: LOGIN SYSTEM VALIDATOR\nIncorrect User id. Try again.`);
else if(user_id === 1001 && user_name !== "user" && user_password === "12345") alert(`TASK 1: LOGIN SYSTEM VALIDATOR\nUsername not recognized.`);
else if(user_id === 1001 && user_name === "user" && user_password !== "12345") alert(`TASK 1: LOGIN SYSTEM VALIDATOR\nIncorrect password. Try again.`);
else alert(`TASK 1: LOGIN SYSTEM VALIDATOR\nIncorrect username and password.`);


// TASK 2: WEATHER CLOTHING DECIDER
{/*
  📌 Conditions:
      If the temperature is lower than 10°C and it's raining: "Wear a heavy jacket and carry an umbrella."
      If the temperature is lower than 10°C and it's not raining: "Wear a heavy jacket."
      If the temperature is exactly 10°C to 25°C and it's raining: "Wear a light jacket and carry an umbrella."
      If the temperature is exactly 10°C to 25°C and it's not raining: "Wear a light jacket."
      If the temperature is higher than 25°C and it's raining: "Wear a t-shirt and carry an umbrella."
      If the temperature is higher than 25°C and it's not raining: "Wear a t-shirt."  
*/}
// Variables
let temperature = 100;
let itsRaining = true;

// Conditions: One liner of code
if(temperature <= 9 && itsRaining) alert(`TASK 2: WEATHER CLOTHING DECIDER\nTemperature: ${temperature}\u00B0 C\nTip: Wear a heavy jacket and carry an umbrella.`);
else if(temperature <= 9 && !itsRaining) alert(`TASK 2: WEATHER CLOTHING DECIDER\nTemperature: ${temperature}\u00B0 C\nTip: Wear a heavy jacket.`);
else if(temperature <= 10 && itsRaining) alert(`TASK 2: WEATHER CLOTHING DECIDER\nTemperature: ${temperature}\u00B0 C\nTip: Wear a light jacket and carry an umbrella.`);
else if(temperature <= 10 && !itsRaining) alert(`TASK 2: WEATHER CLOTHING DECIDER\nTemperature: ${temperature}\u00B0 C\nTip: Wear a light jacket.`);
else if(temperature <= 25 && itsRaining) alert(`TASK 2: WEATHER CLOTHING DECIDER\nTemperature: ${temperature}\u00B0 C\nTip: Wear a t-shirt and carry an umbrella.`);
else if(temperature <= 25 && !itsRaining) alert(`TASK 2: WEATHER CLOTHING DECIDER\nTemperature: ${temperature}\u00B0 C\nTip: Wear a t-shirt.`);
else if (temperature <= 49 && !itsRaining) alert(`TASK 2: WEATHER CLOTHING DECIDER\nTemperature: ${temperature}\u00B0 C\nTip: Wear a Sando or Cotton t-shirt.`);
else alert(`TASK 2: WEATHER CLOTHING DECIDER\nTemperature: ${temperature}\u00B0 C\nTip: Wear a High-end cooling suit and vest.`);


// TASK 3: SHOPPING DISCOUNT CALCULATOR
{/*
  📌 Discount Criteria:
    - Kung ang total purchase ay higit sa 500 at ang customer ay VIP:
    "You get a 20% discount."

    - Kung ang total purchase ay higit sa 500 at ang customer ay hindi VIP:
    "You get a 10% discount."

    - Kung ang total purchase ay 500 o mas mababa at ang customer ay VIP:
    "You get a 5% discount."

    - Kung ang total purchase ay 500 o mas mababa at ang customer ay hindi VIP:
    "No discount available."

📌 Sample Test Cases & Expected Output:
Input Total 	Purchase Is Customer VIP? (yes/no)	    Expected Output
   600		            yes				                      "You get a 20% discount."
   600		            no				                      "You get a 10% discount."
   400		           yes				                      "You get a 5% discount."
   400		            no				                      "No discount available."
*/}