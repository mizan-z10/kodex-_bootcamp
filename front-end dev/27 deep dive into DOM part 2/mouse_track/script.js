let body = document.body;
// console.log(body);

let ball = document.querySelector(".ball");


body.addEventListener("mousemove", (e) => {


    console.log(e.x,e.y);


    ball.style.left = e.x+ "px";
    ball.style.top = e.y+ "px";  

})