
// html and css details button
document.getElementById("html-css-btn").addEventListener("click",function(){
    window.location.href="course-details-html&css.html"
});

// js btn
document.querySelector(".js-btn").addEventListener("click",function(){
    window.location.href="course-details.html"
});

//react btn
document.getElementById("react-js-btn").addEventListener("click",function(){
    window.location.href="course-details-react.html"
})

// bootsrap btn
document.querySelector(".bootsrap-btn").addEventListener("click",function(){
    window.location.href="course-details-bootsrap.html"
});

// nodejs btn
document.querySelector("#node-js-btn").addEventListener("click",function(){
    window.location.href="course-details-nodejs.html"
});

// uiux btn
document.querySelector("#uiux-btn").addEventListener("click",function(){
    window.location.href="course-details-uiux.html"
});

// navbar button login button
document.querySelector(".navbar-button1").addEventListener("click",function(){
    window.location.href="login.html"
});

//navbar button signup button
// var signupbtn = document.getElementsByClassName("navbar-button2")
// signupbtn.addEventListener("click",function(){
//     window.location.href="signup.html"
// });

document.querySelector(".navbar-button2").addEventListener("click",function(){
    window.location.href="signup.html"
});

//search box
var coursecontainer=document.getElementById("coursebox")
var search = document.getElementById("Search")
var productlist = coursecontainer.querySelectorAll("div")

search.addEventListener("keyup", function(event) {

    var enteredValue = event.target.value.toUpperCase()

    for (var count = 0; count < productlist.length; count++) {

        var productname = productlist[count].querySelector("h3").textContent

        if (productname.toUpperCase().indexOf(enteredValue) < 0) {
            productlist[count].style.display = "none"
        } else {
            productlist[count].style.display = "block"
        }
    }
});