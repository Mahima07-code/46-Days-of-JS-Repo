// 1. Store user info using primitive types
let userName = "Mahima";             // string
let age = 20;                     // number
let isSmart = true;             // boolean
let favoriteColor;                // undefined (not assigned yet)
let petName = null;               // no pet currently



// 2. Create a function to display info card
function showInfoCard() {
  console.log("----- Personal Info Card -----");
  console.log(`Name: ${userName} (Type: ${typeof userName})`);
  console.log(`Age: ${age} (Type: ${typeof age})`);
  console.log(`Student: ${isSmart} (Type: ${typeof isSmart})`);
  console.log(`Favorite Color: ${favoriteColor} (Type: ${typeof favoriteColor})`);
  console.log(`Pet: ${petName} (Type: ${typeof petName})`);
  console.log("-------------------------------");
}

// 3. Call the function to display info
showInfoCard();
