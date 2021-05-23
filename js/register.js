const registerForm = document.getElementById("register-form");
let registerButton = document.getElementById("register-form-submit");
const registerErrorMsg = document.getElementById("register-error-msg");

// // Nav bar adjusting active tab - DOESN"T WORK 
// $(".topnav a").click(function() { // hooking up click function to .topnav anchors
//     console.log("got into nav stuff");
//     $(".active").removeClass("active"); // clear existing active a's
//     $(this).addClass("active"); // add active class to currently clicked element
// });

registerButton.addEventListener("click", (e) => { // function e gets executed after login button is clicked //
    e.preventDefault(); // CHANGE AFTER API SETUP: prevents submission of data //
    const username = registerForm.username.value;
    const password = registerForm.password.value;

    // CHANGE TO IF USERNAME EXISTS IN API, RETURN ERROR
    
    // if (username === "catherine" && password === "sleep") { // will need to setup user and passwords in api//
    //     alert("You have successfully logged in."); 
    //     location.reload();
    // } else {
    //     loginErrorMsg.style.opacity = 1; // make error message visible //
    // }
})