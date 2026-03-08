// problem 31. Store a number and check positive or negative.
let number = Number(prompt("Enter a number: "));
if (number > 0) {
    console.log("The number is positive.");
} else if (number < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}   

    // problem 32. Print Adult if age ≥18 else Minor

let age = Number(prompt("Enter your age: "));
if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}

    // problem 33. Check even or odd
let num = Number(prompt("Enter a number: "));
if (num % 2 === 0) {
    console.log("The number is even.");
} else {
    console.log("The number is odd.");
}   
    // problem 34. Find greater between two numbers

    let num1 = Number(prompt("Enter the first number: "));
let num2 = Number(prompt("Enter the second number: ")); 
if (num1 > num2) {
    console.log("The first number is greater.");
} else if (num2 > num1) {
    console.log("The second number is greater.");
} else {
    console.log("Both numbers are equal.");
}


    // problem 35. Score grading: ≥90 Excellent, ≥70 Good ,Else Needs Improvement

    let score = Number(prompt("Enter your score: "));
if (score >= 90) {
    console.log("Excellent");
} else if (score >= 70) {
    console.log("Good");
} else {
    console.log("Needs Improvement");
}


    // problem 36. Check leap year
    
let year = Number(prompt("Enter a year: "));
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year + " is a leap year.");
} else {
    console.log(year + " is not a leap year.");
}
    // problem 37. Check vowel or consonant
let char = prompt("Enter a character: ").toLowerCase();
if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
    console.log(char + " is a vowel.");
} else {
    console.log(char + " is a consonant.");
}


    // problem 38. Find largest of three numbers.

let a = Number(prompt("Enter the first number: "));
let b = Number(prompt("Enter the second number: "));
let c = Number(prompt("Enter the third number: ")); 
if (a >= b && a >= c) {
    console.log("The largest number is " + a + ".");
} else if (b >= a && b >= c) {
    console.log("The largest number is " + b + ".");
} else {
    console.log("The largest number is " + c + ".");
}

    // problem 39. Password validation (admin123).

let password = prompt("Enter the password: ");
if (password === "admin123") {
    console.log("Password is correct. Access granted.");
} else {
    console.log("Incorrect password. Access denied.");
}   
    // problem 40. Check divisibility by 3 and 5.
    
let numberToCheck = Number(prompt("Enter a number: "));
if (numberToCheck % 3 === 0 && numberToCheck % 5 === 0) {
    console.log(numberToCheck + " is divisible by both 3 and 5.");
} else {
    console.log(numberToCheck + " is not divisible by both 3 and 5.");
}   