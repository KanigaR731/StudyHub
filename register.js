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
 
     document.querySelector(".submit-btn").addEventListener("click", function(e){
    e.preventDefault()
   alert("Message sent successfully!💖")
   });
    