// JavaScript Practice Problems

// problem 41. Sum from 1 to 100.

let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log("The sum from 1 to 100 is: " + sum);

// problem 42. Print table of 5.

let number = 5;
console.log("Table of " + number + ":");   
for (let i = 1; i <= 10; i++) {
    console.log(number + " x " + i + " = " + (number * i));
}


// problem 43. Count even numbers between 1–50.

let count = 0;
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        count++;
    }
}
console.log("There are " + count + " even numbers between 1 and 50.");


// problem 44. Print 10 to 1.

console.log("Numbers from 10 to 1:");   
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

// problem 45. Sum of even numbers from 1–20.

let sumEven = 0;
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        sumEven += i;
    }
}
console.log("Sum of even numbers from 1 to 20 is: " + sumEven);

// problem 46. Print squares from 1–10.

for (let i = 1; i <= 10; i++) {
    console.log(i + " squared is " + (i * i));
}

// problem 47. Count characters in "JavaScript".

let str = "JavaScript";
let charCount = str.length;
console.log("The number of characters in '" + str + "' is: " + charCount);  

// problem 48. Find largest in [3,7,2,9,5].

let arr = [3, 7, 2, 9, 5];
let largest = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
        largest = arr[i];
    }
}
console.log("The largest number in the array is: " + largest);

// problem 49. Print pattern:

// *
// **
// ***
// ****
// *****

for (let i = 1; i <= 5; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
        pattern += "*";
    }       console.log(pattern);
}       

// problem 50. Find sum of array: [10, 20, 30, 40]
let numbers = [10, 20, 30, 40];
let totalSum = 0;       
for (let i = 0; i < numbers.length; i++) {
    totalSum += numbers[i];
}
console.log("The sum of the array is: " + totalSum);

// End of problems.😊