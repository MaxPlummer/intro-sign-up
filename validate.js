// Credit to https://www.geeksforgeeks.org/javascript/how-to-validate-email-address-using-regexp-in-javascript/#google_vignette
function validate() {
  // Prevent page reload onsubmit
  event.preventDefault();
  // A liberal regex for a variety of first/last names
  const nameRegex = /^[a-zA-Z-']+/;
  // A basic regex for email validation
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
  // Password regex with 8-character and 1 symbol minimum 
  const pwdRegex =
    /^(?=\S*[#?!@$%^&*-])\S{8,}$/;
  // Get user input from the form
  const userFirst = document.forms["registerForm"]["fname"].value;
  const userLast = document.forms["registerForm"]["lname"].value;
  const userEmail = document.forms["registerForm"]["email"].value;
  const userPwd = document.forms["registerForm"]["password"].value;

	// Test user input with regex and display alerts
  if (nameRegex.test(userFirst)) {
    document.getElementById("fname-alert").innerHTML = "";
  } else {
    document.getElementById("fname-alert").innerHTML =
      "First Name cannot be empty";
  }
  if (nameRegex.test(userLast)) {
    document.getElementById("lname-alert").innerHTML = "";
  } else {
    document.getElementById("lname-alert").innerHTML =
      "Last Name cannot be empty";
  }
  if (emailRegex.test(userEmail)) {
    document.getElementById("email-alert").innerHTML = "";
  } else {
    document.getElementById("email-alert").innerHTML =
      "Looks like this is not an email";
  }
  if (pwdRegex.test(userPwd)) {
    document.getElementById("password-alert").innerHTML = "";
  } else {
    document.getElementById("password-alert").innerHTML =
      "Must have 8 characters and 1 symbol";
  }

  console.log(userFirst, userLast, userEmail, userPwd);
}
