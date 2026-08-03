// Credit to https://www.geeksforgeeks.org/javascript/how-to-validate-email-address-using-regexp-in-javascript/#google_vignette
function validate() {
  event.preventDefault();
  // A liberal regex for a variety of first/last names
  const nameRegex = /^[a-zA-Z-']+/;
  // A basic regex for email validation
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  // Password regex with 8-character minimum
  const pwdRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
  const userFirst = document.forms["registerForm"]["fname"].value;
  const userLast = document.forms["registerForm"]["lname"].value;
  const userEmail = document.forms["registerForm"]["email"].value;
  const userPwrd = document.forms["registerForm"]["password"].value;

  if (nameRegex.test(userFirst)) {
    console.log("Valid First Name");
  } else {
    console.log("Invalid First Name");
  }
  if (nameRegex.test(userLast)) {
    console.log("Valid Last Name");
  } else {
    console.log("Invalid Last Name");
  }
  if (nameRegex.test(userEmail)) {
    console.log("Valid Email");
  } else {
    console.log("Invalid Email");
  }
  if (nameRegex.test(userPwrd)) {
    console.log("Valid Password");
  } else {
    console.log("Invalid Password");
  }

  console.log(userFirst, userLast, userEmail, userPwrd);
}
