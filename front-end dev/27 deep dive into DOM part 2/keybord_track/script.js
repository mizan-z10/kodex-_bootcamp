let body = document.body;
let box = document.querySelector('.box');
let x = 0;
let y = 0;
console.log(body);




body.addEventListener("keydown", (det) => {


    console.log(det.key);
    
    if (det.key === 'ArrowLeft') {
        x += 10; // move right
    } else if (det.key === 'ArrowRight') {
        x -= 10; // move left
    } else if (det.key === 'ArrowUp') {
        y += 10; // move down
    } else if (det.key === 'ArrowDown') {
        y -= 10; // move up
    }
    
    box.style.transform = `translate(${x}px, ${y}px)`;
    

  

})  