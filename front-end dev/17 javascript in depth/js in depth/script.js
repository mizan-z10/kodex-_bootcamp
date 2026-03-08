// Function = Reusable block of code
// Real life: Machine ko ek kaam sikha diya → baar-baar use kar सकते हैं

// 1️⃣ Function Declaration (Normal Function)
function a1(a) {   // a = parameter
    console.log('hello 1', a);
    return 10;     // return value deta hai
}

// Function call
console.log(a1('Sarthak')); 
// Output:
// hello 1 Sarthak
// 10


function greet(name) {   // name = parameter
    console.log("Hello", name);
}

greet("Mizan");  // "Mizan" = argument


// 2️⃣ Function Expression
// Variable me function store kiya
var a2 = function (b) {
    console.log('hello 2', b);
    return 20;
};

console.log(a2("Danish"));
// 👉 Difference:
// Function declaration memory me pehle load hoti hai.
// Function expression variable jaisa behave karti hai.


// Arrow Function (ES6)
var a3 = (c) => {
    console.log('hello 3', c);
    return 30;
};

console.log(a3("Bixi"));

// Short form:
var a4 = (d) => console.log('hello 4', d);

a4("Swaraj");


// Arrow function mostly modern JS me use hota hai.


// 2. RETURN STATEMENT
function add(x, y) {
    return x + y;   // value wapas bhejta hai
}

let result = add(5, 3);
console.log(result); // 8


// ⚠ Important:
// return ke baad code execute nahi hota.
// Agar return nahi diya → function undefined return karega.

/*=====================================================
  6️⃣ HOISTING
=====================================================*/

// Variable Hoisting Example
console.log(x);  // undefined (error nahi aayega)
var x = 10;


// Function Hoisting Example
hello();   // chalega

function hello() {
    console.log("Function hoisted successfully");
}


// Function Expression hoist nahi hota
// test();  // ❌ Uncomment karoge to error aayega

var test = function () {
    console.log("This will NOT hoist completely");
};



/*=====================================================
  7️⃣ ARRAYS
=====================================================*/

// Array me kisi bhi datatype ka data store kar sakte hain
var arr = [10, "Mizan", true, null];

console.log("First element:", arr[0]);   // index 0
console.log("Array length:", arr.length);  // total elements



/*=====================================================
  8️⃣ ARRAY METHODS
=====================================================*/

// push() → Last me element add karega
arr.push("New Data");
console.log("After push:", arr);


// pop() → Last element remove karega
arr.pop();
console.log("After pop:", arr);


// unshift() → Start me element add karega
arr.unshift("Start Data");
console.log("After unshift:", arr);


// shift() → Start ka element remove karega
arr.shift();
console.log("After shift:", arr);


// splice() → Kisi bhi index par add/delete
// Syntax: array.splice(startIndex, deleteCount, newItem)

var numbers = [10, 20, 30, 40];

// index 1 se start, 1 element delete, 25 insert
numbers.splice(1, 1, 25);

console.log("After splice:", numbers);
// [10, 25, 30, 40]



/*=====================================================
  9️⃣ REAL LIFE MINI EXAMPLE
=====================================================*/

// School student list manage karna

var students = ["Ali", "Ravi"];

// New student add
students.push("Mizan");

// First student remove
students.shift();

// Galat entry replace
students.splice(0, 1, "Corrected Name");

console.log("Final student list:", students);