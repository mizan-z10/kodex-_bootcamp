// select elements

var statuses = document.querySelectorAll(".statuss")
var fullPreview = document.querySelector(".full-preview")
var progressBar = document.querySelector(".progress")
var closeBtn = document.querySelector("#close")
var card = document.querySelector(".card")


// variables

var grow = 0
var interval
var timeout



statuses.forEach(function(status){

    status.addEventListener("click", function(){

        // previous timers clear
        clearInterval(interval)
        clearTimeout(timeout)

        // get image
        var img = status.querySelector("img").src

        // apply background
        fullPreview.style.backgroundImage = `url(${img})`

        // show preview
        fullPreview.style.display = "block"

        // disable scroll
        card.style.overflow = "visible"

        // reset progress
        grow = 0
        progressBar.style.width = "0%"


        // progress animation
        interval = setInterval(function(){

            grow++
            progressBar.style.width = grow + "%"

        },100)



        // auto close
        timeout = setTimeout(function(){

            closePreview()

        },10000)

    })

})



closeBtn.addEventListener("click", function(){

    closePreview()

})



function closePreview(){

    fullPreview.style.display = "none"

    clearInterval(interval)
    clearTimeout(timeout)

    grow = 0
    progressBar.style.width = "0%"

    // enable scroll
    card.style.overflowY = "auto"

}