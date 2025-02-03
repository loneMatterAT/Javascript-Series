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
Input Total(Purchase) Is Customer VIP? (yes/no)	      Expected Output
   600		                     yes				            "You get a 20% discount."
   600		                     no				              "You get a 10% discount."
   400		                     yes				            "You get a 5% discount."
   400		                     no				              "No discount available."
*/}
// Department Store
let customers = [
  "Natsumi Saru", "Rui Ichigio", "Naomi Katagaki",
  "Toru Karumatsu", "Shira Hayamoto", "Nagatsuka Rei",
  "Kuyagai Jin", "Jiro Hayato", "Taki Yuda",
];
  
let brands = [
  "Penshoppe", "Rolex", "Bench",
  "H&M", "Apple Mac", "Faber & Castell",
  "Samsung A16", "Kleenex", "Marshall",
];
  
let products = [
  "Shoulder Bag", "Watch", "T-shirt",
  "Socks", "Earpods", "File case",
  "Smartphone", "Tissue", "Headphone",
];

let sizes = [
  "Medium", "Medium", "Large",
  "Small", "Small", "Medium",
  "Medium", "Extra Small", "Medium",
];

let colors = [
  "Brown", "Silver Black", "Light Blue",
  "Black", "White", "Pink",
  "Gray Black", "White", "Silver",
];

let dateBuys = [
  "April 20, 2025", "April 25, 2025", "January, 31, 2025",
  "March 28, 2024", "December, 26, 2024", "February 7, 2023",
  "September 10, 2025", "May 4, 2022", "November 23, 2025",
];

let dateTimes = [
  "1:30:05 PM", "7:14:55 PM", "8:36:01 AM",
  "4:03:17 PM", "9:49:23 PM", "3:00:52 PM",
  "10:27:59 AM", "9:31:29 AM", "6:25:33 PM",
];

let cashierNames = [
  "Ms.Kaguya Sakamoto", "Mr.Jeisu Yamada", "Ms.Kaguya Sakamoto",
  "Ms.Deri Nana", "Mr.Haruna Jitsu", "Mr.Shin Susuke", "Mr.Jeisu Yamada",
  "Mr.Haruna Jitsu", "Mr.Shin Susuke", "Ms.Deri Nana",
];

let totalPurchase = [590.00, 3000.00, 345.00, 150.00, 2230.00, 80.00, 14350.00, 20.00, 7300.00,];

let isVip = [true, false, false, true, false, false, true, false, true,]; // If customer is Vip or not

// Adding customer to last index using array length and push (Short liner code)
customers.push("Momo Satsuki"); brands[brands.length] = "Garnier";products.push("Bright Anti Acne"); sizes.push("Large");
colors[colors.length] = "White"; dateBuys[dateBuys.length] = "June 21, 2024"; dateTimes.push("7:30:27 PM");
cashierNames.push("Ms.Kaguya Sakamoto"); totalPurchase[totalPurchase.length] = 345.00;
isVip[isVip.length] = true;

// Adding customer to first index using unshift (Short liner code)
customers.unshift("Yumeko Sakurako"); brands.unshift("Victoria's Secret"); products.unshift("Perfume Barcelona");
sizes.unshift("Medium"); colors.unshift("Red and Light Brown"); dateBuys.unshift("May 11, 2025");
dateTimes.unshift("8:10:32 AM"); cashierNames.unshift("Lisa Hirano"); totalPurchase.unshift(23550.00); isVip.unshift(true);

// Convert boolean true or false into english language, Yes and No (Short liner code): Optional
// isVip[1] = "Yes";
// isVip[2] = "Yes";
// isVip[3] = "No";
// isVip[4] = "Yes";
// isVip[5] = "No";
// isVip[6] = "No";
// isVip[7] = "Yes";
// isVip[8] = "Yes";
// isVip[9] = "Yes";
// isVip[10] = "Yes";

let id = 3; // Customer ID

// Conditions: Nested Statements
if(totalPurchase[id] > 500)   // Group of total purchase is 500.00 up
  if(isVip[id] === true) alert(`CUSTOMER INFORMATION\nCustomer Name : ${customers[id]}\nBrand : ${brands[id]}\nProduct : ${products[id]}\nSize : ${sizes[id]}
      \nColor: ${colors[id]}\nDate : ${dateBuys[id]}\nTime : ${dateTimes[id]}\nCashier Name : ${cashierNames[id]}
      \nCustomer ID : ${id}\nTotal Amount : \u20B1${totalPurchase[id]}.00\nVip : ${isVip[id]}
      \nMessage : You get a 20% discount.\nFinal Price : \u20B1${totalPurchase[id] - (totalPurchase[id] * 0.2)}.00
      \nChange : \u20B1${totalPurchase[id] - (totalPurchase[id] * 0.2) - totalPurchase[id]}.00`
     );
  else alert(
     `CUSTOMER INFORMATION\nCustomer Name : ${customers[id]}\nBrand : ${brands[id]}\nProduct : ${products[id]}\nSize : ${sizes[id]}
      \nColor: ${colors[id]}\nDate : ${dateBuys[id]}\nTime : ${dateTimes[id]}\nCashier Name : ${cashierNames[id]}
      \nCustomer ID : ${id}\nTotal Amount : \u20B1${totalPurchase[id]}.00\nVip : ${isVip[id]}
      \nMessage : You get a 10% discount.\nFinal Price : \u20B1${totalPurchase[id] - (totalPurchase[id] * 0.1)}.00
      \nChange : \u20B1${totalPurchase[id] - (totalPurchase[id] * 0.1) - totalPurchase[id]}.00`
     );
