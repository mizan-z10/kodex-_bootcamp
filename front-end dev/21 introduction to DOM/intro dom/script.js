// ============================
// 1. SELECTING ELEMENTS
// ============================

// select element using id
let title = document.getElementById("title");
console.log(title); // prints full h1 element

// select element using class
let para = document.querySelector(".text");
console.log(para); // prints paragraph element


// ============================
// 2. CHANGING CONTENT
// ============================

// change text only
title.textContent = "Welcome Mizan"; 
// textContent changes only text, HTML tags will not work

// change HTML content
para.innerHTML = "<b>This is bold paragraph</b>";
// innerHTML can insert HTML tags


// ============================
// 3. CHANGING CSS USING JS
// ============================

// change text color
title.style.color = "blue"; 

// change background color
title.style.backgroundColor = "yellow";

// change font size
title.style.fontSize = "40px";


// ============================
// 4. EVENT LISTENER
// ============================

// select button
let btn = document.getElementById("btn");

// add click event
btn.addEventListener("click", function() {

    // change text when button clicked
    title.innerHTML = "Button Clicked";

    // change color when clicked
    title.style.color = "red";

    // change background
    title.style.backgroundColor = "black";

});


// ============================
// 5. EXTRA: querySelectorAll example
// ============================

// select all matching elements
let allPara = document.querySelectorAll(".text");

// access first element
console.log(allPara[0])



// ============================
// EXTRA   example rotating lollipop
// ============================

let rotateBtn = document.getElementById("rotateBtn");
let stopRotateBtn = document.getElementById("stopRotateBtn");
let lollipop = document.querySelector(".lollipop");


rotateBtn.addEventListener("click", function() {
    // lollipop.classList.toggle("rotate");
    lollipop.style.animation = "rotate 1s linear infinite";
});

stopRotateBtn.addEventListener("click", function() {
    lollipop.style.animation = "none";
});

// ============================
// EXTRA   example with single button
// ============================

let switchBtn = document.querySelector(".switch button");
let bulb = document.querySelector(".bulb");
let isOn = false;
switchBtn.addEventListener("click", function() {
    if (!isOn) {
        bulb.style.backgroundColor = "yellow";
        bulb.style.boxShadow = "0 0 20px 5px yellow";
        switchBtn.textContent = "OFF";
        isOn = true;
    } else {
        bulb.style.backgroundColor = "black";
        switchBtn.textContent = "ON";
        bulb.style.boxShadow = "none";
        isOn = false;
    }
});