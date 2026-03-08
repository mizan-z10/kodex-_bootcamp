// 1. What is an Array

// Array is a collection of multiple values stored in one variable.

let arr = [10, 20, 30, 40, 50];
console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);

// 2. Array can store multiple data types

let arr2 = [10, "Hello", true, null, undefined, { name: "John" }, [1, 2, 3]];
console.log(arr2);

// 3. Array is a reference type

let arr3 = [10, 20, 30];
let arr4 = arr3;
console.log(arr3);
console.log(arr4);
arr3.push(40);
console.log(arr3);
console.log(arr4);

// 4. Array is a object in JavaScript

console.log(typeof arr);
console.log(arr instanceof Array);

// 5. Array has a length property

console.log(arr.length);
console.log(arr2.length);

// 6. Array has various methods to manipulate the data

// push() - adds an element to the end of the array
arr.push(60);
console.log(arr);

// pop() - removes the last element from the array
arr.pop();
console.log(arr);

// shift() - removes the first element from the array
arr.shift();
console.log(arr);

// unshift() - adds an element to the beginning of the array
arr.unshift(0);
console.log(arr);

// indexOf() - returns the index of the first occurrence of an element in the array
console.log(arr.indexOf(20));

// lastIndexOf() - returns the index of the last occurrence of an element in the array
console.log(arr.lastIndexOf(30));       

// includes() - checks if an element is present in the array
console.log(arr.includes(20));
console.log(arr.includes(100));

// Array has various methods to manipulate the data

let arr5 = [10, 20, 30, 40, 50];

console.log("Original array:", arr5);



/*
---------------------------------------------------
splice() - add, remove, or replace elements
---------------------------------------------------

• Mutable method (changes original array)
• Most powerful array method

Syntax:
array.splice(start, deleteCount, newElement)
*/


// Remove element
arr.splice(1, 2);

console.log("After removing:", arr);
// Output: [10, 40, 50]



// Add element
arr.splice(1, 0, 99);

console.log("After adding:", arr);
// Output: [10, 99, 40, 50]



// Replace element
arr.splice(2, 1, 500);

console.log("After replacing:", arr);
// Output: [10, 99, 500, 50]



/*
---------------------------------------------------
reverse() - reverses the array
---------------------------------------------------

• Mutable method
• Changes original array
*/


arr.reverse();

console.log("After reverse:", arr);
// Output: [50, 500, 99, 10]



/*
---------------------------------------------------
concat() - joins two or more arrays
---------------------------------------------------

• Immutable method (does NOT change original)
• Returns new array
*/


let arr1 = [1, 2, 3];
let ar3 = [4, 5, 6];

let result = arr1.concat(ar3);

console.log("New array:", result);
// Output: [1,2,3,4,5,6]

console.log("Original arr1:", arr1);
// unchanged



/*
---------------------------------------------------
concat multiple arrays
---------------------------------------------------
*/

let a = [10, 20];
let b = [30, 40];
let c = [50, 60];

let finalArray = a.concat(b, c);

console.log("Final array:", finalArray);
// Output: [10,20,30,40,50,60]



/*
---------------------------------------------------
Real developer example
---------------------------------------------------
*/

let frontendUsers = ["Ali", "Sara"];
let backendUsers = ["Ahmed", "John"];

let allUsers = frontendUsers.concat(backendUsers);

console.log(allUsers);

// reverse order display
allUsers.reverse();

console.log(allUsers);

// remove one user
allUsers.splice(1,1);

console.log(allUsers);



// 9. sort() - sorts the elements of an array in place and returns the sorted array

let arr6 = [40, 100, 1, 5, 25, 10];
arr6.sort();
console.log(arr6);

// Output: [1, 10, 100, 25, 40, 5] - not sorted correctly because sort() converts elements to strings and compares their sequences of UTF-16 code units values.

// To sort numbers correctly, we need to provide a compare function
arr6.sort((a, b) => a - b);
console.log(arr6);
// Output: [1, 5, 10, 25, 40, 100] - sorted correctly in ascending order

// To sort in descending order, we need to provide a compare function   
arr6.sort((a, b) => b - a);
console.log(arr6);
// Output: [100, 40, 25, 10, 5, 1] - sorted correctly in descending order

// forEach() - executes a provided function once for each array element

let arr7 = [1, 2, 3, 4, 5];
arr7.forEach((element) => {
    console.log(element);
});

// Output:
// 1
// 2
// 3
// 4
// 5

// map() - creates a new array populated with the results of calling a provided function on every element in the calling array

let arr8 = [1, 2, 3, 4, 5];
let squaredArr = arr8.map((element) => element * element);
console.log(squaredArr);
// Output: [1, 4, 9, 16, 25]    

// another example of map() - convert array of strings to uppercase
let arr9 = ["apple", "banana", "cherry"];
let upperCaseArr = arr9.map((element) => element.toUpperCase());
console.log(upperCaseArr);
// Output: ["APPLE", "BANANA", "CHERRY"]    


// filter() - creates a new array with all elements that pass the test implemented by the provided function

let arr10 = [1, 2, 3, 4, 5];
let evenArr = arr10.filter((element) => element % 2 === 0);
console.log(evenArr);
// Output: [2, 4] - only even numbers are included in the new array



// find - returns the value of the first element in the array that satisfies the provided testing function

let arr11 = [1, 2, 3, 4, 5];
let firstEven = arr11.find((element) => element % 2 === 0);
console.log(firstEven);
// Output: 2 - the first even number is 2

// some - returns true if at least one element in the array satisfies the provided testing function
let arr12 = [1, 2, 3, 4, 5];
let hasEven = arr12.some((element) => element % 2 === 0);
console.log(hasEven);
// Output: true - there are even numbers in the array   


