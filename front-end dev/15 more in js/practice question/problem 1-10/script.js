// problem 1. Create two variables: one storing your full name and another storing your favorite hobby.

let name = "mizan khan";
hobbie = "traveling";
let sentence = `my name is ${name} and i like ${hobbie}`;
console.log(sentence);

// problem 2 :. Perform the arithmetic calculation 45 * 2 - 10 and print the result
let a = 45;
let b = 10;
cal = a * 2 - b;
console.log(cal);

// problem 3 Retrieve and print the current year using JavaScript's Date object

let date = new Date();
let year = date.getFullYear();
console.log(year);

// problem 4. Store your first name and last name separately and print your full name

let first_name = "mizan";
let last_name = "khan";
let full_name = first_name + " " + last_name;
console.log(full_name);

//Create a variable, print it, update it, and print again

let love = "i love traveling";
console.log(love);
love = "i love coding";
console.log(love);

//problem 6. Print a custom error message using console.error()

console.error("this is a custom error message");

// problem 7. Store a number and print its square

let num = Number(prompt("Enter a number to give you square:"));
let square = num * num;
console.log("The square of", num, "is", square);

// problem 8. Create a boolean variable and print it.

let bool = true;
console.log(bool);

// problem 9. Store your age and print whether it is greater than 18.

let age = Number(prompt("Enter your age to check you are greater or smaller"));
if(age>18){
    console.log("you are greater then 18 ");
}else{
    console.log('you are smaller then 18 or equal to 18');
}

// problem 10. Divide 100 by 0 and print the result.

let sum = 100/0;
console.log("Dividing  100 by 0 and printing the result is ", sum);

