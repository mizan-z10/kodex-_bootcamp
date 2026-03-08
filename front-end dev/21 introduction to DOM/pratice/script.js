// # DOM Homework Tasks KODEX

// Safe DOM helpers and guarded listeners for DOM practice

const $ = selector => document.querySelector(selector);

// Task 1: Toggle text
const changeBtn = $("#changeBtn");
const textElement = $("#textElement");
if (changeBtn && textElement) {
    changeBtn.addEventListener("click", () => {
        if (textElement.textContent.trim() === "Hello") textElement.textContent = "Welcome";
        else if (textElement.textContent.trim() === "Welcome") textElement.textContent = "Hello";
        else textElement.textContent = "Text has been changed!";
    });
}

// Box-related (color, rotate, toggle)
const box = $(".box") || $("#mainBox");
const changeBoxColorBtn = $("#changeBoxColorBtn");
const toggleBoxBtn = $("#toggleBoxBtn");
const rotateLeftBtn = $("#rotateLeftBtn");
const rotateRightBtn = $("#rotateRightBtn");

if (box) box.style.transition = "transform .3s ease, background-color .25s ease, opacity .18s";

const colors = ["#ef4444", "#10b981", "#3b82f6"]; // nicer tones
let colorIndex = 0;
if (changeBoxColorBtn && box) {
    changeBoxColorBtn.addEventListener("click", () => {
        box.style.backgroundColor = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length;
    });
}

if (toggleBoxBtn && box) {
    toggleBoxBtn.addEventListener("click", () => {
        const hidden = box.style.opacity === "0" || box.style.display === "none";
        if (hidden) { box.style.display = "flex"; box.style.opacity = "1"; }
        else { box.style.opacity = "0"; setTimeout(() => { if (box) box.style.display = "none"; }, 220); }
    });
}

let rotationAngle = 0;
if (rotateRightBtn && box) {
    rotateRightBtn.addEventListener("click", () => { rotationAngle += 45; box.style.transform = `rotate(${rotationAngle}deg)`; });
}
if (rotateLeftBtn && box) {
    rotateLeftBtn.addEventListener("click", () => { rotationAngle -= 45; box.style.transform = `rotate(${rotationAngle}deg)`; });
}

// Counter
const numberDisplay = $("#numberDisplay");
const increaseBtn = $("#increaseBtn");
const decreaseBtn = $("#decreaseBtn");
let currentNumber = 0;
if (numberDisplay) numberDisplay.textContent = currentNumber;
if (increaseBtn && numberDisplay) increaseBtn.addEventListener("click", () => { currentNumber++; numberDisplay.textContent = currentNumber; });
if (decreaseBtn && numberDisplay) decreaseBtn.addEventListener("click", () => { if (currentNumber > 0) { currentNumber--; numberDisplay.textContent = currentNumber; } });

// Change Mode (light/dark)
const changeModeBtn = $("#changeModeBtn");
let isDarkMode = false;
if (changeModeBtn) {
    changeModeBtn.addEventListener("click", () => {
        isDarkMode = !isDarkMode;
        if (isDarkMode) {
            document.documentElement.style.background = "#0b1020";
            document.documentElement.style.color = "#fff";
        } else {
            document.documentElement.style.background = "";
            document.documentElement.style.color = "";
        }
    });
}

// Live input -> display
const inputBox = $("#inputBox");
const displayText = $("#displayText");
if (inputBox && displayText) {
    inputBox.addEventListener("input", () => { displayText.textContent = inputBox.value || "(output will appear here)"; });
}

// Hover box color
const hoverBox = $("#hoverBox");
if (hoverBox) {
    const original = getComputedStyle(hoverBox).backgroundColor;
    hoverBox.addEventListener("mouseenter", () => hoverBox.style.backgroundColor = "#60a5fa");
    hoverBox.addEventListener("mouseleave", () => hoverBox.style.backgroundColor = original);
}

// One-time button
const onceBtn = $("#onceBtn");
const onceText = $("#onceText");
if (onceBtn && onceText) {
    onceBtn.addEventListener("click", () => { onceText.textContent = "Button Clicked"; onceBtn.disabled = true; });
}

// Traffic lights
const redLight = $("#redLight");
const yellowLight = $("#yellowLight");
const greenLight = $("#greenLight");
const stopBtn = $("#stopBtn");
const readyBtn = $("#readyBtn");
const goBtn = $("#goBtn");

const resetLights = () => {
    if (redLight) redLight.style.backgroundColor = "lightgray";
    if (yellowLight) yellowLight.style.backgroundColor = "lightgray";
    if (greenLight) greenLight.style.backgroundColor = "lightgray";
};

if (stopBtn) stopBtn.addEventListener("click", () => { resetLights(); if (redLight) redLight.style.backgroundColor = "#ef4444"; });
if (readyBtn) readyBtn.addEventListener("click", () => { resetLights(); if (yellowLight) yellowLight.style.backgroundColor = "#f59e0b"; });
if (goBtn) goBtn.addEventListener("click", () => { resetLights(); if (greenLight) greenLight.style.backgroundColor = "#10b981"; });

