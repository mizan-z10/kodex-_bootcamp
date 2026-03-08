
//  problem 11.Create a variable using let and print it.

let naya = 'save the js dsa'
console.log(naya);

// problem 12. Declare a constant PI = 3.14 and print it.

const pi = 3.14;
console.log("the value of pi is ",pi);

// problem 13. Create a variable, update it, and print again.

let a = "create";
console.log(a);
a = "changed";
console.log(a);

// problem 14. Print typeof null.
let nahi = null;
console.log("type of null is ", typeof nahi);

// problem 15. Store "25" in a variable and print its type.

let store = "25";
console.log("type of  25 is ", typeof store,  " because its written in string format");


// problem 16. Create a boolean and print its type.

let me_boolean = false;
console.log("type of boolean is ", typeof me_boolean);

// problem 17. Create a string, number, and boolean. Print all together.

let str = "topper";
let num = 1;
let bool = true;
console.log("string is ", str , "number is ", num , "boolean is ", bool);

// problem 18. Declare a variable without value and print its type.

let c
console.log("the type of variable withuot value " ,typeof c);

// problem 19. Create a variable with undefined and print its type..

let r = undefined
console.log("Create a variable with undefined and print its type " ,typeof r);

// problem 20. Create an array using const.- Print it- Try reassigning (observe error)- Push a new value and print updated arra

const arr = [1, 2, 3];
console.log("the array is ", arr); 
// arr = [4, 5, 6]; // This will throw an error because we cannot reassign a constant variable.
arr.push(4); // We can still modify the contents of the array.
console.log("the updated array is ", arr);
