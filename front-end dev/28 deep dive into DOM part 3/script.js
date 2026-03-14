let lastScroll = 0;
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {

    let currentScroll = window.pageYOffset;

    if(currentScroll > lastScroll){
        nav.classList.add("hide"); // scroll down
    } else {
        nav.classList.remove("hide"); // scroll up
    }

    lastScroll = currentScroll;
});