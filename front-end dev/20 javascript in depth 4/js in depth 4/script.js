// ======================================================
// OBJECT AND STRING COMPLETE NOTES (WITH COMMENTS)
// ======================================================

// ======================================================
// WHAT IS OBJECT ?
// ======================================================

// Object is a collection of key-value pairs.
// key = property name
// value = property value

// real life example:
// student → name, age, class, marks

// syntax:
let student = {
    name: "Mizan",     // key: name, value: "Mizan"
    age: 19,
    course: "BCA",
    isStudent: true
};

console.log(student);


// ======================================================
// HOW TO CREATE OBJECT
// ======================================================

// Method 1: Object literal (MOST COMMON)
let user = {
    name: "Ali",
    age: 20
};

// Method 2: new Object()
let user2 = new Object();
user2.name = "Ahmed";
user2.age = 22;

console.log(user2);


// ======================================================
// HOW TO ACCESS OBJECT VALUES
// ======================================================

// Method 1: dot notation
console.log(user.name);

// Method 2: bracket notation
console.log(user["age"]);


// ======================================================
// WHAT CAN EXIST INSIDE OBJECT
// ======================================================

let person = {
    name: "Mizan",         // string
    age: 19,               // number
    isStudent: true,       // boolean
    skills: ["JS", "Java"],// array
    address: {             // nested object
        city: "UP",
        pin: 123456
    },
    greet: function() {    // function (method)
        console.log("Hello");
    }
};

person.greet();


// ======================================================
// ADD NEW PROPERTY
// ======================================================

person.email = "mizan@gmail.com";
console.log(person);


// ======================================================
// UPDATE PROPERTY
// ======================================================

person.age = 20;
console.log(person.age);


// ======================================================
// DELETE PROPERTY
// ======================================================

delete person.isStudent;
console.log(person);


// ======================================================
// OBJECT METHODS
// ======================================================

// Object.keys() → returns array of keys
console.log(Object.keys(person));

// Object.values() → returns array of values
console.log(Object.values(person));

// Object.entries() → returns key-value pairs array
console.log(Object.entries(person));


// ======================================================
// this KEYWORD INSIDE OBJECT
// ======================================================

// this refers to current object

let car = {
    brand: "BMW",
    model: "X5",
    show: function() {
        console.log(this.brand);
        console.log(this.model);
    }
};

car.show();


// ======================================================
// OBJECT DESTRUCTURING
// ======================================================

// extract values into variables

let employee = {
    id: 101,
    name: "Mizan",
    salary: 50000
};

let {id, name, salary} = employee;

console.log(id);
console.log(name);
console.log(salary);


// ======================================================
// FREEZE OBJECT
// ======================================================

// freeze = cannot add, update, delete

let obj1 = {
    name: "Ali"
};

Object.freeze(obj1);

obj1.name = "Ahmed"; // will not change
obj1.age = 25;       // will not add

console.log(obj1);


// ======================================================
// SEAL OBJECT
// ======================================================

// seal = cannot add or delete, but can update

let obj2 = {
    name: "Mizan"
};

Object.seal(obj2);

obj2.name = "Khan";  // allowed
obj2.age = 19;       // not allowed

console.log(obj2);





// ======================================================
// STRING NOTES
// ======================================================

// WHAT IS STRING

// string = collection of characters

let str = "Hello World";


// ======================================================
// STRING CREATE METHODS
// ======================================================

// method 1
let s1 = "Hello";

// method 2
let s2 = 'Hello';

// method 3
let s3 = `Hello`;


// ======================================================
// LENGTH PROPERTY
// ======================================================

console.log(str.length);


// ======================================================
// CHARACTER ACCESS
// ======================================================

console.log(str[0]);
console.log(str.charAt(1));


// ======================================================
// trim() → remove spaces
// ======================================================

let t = "   hello   ";
console.log(t.trim());


// ======================================================
// slice() → extract part
// ======================================================

console.log(str.slice(0,5));


// ======================================================
// substring()
// ======================================================

console.log(str.substring(0,5));


// ======================================================
// includes() → check exists
// ======================================================

console.log(str.includes("World"));


// ======================================================
// indexOf()
// ======================================================

console.log(str.indexOf("World"));


// ======================================================
// replace()
// ======================================================

console.log(str.replace("World", "Mizan"));


// ======================================================
// replaceAll()
// ======================================================

let r = "hi hi hi";

console.log(r.replaceAll("hi", "hello"));


// ======================================================
// split() → string to array
// ======================================================

let data = "a,b,c";

console.log(data.split(","));


// ======================================================
// join() → array to string
// ======================================================

let arr = ["Mizan", "Khan"];

console.log(arr.join(" "));


// ======================================================
// toUpperCase()
// ======================================================

console.log(str.toUpperCase());


// ======================================================
// toLowerCase()
// ======================================================

console.log(str.toLowerCase());


// ======================================================
// END OF NOTES
// ======================================================


// ======================================================
// ARRAY OF OBJECTS COMPLETE NOTES
// ======================================================

// Array of objects = multiple objects inside an array
// Real life example: students list

let students = [
    { id: 1, name: "Mizan", age: 19, course: "BCA" },
    { id: 2, name: "Ali", age: 20, course: "BTech" },
    { id: 3, name: "Ahmed", age: 21, course: "BSc" }
];