else if(totalPurchase[id] <= 500) // Group of total purchase is 500.00 low
  if(isVip[id] === true) alert(`CUSTOMER INFORMATION\nCustomer Name : ${customers[id]}\nBrand : ${brands[id]}\nProduct : ${products[id]}\nSize : ${sizes[id]}
      \nColor: ${colors[id]}\nDate : ${dateBuys[id]}\nTime : ${dateTimes[id]}\nCashier Name : ${cashierNames[id]}
      \nCustomer ID : ${id}\nTotal Amount : \u20B1${totalPurchase[id]}.00\nVip : ${isVip[id]}
      \nMessage : You get a 5% discount.\nFinal Price : \u20B1${totalPurchase[id] - (totalPurchase[id] * 0.05)}.00
      \nChange : \u20B1${totalPurchase[id] - (totalPurchase[id] * 0.05) - totalPurchase[id]}.00`
    );
  else alert(`CUSTOMER INFORMATION\nCustomer Name : ${customers[id]}\nBrand : ${brands[id]}\nProduct : ${products[id]}\nSize : ${sizes[id]}
      \nColor: ${colors[id]}\nDate : ${dateBuys[id]}\nTime : ${dateTimes[id]}\nCashier Name : ${cashierNames[id]}
      \nCustomer ID : ${id}\nTotal Amount : \u20B1${totalPurchase[id]}.00\nVip : ${isVip[id]}
      \nMessage : No discount available.\nFinal Price : \u20B1${totalPurchase[id]}.00
      \nChange : \u20B1${totalPurchase[id] - totalPurchase[id]}.00`
     );
else alert(`Index: ${totalPurchase[id]}\nInvalid Index. Try again`);
  

// Conditions: Nested Statements
// if(totalPurchase[id] > 500) { // Group of total purchase is 500.00 up
//   if(isVip[id]) {
//     alert(`CUSTOMER INFORMATION\nCustomer Name : ${customers[id]}\nBrand : ${brands[id]}\nProduct : ${products[id]}\nSize : ${sizes[id]}
//       \nColor: ${colors[id]}\nDate : ${dateBuys[id]}\nTime : ${dateTimes[id]}\nCashier Name : ${cashierNames[id]}
//       \nCustomer ID : ${id}\nTotal Amount : \u20B1${totalPurchase[id]}.00\nVip : ${isVip[id]}
//       \nMessage : You get a 20% discount.\nFinal Price : \u20B1${totalPurchase[id] - (totalPurchase[id] * 0.2)}.00
//       \nChange : \u20B1${totalPurchase[id] - (totalPurchase[id] * 0.2) - totalPurchase[id]}.00`
//      );
//   } else {
//      alert(
//      `CUSTOMER INFORMATION\nCustomer Name : ${customers[id]}\nBrand : ${brands[id]}\nProduct : ${products[id]}\nSize : ${sizes[id]}
//       \nColor: ${colors[id]}\nDate : ${dateBuys[id]}\nTime : ${dateTimes[id]}\nCashier Name : ${cashierNames[id]}
//       \nCustomer ID : ${id}\nTotal Amount : \u20B1${totalPurchase[id]}.00\nVip : ${isVip[id]}
//       \nMessage : You get a 10% discount.\nFinal Price : \u20B1${totalPurchase[id] - (totalPurchase[id] * 0.1)}.00
//       \nChange : \u20B1${totalPurchase[id] - (totalPurchase[id] * 0.1) - totalPurchase[id]}.00`
//      );
//   }
// } else if(totalPurchase[id] <= 500) { // Group of total purchase is 500.00 low  
//    if(isVip[id]) {
//     alert(`CUSTOMER INFORMATION\nCustomer Name : ${customers[id]}\nBrand : ${brands[id]}\nProduct : ${products[id]}\nSize : ${sizes[id]}
//       \nColor: ${colors[id]}\nDate : ${dateBuys[id]}\nTime : ${dateTimes[id]}\nCashier Name : ${cashierNames[id]}
//       \nCustomer ID : ${id}\nTotal Amount : \u20B1${totalPurchase[id]}.00\nVip : ${isVip[id]}
//       \nMessage : You get a 5% discount.\nFinal Price : \u20B1${totalPurchase[id] - (totalPurchase[id] * 0.05)}.00
//       \nChange : \u20B1${totalPurchase[id] - (totalPurchase[id] * 0.05) - totalPurchase[id]}.00`
//     );
//   } else {
//     alert(`CUSTOMER INFORMATION\nCustomer Name : ${customers[id]}\nBrand : ${brands[id]}\nProduct : ${products[id]}\nSize : ${sizes[id]}
//       \nColor: ${colors[id]}\nDate : ${dateBuys[id]}\nTime : ${dateTimes[id]}\nCashier Name : ${cashierNames[id]}
//       \nCustomer ID : ${id}\nTotal Amount : \u20B1${totalPurchase[id]}.00\nVip : ${isVip[id]}
//       \nMessage : No discount available.\nFinal Price : \u20B1${totalPurchase[id]}.00
//       \nChange : \u20B1${totalPurchase}.00`
//      );
//   }
// } else {
//   alert(`Index: ${totalPurchase[id]}\nInvalid Index. Try again`);
// }



