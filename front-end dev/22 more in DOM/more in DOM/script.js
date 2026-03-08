// math 

// console.log(Math.abs(-4));
// console.log(Math.PI);
// console.log(Math.LN10);
// console.log(Math.SQRT2);
// console.log(Math.ceil(6.3));
// console.log(Math.floor(6.3));
// console.log(Math.log10(20));
// console.log(Math.max(20,11,3421,12));
// console.log(Math.random());



// Math.floor(Math.random()*(max-min+1))+mi

let arr = ['aman', 'rohit', 'satebaaji', 'satyarth'];

console.log(arr[Math.floor(Math.random()*arr.length)]);



let btn = document.querySelector('button');
let box = document.querySelector('.box');
btn.addEventListener('click', function(){
    // box.innerHTML = 'i am clicked';
    box.innerHTML = '<h1>add using append child</h1>';
    // box.append(' and i am appended');
    box.appendChild(this.innerHTML);
})