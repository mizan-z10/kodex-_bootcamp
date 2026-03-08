/**************************************************
 * 1️⃣ console.log() — Developer Output (DEBUGGING)
 **************************************************/

// Prints text to console
console.log("Hello World");

// Prints number
console.log(10);

// Prints boolean
console.log(true);

// Prints array
console.log([1, 2, 3]);

// Prints object
console.log({ name: "Mizan", role: "Frontend Learner" });

// Debug example
let x = 5;
console.log("Initial x:", x);

x = x + 10;
console.log("Updated x:", x);



/**************************************************
 * 2️⃣ alert() — User Message (Popup)
 **************************************************/

// Shows a popup message to the user
// Blocks screen until OK is clicked
alert("Welcome to my website");

// ⚠️ Used only for learning / simple warnings
// ❌ Not used in real production apps



/**************************************************
 * 3️⃣ prompt() — User Input (ALWAYS STRING)
 **************************************************/

// Takes input from user
let name = prompt("Enter your name");

// Prints input in console
console.log("User name is:", name);

// IMPORTANT RULE:
// prompt() ALWAYS returns a STRING



/**************************************************
 * 4️⃣ prompt() MISTAKE EXAMPLE (STRING PROBLEM)
 **************************************************/

let age = prompt("Enter your age");

// This will NOT add numbers, it joins strings
console.log("Age + 1 =", age + 1);

// If input = 10
// Output = 101 (WRONG for math)



/**************************************************
 * 5️⃣ CORRECT WAY — Convert STRING to NUMBER
 **************************************************/

let realAge = Number(prompt("Enter your age again"));

// Now this is real math
console.log("Next year age =", realAge + 1);



/**************************************************
 * 6️⃣ confirm() — Yes / No (true / false)
 **************************************************/

let answer = confirm("Are you sure you want to continue?");

// confirm() returns BOOLEAN
console.log("User answer:", answer);

if (answer === true) {
  console.log("User clicked OK");
} else {
  console.log("User clicked Cancel");
}



/**************************************************
 * 7️⃣ FINAL MINI PROGRAM (ALL TOGETHER)
 **************************************************/

let userName = prompt("Enter your name");
let userAge = Number(prompt("Enter your age"));

console.log("Name:", userName);
console.log("Age:", userAge);

if (userAge >= 18) {
  alert("You are eligible");
} else {
  alert("You are not eligible");
}
