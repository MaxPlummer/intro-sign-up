// Credit to https://www.geeksforgeeks.org/javascript/how-to-validate-email-address-using-regexp-in-javascript/#google_vignette

// A liberal regex for a variety of first/last names
let nameRegex = /^[a-zA-Z-'\s]+/;
// A basic regex for email validation
let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// Password regex with 8-character minimum
let pwdRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
let temp = "max@gmail.com";

if (emailRegex.test(temp)) {
    console.log("Valid");
} else {
    console.log("Invalid");
}