console.log(students);


// ======================================================
// ACCESS WHOLE OBJECT
// ======================================================

// access first object
console.log(students[0]);

// access second object
console.log(students[1]);


// ======================================================
// ACCESS SPECIFIC VALUE
// ======================================================

// syntax:
// array[index].property

console.log(students[0].name);
console.log(students[1].course);


// ======================================================
// UPDATE VALUE
// ======================================================

// change Ali age to 25

students[1].age = 25;

console.log(students[1]);


// ======================================================
// ADD NEW PROPERTY TO OBJECT
// ======================================================

students[0].email = "mizan@gmail.com";

console.log(students[0]);


// ======================================================
// DELETE PROPERTY
// ======================================================

delete students[2].course;

console.log(students[2]);


// ======================================================
// ADD NEW OBJECT IN ARRAY
// ======================================================

students.push({
    id: 4,
    name: "Khan",
    age: 22,
    course: "MCA"
});

console.log(students);


// ======================================================
// REMOVE OBJECT FROM ARRAY
// ======================================================

// remove last object
students.pop();

console.log(students);


// ======================================================
// LOOP THROUGH ARRAY OF OBJECTS
// ======================================================

// using for loop

for (let i = 0; i < students.length; i++) {
    console.log(students[i].name);
}


// using forEach

students.forEach(function(student) {
    console.log(student.name, student.age);
});


// ======================================================
// FIND SPECIFIC OBJECT
// ======================================================

// find student with id 2

let result = students.find(function(student) {
    return student.id === 2;
});

console.log(result);


// ======================================================
// UPDATE USING FIND
// ======================================================

let updateStudent = students.find(function(student) {
    return student.id === 1;
});

updateStudent.name = "Mizan Khan";

console.log(students);


// ======================================================
// FILTER OBJECTS
// ======================================================

// get students age > 20

let filtered = students.filter(function(student) {
    return student.age > 20;
});

console.log(filtered);


// ======================================================
// ARRAY OF OBJECT WITH FUNCTION
// ======================================================

students.forEach(function(student) {
    console.log(`Name: ${student.name}, Age: ${student.age}`);
});


// ======================================================
// REAL LIFE EXAMPLE (IMPORTANT)
// ======================================================

let users = [
    { username: "admin", password: "1234" },
    { username: "mizan", password: "5678" }
];

// login check

let loginUser = users.find(function(user) {
    return user.username === "mizan";
});

console.log(loginUser);


// ======================================================
// SUMMARY IMPORTANT SYNTAX
// ======================================================

// access:
// array[index].property

// update:
// array[index].property = value

// add object:
// array.push({})

// delete property:
// delete array[index].property

// find object:
// array.find()

// loop:
// array.forEach()


// ======================================================
// END
// ======================================================


// ======================================================
// SPREAD OPERATOR (...) IN ARRAY
// ======================================================

// original array
let arr1 = [10, 20, 30];


// ======================================================
// COPY ARRAY
// ======================================================

// spread operator creates NEW COPY

let arr2 = [...arr1];

console.log("arr1:", arr1);
console.log("arr2:", arr2);


// IMPORTANT:
// arr1 and arr2 are different arrays in memory

arr2[0] = 100;

console.log("arr1 after arr2 change:", arr1); // unchanged
console.log("arr2 after change:", arr2);


// ======================================================
// WITHOUT SPREAD (WRONG WAY)
// ======================================================

let arr3 = arr1;  // reference copy (NOT REAL COPY)

arr3[0] = 999;

console.log("arr1:", arr1); // changed (danger)
console.log("arr3:", arr3);


// reason:
// both point to same memory


// ======================================================
// MERGE ARRAYS
// ======================================================

let a = [1, 2];
let b = [3, 4];

let merged = [...a, ...b];

console.log("merged:", merged);


// ======================================================
// ADD NEW ELEMENTS
// ======================================================

let numbers = [10, 20, 30];

let newNumbers = [...numbers, 40, 50];

console.log(newNumbers);


// ======================================================
// ADD ELEMENT AT START
// ======================================================

let startAdd = [5, ...numbers];

console.log(startAdd);


// ======================================================
// UPDATE ARRAY SAFELY
// ======================================================

let original = [1, 2, 3];

let updated = [...original];

updated[1] = 100;

console.log("original:", original);
console.log("updated:", updated);


// ======================================================
// SPREAD WITH OBJECT (IMPORTANT)
// ======================================================

let user1 = {
    name: "Mizan",
    age: 19
};

// copy object

let user2 = { ...user1 };

user2.name = "Khan";

console.log(user1);
console.log(user2);


// ======================================================
// ADD NEW PROPERTY
// ======================================================

let user3 = {
    ...user1,
    city: "UP"
};

console.log(user3);


// ======================================================
// MERGE OBJECTS
// ======================================================

let obj1 = { a: 1 };
let obj2 = { b: 2 };

let obj3 = { ...obj1, ...obj2 };

console.log(obj3);


// ======================================================
// SUMMARY
// ======================================================

// copy array
// let arr2 = [...arr1]

// merge array
// [...arr1, ...arr2]

// copy object
// {...obj}

// merge object
// {...obj1, ...obj2}


// ======================================================
// END
// ======================================================
