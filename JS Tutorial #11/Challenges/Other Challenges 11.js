// OTHER CHALLENGES
// Search a specific item on Sari-sari store using JSON of array and statements

// JSON of array items
let items = [
  { // Item 1
    itemID:1001,
    itemName:"Lucky Me! Instant Pancit Canton (Original Flavor)",
    price:18,
    weight:80,
    type:"Instant noodles",
    packaging:"Plastic pack"
  },
  { // Item 2
    itemID:1002,
    itemName:"Coca-Cola (Sakto)",
    price:16,
    weight:250,
    type:"Soft drink",
    packaging:"Glass bottle"
  },
  { // Item 3
    itemID:1003,
    itemName:"Bear Brand Fortified Powdered Milk (Sachet)",
    price:20,
    weight:33,
    type:"Powdered milk",
    packaging:"Sachet"
  },
  { // Item 4
    itemID:1004,
    itemName:"Champion Detergent Powder (Sachet)",
    price:10,
    weight:65,
    type:"Detergent powder",
    packaging:"Sachet"
  },
  { // Item 5
    itemID:1005,
    itemName:"Surf Fabric Conditioner (Sachet - Sun Bloom)",
    price:7,
    weight:25,
    type:"Fabric conditioner",
    packaging:"Sachet"
  },
  { // Item 6
    itemID:1006,
    itemName:"Kopiko Brown Coffee (Sachet)",
    price:9,
    weight:30,
    type:"Instant coffee mix",
    packaging:"Sachet"
  },
  { // Item 7
    itemID:1007,
    itemName:"Argentina Corned Beef (Small Can)",
    price:38,
    weight:150,
    type:"De-lata (canned goods)",
    packaging:"Metal can"
  },
  { // Item 8
    itemID:1008,
    itemName:"Milo Energy Drink",
    price:12,
    weight:22,
    type:"Chocolate malt drink",
    packaging:"Sachet"
  },
  { // Item 9
    itemID:1009,
    itemName:"Chippy BBQ Flavor (Small Pack)",
    price:16,
    weight:60,
    type:"Snack (chips)",
    packaging:"Plastic pack"
  },
  { // Item 10
    itemID:1100,
    itemName:"Cloud 9 Classic Chocolate Bar",
    price:12,
    weight:28,
    type:"Chocolate bar",
    packaging:"Foil wrapper"
  },
  { // Item 11
    itemID:1200,
    itemName:"Piattos Cheese (Small Pack)",
    price:18,
    weight:40,
    type:"Snack (chips)",
    packaging:"Plastic pack"
  },
  { // Item 12
    itemID:1300,
    itemName:"Nescafé 3-in-1 Original",
    price:8,
    weight:20,
    type:"Instant coffee mix",
    packaging:"Sachet"
  },
  { // Item 13
    itemID:1400,
    itemName:"Payless Instant Mami (Chicken Flavor)",
    price:10,
    weight:55,
    type:"Instant noodles",
    packaging:"Plastic pack"
  },
  { // Item 14
    itemID:1500,
    itemName:"LaLa Milky Chocolate (Flat Bar)",
    price:6,
    weight:15,
    type:"Chocolate bar",
    packaging:"Foil wrapper"
  },
  { // Item 15
    itemID:1600,
    itemName:"Great Taste White Coffee",
    price:7,
    weight:30,
    type:"Instant coffee mix",
    packaging:"Sachet"
  }
];

// Options
console.log(`SARI-SARI STORE\n[1] : ADD ITEM\n[2] : DELETE ITEM\n[3] : SEARCH ITEM\n[4] : VIEW ALL ITEM\n[5] : EXIT`)
let option = prompt("Enter option you want to perform : ")

// OPTION 1 : ADD ITEM
if(parseInt(option) === 1) {
  let enterOption = prompt("Enter option you want to perform\n[1] : ADD AN ITEM TO THE LAST\n[2] : ADD AN ITEM TO THE FRONT")
  if(parseInt(enterOption) === 1) {
    items.push({
    itemID:prompt("Enter new Item ID"),
    itemName:prompt("Enter new Item Name"),
    price:prompt("Enter new Item Price"),
    weight:prompt("Enter new Item Weight"),
    type:prompt("Enter new Item Type"),
    packaging:prompt("Enter new Item Packaging")
  });
  } else if(parseInt(enterOption) === 2) {
    items.unshift({
      itemID:prompt("Enter new Item ID"),
      itemName:prompt("Enter new Item Name"),
      price:prompt("Enter new Item Price"),
      weight:prompt("Enter new Item Weight"),
      type:prompt("Enter new Item Type"),
      packaging:prompt("Enter new Item Packaging")
    });
  } else {
    console.log("Invalid option. Try again");
}
// OPTION 2 : REMOVE ITEM 
} else if(parseInt(option) === 2) {
  let isSearch = prompt("Enter item ID to remove : ");
  let indexToRemove = -1;

// Find a index to remove
for (let i = 0; i < items.length; i++) {
  if (parseInt(isSearch) === items[i].itemID) {
    indexToRemove = i;
    break;
  }
}
if (indexToRemove !== -1) {
  console.log("Removing item...");
  console.log(`Item ID   : ${items[indexToRemove].itemID}`);
  console.log(`Item Name : ${items[indexToRemove].itemName}`);
  console.log(`Price     : ${items[indexToRemove].price}`);
  console.log(`Weight    : ${items[indexToRemove].weight}`);
  console.log(`Type      : ${items[indexToRemove].type}`);
  console.log(`Packaging : ${items[indexToRemove].packaging}\n`);

  // Remove item using splice
  items.splice(indexToRemove, 1);
  console.log("Item removed successfully!");
} else {
  console.log("Item not found.");
}

// Show the updated array
console.log("Updated items list:", items);
// OPTION 3 : SEARCH ITEM INFO
} else if(parseInt(option) === 3) {
  let isSearch = prompt("Enter Item ID you want to know the info : ");
  for(let i = 0; i < items.length; i++) {
  if(parseInt(isSearch) === items[i].itemID) {
    hasFound = true;
    console.log(`SARI-SARI STORE ITEM : ${i + 1}`);
    console.log(`Item ID   : ${items[i].itemID}`);
    console.log(`Item Name : ${items[i].itemName}`);
    console.log(`Price     : ${items[i].price}`);
    console.log(`Weight    : ${items[i].weight}`);
    console.log(`Type      : ${items[i].type}`);
    console.log(`Packaging : ${items[i].packaging}\n`);
    break;
  }
};
if (!hasFound) {
  console.log("Item not found.");
}
// OPTION 4 : SHOW ALL ITEM INFO
} else if(parseInt(option) === 4) {
    for(let i = 0; i < items.length; i++) {
      console.log(`SARI-SARI STORE ITEM : ${i + 1}`);
      console.log(`Item ID   : ${items[i].itemID}`);
      console.log(`Item Name : ${items[i].itemName}`);
      console.log(`Price     : ${items[i].price}`);
      console.log(`Weight    : ${items[i].weight}`);
      console.log(`Type      : ${items[i].type}`);
      console.log(`Packaging : ${items[i].packaging}\n\n`);
    }
// OPTION 5 : EXIT
} else if(parseInt(option) === 5) {
  console.log("SYSTEM TERMINATED...");
  window.close();
} else {
  console.log("Invalid option. Try again...");
};



