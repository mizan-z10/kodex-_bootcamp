/****************************************************
 JAVASCRIPT EXECUTION CONTEXT + MEMORY + HOISTING
 var vs let vs const + TDZ + Scope
****************************************************/


/******************** 1️⃣ GLOBAL EXECUTION CONTEXT ********************/

/*
JS jab start hota hai tab Global Execution Context create hota hai.

Do phases hote hain:

PHASE 1: MEMORY CREATION PHASE
- Variables allocate hote hain
- var -> undefined
- let/const -> uninitialized (TDZ)
- functions -> full memory

PHASE 2: CODE EXECUTION PHASE
- Line by line execution
- Values assign hote hain
*/


/******************** 2️⃣ HOISTING WITH VAR ********************/

console.log(a); 
// OUTPUT: undefined
// Reason: var memory phase me undefined set hota hai

var a = 10;


/******************** 3️⃣ HOISTING WITH LET (TDZ) ********************/

// console.log(b);  
// ❌ ReferenceError
// Reason: b TDZ me hai (memory allocated but not initialized)

let b = 20;


/******************** 4️⃣ HOISTING WITH CONST ********************/

// console.log(c); 
// ❌ ReferenceError
// Same reason: TDZ

const c = 30;


/******************** 5️⃣ FUNCTION HOISTING ********************/

testFunction();
// ✅ Works because function declaration fully hoisted

function testFunction() {
    console.log("Function fully hoisted");
}


/******************** 6️⃣ VAR IS FUNCTION SCOPED ********************/

if (true) {
    var x = 100;
}
console.log(x);
// 100
// var block ke bahar bhi accessible hai


/******************** 7️⃣ LET & CONST ARE BLOCK SCOPED ********************/

if (true) {
    let y = 200;
    const z = 300;
}

// console.log(y); ❌ Error
// console.log(z); ❌ Error
// Block ke bahar access nahi kar sakte


/******************** 8️⃣ CONST WITH OBJECT ********************/

const obj = { name: "Mizan" };

// obj = { name: "Khan" }; ❌ Not allowed (reference change)

// But:
obj.name = "Khan"; 
console.log(obj);
// ✅ Allowed because reference same hai


/******************** 9️⃣ FUNCTION EXECUTION CONTEXT ********************/

var globalVar = 10;

function demo() {

    // MEMORY PHASE of demo():
    // localVar -> undefined
    // function ke andar ka a alag memory me

    console.log(globalVar); 
    // 10 (scope chain se milega)

    console.log(localVar);  
    // undefined (var hoisted)

    var localVar = 50;

    console.log(localVar);  
    // 50
}

demo();


/******************** 🔟 TRICKY INTERVIEW QUESTION ********************/

var p = 10;

function tricky() {

    // MEMORY PHASE:
    // p -> undefined (local p hoisted)

    console.log(p); 
    // undefined (NOT 10)

    var p = 20;
}

tricky();

/*
Why undefined?
Because function ke andar var p hoisted ho gaya.
Local p global p ko shadow kar raha hai.
*/


/******************** 11️⃣ TDZ EXAMPLE ********************/

{
    // console.log(tdzVar); ❌ TDZ error
    let tdzVar = 500;
}


/******************** SUMMARY ********************/

/*
✔ var → function scoped
✔ let/const → block scoped
✔ All are hoisted
✔ var initialized with undefined
✔ let/const stay in TDZ
✔ Function declaration fully hoisted
✔ Execution context has 2 phases:
   - Memory Creation
   - Code Execution
*/
