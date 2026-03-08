
// problem 21. Print numbers from 1 to 50 using for.

// for (i = 1 ; i <= 50; i++){
//     console.log(i);
// }

// problem 22. Using while, calculate sum from 1 to 10.

let i = 1
let sum = 0
while(i <=10 ){
    sum = sum+i
    i++
}

console.log(sum);

// problem 23. Use for...of to print each character of "JavaScript".

let name = "Javascript"

for(i = 0 ; i<= name.length; i++){   
    console.log(name[i]);
}


// problem 24. Print odd numbers from 1–20 using continue.
 
for ( i = 1 ; i <=20; i++){
    if(i%2 === 0){
        continue
    }   
    console.log(i);
}

//  problem 25. Use do...while to print 5 to 1.

let j = 5
do{
    console.log(j);
    j--
}while(j>=1);

// problem 26. Calculate factorial of 5

let num = 5
let factorial = 1
for(i = 1; i <= num; i++){
    factorial = factorial * i
}
console.log(factorial);

// problem 29. Print numbers from 1–100 divisible by 5 using while.
let k = 1
while(k <= 100){
    if(k%5 === 0){
        console.log(k);
    }
    k++
}

// problem 30. Create object {name, age} and print keys using for...in.
let person = {
    name : "John",
    age : 30
}

for(key in person){
    console.log(key);
}


