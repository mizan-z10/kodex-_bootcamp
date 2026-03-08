
// 1. Write a function that uses `forEach()` to calculate the total sum of an array.
function sumArray(arr) {
  let sum = 0;
  arr.forEach((element) => {
    sum += element;
  });
  return sum;
}
console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15

// 2. Write a function that uses `map()` to return a new array where each number is squared.
let new_arr = [1,2,3,4,5,6,7,8]
let squareOfarr = new_arr.map((elem) => elem*elem );
console.log(squareOfarr);

// 3. Write a function that uses `filter()` to return only numbers greater than 50.

let arr1 = [10,20,30,40,50,60,]

let graterarr = arr1.filter((elem)=>  elem > 50 );

console.log(graterarr);

// 4. Write a function that checks whether two values are strictly equal using `===`.

function equality(a, b){
    if(a === b){
        return "Strictly equal";
    } else if(a == b){
        return "Equal by value only";
    } else{
        return "Not equal";
    }
}

console.log(equality(5,"5"));

// 5. Write a function that demonstrates array mutability by modifying the original array using `push()`.
function addElement(arr){
    arr.push(100);
    return arr;
}

let arr2 = [1,23,4,5,6];
console.log(addElement(arr2));

//  6. Write a function that removes the last element immutably (without modifying original array).

function removeLast(arr){
    return arr.slice(0, -1);
}

let arr3 = [1,2,3,4,5];
let newArr = removeLast(arr3);

console.log(arr3);   // original unchanged
console.log(newArr);



// 7. Write a function that sorts numbers in ascending order using a proper compare function.

let arr4 = [1,6,8,3,668,9,6,]

arr4.sort((a,b) => a-b)
console.log(arr4);

// 8. Write a function that sorts strings alphabetically.
let arr5 = ['Aman','Rahul','Ben','zaheer','kriti']
arr5.sort((a,b) => a.localeCompare(b));
console.log(arr5);

// 9. Write a function that reverses an array without using `reverse()`.

function reverseArray(arr){
    let result = [];

    for(let i = arr.length - 1; i >= 0; i--){
        result.push(arr[i]);
    }

    return result;
}


// 10. Write a function that merges two arrays using `concat()` and returns the result.

function merg(arr1,arr2){
     let arr3 = arr1.concat(arr2)
     return arr3
}

let m1 = [1,2,3,4,5]
let m2 = [6,7,8,9]

console.log(merg(m1,m2));

// 11. Write a function that merges two arrays and removes duplicate values.

function merg(arr1,arr2){
     let arr3 = arr1.concat(arr2)
     return arr3
}

let a1 = [1,2,3,4,5,6]
let a2 = [6,7,8,9]

let narr = merg(a1,a2)
console.log(narr);
let uniquarr = [...new Set(narr)]

console.log(uniquarr);


// 12. Write a function that manually checks whether a value exists in an array (without using `includes()`).

function exists(arr, value){
    for(let i=0; i<arr.length; i++){
        if(arr[i] === value){
            return true;
        }
    }
    return false;
}

console.log(exists([1,2,3,4], 3));



// 13. Write a function that uses `includes()` to check if an array contains a specific value.

let arr = [10, 20, 30, 40, 50];
console.log(arr.includes(20));

// 14. Write a function that filters strings starting with "A" using `startsWith()`.
let arr8  = ['Aman','Rahul','Ben','zaheer','kriti'];

let astart = arr8.filter((element) => element.startsWith("A"));

console.log(astart);
