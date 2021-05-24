const loginForm = document.getElementById("login-form");
let loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

// // Nav bar adjusting active tab - DOESN"T WORK 
// $(".topnav a").click(function() { // hooking up click function to .topnav anchors
//     console.log("got into nav stuff");
//     $(".active").removeClass("active"); // clear existing active a's
//     $(this).addClass("active"); // add active class to currently clicked element
// });

loginButton.addEventListener("click", (e) => { // function e gets executed after login button is clicked //
    e.preventDefault(); // CHANGE AFTER API SETUP: prevents submission of data //
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "catherine" && password === "sleep") { // will need to setup user and passwords in api//
        alert("You have successfully logged in."); 
        window.location.replace('home.html');
    } else {
        loginErrorMsg.style.opacity = 1; // make error message visible //
    }
})

// AFTER LOGIN, NEED TO DIRECT TO HOME PAGE