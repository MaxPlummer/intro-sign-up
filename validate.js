// Credit to https://www.geeksforgeeks.org/javascript/how-to-validate-email-address-using-regexp-in-javascript/#google_vignette
function validate() {
  // Prevent page reload onsubmit
  event.preventDefault();
  // A liberal regex for a variety of first/last names
  const nameRegex = /^[a-zA-Z-']+/;
  // A basic regex for email validation
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
  // Password regex with 8-character and 1 symbol minimum
  const pwdRegex = /^(?=\S*[#?!@$%^&*-])\S{8,}$/;
  // Get user input from the form
  const userFirst = document.forms["registerForm"]["fname"];
  const userLast = document.forms["registerForm"]["lname"];
  const userEmail = document.forms["registerForm"]["email"];
  const userPwd = document.forms["registerForm"]["password"];

  // Test user input with regex and display alerts
  if (nameRegex.test(userFirst.value)) {
    // Change style of input boxes
    userFirst.classList.replace("error", "no-error");
    document.getElementById("fname-alert").innerHTML = "";
  } else {
    userFirst.classList.replace("no-error", "error");
    userFirst.placeholder = "";
    document.getElementById("fname-alert").innerHTML =
      "First Name cannot be empty";
  }
  if (nameRegex.test(userLast.value)) {
    userLast.classList.replace("error", "no-error");
    document.getElementById("lname-alert").innerHTML = "";
  } else {
    userLast.classList.replace("no-error", "error");
    userLast.placeholder = "";
    document.getElementById("lname-alert").innerHTML =
      "Last Name cannot be empty";
  }
  if (emailRegex.test(userEmail.value)) {
    userEmail.classList.replace("error", "no-error");
    document.getElementById("email-alert").innerHTML = "";
  } else {
    userEmail.classList.replace("no-error", "error");
    userEmail.value = "";
    // Display sample email as placeholder
    userEmail.placeholder = "email@example.com";
    document.getElementById("email-alert").innerHTML =
      "Looks like this is not an email";
  }
  if (pwdRegex.test(userPwd.value)) {
    userPwd.classList.replace("error", "no-error");
    document.getElementById("password-alert").innerHTML = "";
  } else {
    userPwd.classList.replace("no-error", "error");
    userPwd.placeholder = "";
    document.getElementById("password-alert").innerHTML =
      "Must have 8 characters and 1 symbol";
  }
}
