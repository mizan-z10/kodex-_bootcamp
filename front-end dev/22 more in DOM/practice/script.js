const playerDiv = document.getElementById("player");
const computerDiv = document.getElementById("computer");
const resultDiv = document.getElementById("result");
const button = document.getElementById("flipButton");

button.addEventListener("click", function() {

    // 1. random number generate
    let playerNumber = Math.floor(Math.random() * 6) + 1;
    let computerNumber = Math.floor(Math.random() * 6) + 1;

    // 2. clear old dice
    playerDiv.innerHTML = "";
    computerDiv.innerHTML = "";

    // 3. function to create dots
    function createDots(container, number) {
            // render classic die faces on a 3x3 grid
            const patterns = {
                1: [5],
                2: [1,9],
                3: [1,5,9],
                4: [1,3,7,9],
                5: [1,3,5,7,9],
                6: [1,3,4,6,7,9]
            };

            const cells = patterns[number] || [];
            // create 9 cells (3x3)
            for(let pos = 1; pos <= 9; pos++) {
                const cell = document.createElement("div");
                if (cells.includes(pos)) {
                    cell.className = "dot";
                } else {
                    cell.className = "dot empty";
                }
                container.appendChild(cell);
            }
    }

    // 4. create player dice
    createDots(playerDiv, playerNumber);

    // 5. create computer dice
    createDots(computerDiv, computerNumber);

    // 6. decide winner
    if(playerNumber > computerNumber) {
        resultDiv.innerText = "Player Wins";
    }
    else if(computerNumber > playerNumber) {
        resultDiv.innerText = "Computer Wins";
    }
    else {
        resultDiv.innerText = "Draw";
    }

});


// ## 2. Random Color Card Generator

// Create a card on button click. Generate a random RGB background color
// using `Math.floor()` and `Math.random()`. Set a random width and height.
// Assign a unique `data-id` using `setAttribute()`.

const cardBtn = document.getElementById("cardBtn");
const cardContainer = document.getElementById("cardContainer");

let idCounter = 1;

cardBtn.addEventListener("click", function() {

    // 1. create card div
    const card = document.createElement("div");

    // 2. add class
    card.classList.add("card");

    // 3. random RGB color
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    const randomColor = `rgb(${r}, ${g}, ${b})`;

    card.style.backgroundColor = randomColor;

    // 4. random width and height
    const width = Math.floor(Math.random() * 200) + 100;
    const height = Math.floor(Math.random() * 200) + 100;

    card.style.width = width + "px";
    card.style.height = height + "px";

    // 5. unique data-id
    card.setAttribute("data-id", idCounter);

    // optional: show id on card
    card.innerText = "ID: " + idCounter;

    idCounter++;

    // 6. add card to container
    cardContainer.appendChild(card);

});

// ## 3. Lottery System

// Take user input (1--50). Generate a random number using `Math.ceil()`.
// If the number matches user input, display "You Won" otherwise "Try
// Again". Update result dynamically in the DOM.


const lotteryInput = document.getElementById("lotteryInput");
const lotteryBtn = document.getElementById("lotteryBtn");
const lotteryResult = document.getElementById("lotteryResult");

// Lottery button handler
lotteryBtn.addEventListener("click", function() {
    const userVal = parseInt(lotteryInput.value, 10);

    if (Number.isNaN(userVal) || userVal < 1 || userVal > 50) {
        lotteryResult.innerText = "Please enter a number between 1 and 50.";
        lotteryResult.style.color = "#b35d00";
        return;
    }

    const drawn = Math.ceil(Math.random() * 50);

    if (drawn === userVal) {
        lotteryResult.innerText = `You Won! Drawn: ${drawn}`;
        lotteryResult.style.color = "green";
    } else {
        lotteryResult.innerText = `Try Again. Drawn: ${drawn}`;
        lotteryResult.style.color = "red";
    }
});

// ## 4. Dynamic Image Gallery
const galleryBtn = document.getElementById("galleryBtn");
const galleryContainer = document.getElementById("galleryContainer");

const sampleImages = [
    "https://picsum.photos/seed/a/600/400",
    "https://picsum.photos/seed/b/600/400",
    "https://picsum.photos/seed/c/600/400",
    "https://picsum.photos/seed/d/600/400",
    "https://picsum.photos/seed/e/600/400"
];

galleryBtn.addEventListener("click", function() {
    const idx = Math.floor(Math.random() * sampleImages.length);
    const img = document.createElement("img");
    img.src = sampleImages[idx];
    img.alt = "Random image";
    galleryContainer.appendChild(img);
    console.log("Appended image src:", img.getAttribute("src"));
});

// ## 5. Progress Bar Simulator
const progressBtn = document.getElementById("progressBtn");
const progressFill = document.getElementById("progressFill");
let currentProgress = 0;

progressBtn.addEventListener("click", function() {
    if (currentProgress >= 100) return;
    const step = Math.floor(Math.random() * 21) + 10; // 10-30
    currentProgress = Math.min(100, currentProgress + step);
    progressFill.style.width = currentProgress + "%";
    progressFill.innerText = currentProgress + "%";
    if (currentProgress >= 100) {
        progressFill.innerText = "Complete";
        progressBtn.disabled = true;
    }
});

// ## 6. Random Box Remover
const createBoxesBtn = document.getElementById("createBoxesBtn");
const boxesContainer = document.getElementById("boxesContainer");

createBoxesBtn.addEventListener("click", function() {
    boxesContainer.innerHTML = "";
    for (let i = 1; i <= 5; i++) {
        const box = document.createElement("div");
        box.className = "rem-box";
        box.setAttribute("data-id", i);
        box.innerText = i;
        box.addEventListener("click", function(e) {
            const id = e.currentTarget.getAttribute("data-id");
            boxesContainer.removeChild(e.currentTarget);
            console.log("Removed box:", id);
        });
        boxesContainer.appendChild(box);
    }
});

// ## 7. Mini Gambling UI
const gambleBtn = document.getElementById("gambleBtn");
const gambleResult = document.getElementById("gambleResult");

gambleBtn.addEventListener("click", function() {
    gambleResult.innerHTML = "";
    const nums = [];
    for (let i = 0; i < 3; i++) {
        const n = Math.floor(Math.random() * 9) + 1;
        nums.push(n);
        const span = document.createElement("div");
        span.className = "gamble-num";
        span.innerText = n;
        gambleResult.appendChild(span);
    }
    const allSame = nums.every(v => v === nums[0]);
    const msg = document.createElement("div");
    msg.style.marginLeft = "12px";
    msg.style.fontWeight = "bold";
    msg.innerText = allSame ? "Jackpot!" : "Try Again";
    gambleResult.appendChild(msg);
});