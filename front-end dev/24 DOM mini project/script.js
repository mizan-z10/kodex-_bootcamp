console.log("hello world");

function selecter(id){
    return document.getElementById(id);
}
// /selecting the clock hands and the text elements to display time
let hourhand = selecter("hourhand");
let minhand = selecter("minhand");
let sechand = selecter("sechand");
// selecting the text elements to display time digitally
let hour = selecter("hour");
let min = selecter("minute");
let sec = selecter("second");

// UI time UPDATION function updateTime(){

function updateTime(){
    let date = new Date();
    let current_hours = date.getHours() % 12;
    let current_minutes = date.getMinutes();
    let current_seconds = date.getSeconds();

    // changing digital time
    hour.innerText = `${current_hours}`.padStart(2,"0");
    min.innerText = `${current_minutes}`.padStart(2,"0");
    sec.innerText = `${current_seconds}`.padStart(2,"0");

    // changing analog time
    let hour_rotation = (current_hours + current_minutes/60) * 30 - 90;
    let min_rotation = current_minutes * 6 - 90;
    let sec_rotation = current_seconds * 6 - 90; 
    // let hour_rotation = 360 / 12 * current_hours - 90;
    // let min_rotation = 360 / 60 * current_minutes - 90;
    // let sec_rotation = 360 / 60 * current_seconds - 90;

    hourhand.style.transform = `rotate(${hour_rotation}deg)`;
    minhand.style.transform = `rotate(${min_rotation}deg)`;
    sechand.style.transform = `rotate(${sec_rotation}deg)`;


}

updateTime();

setInterval(updateTime,1000);