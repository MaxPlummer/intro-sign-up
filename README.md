# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: https://github.com/MaxPlummer/intro-sign-up
- Live Site URL: https://maxplummer.github.io/intro-sign-up/

## My process

### Built with

- Semantic HTML5 markup
- CSS custom classes
- CSS custom variables
- Flexbox
- JavaScript
- Mobile-first workflow

### What I learned

I gained more experience using RegExp in JavaScript to validate user input. The implementation here is basic given the small scope of the project, but it was still valuable to utilize some of the fundamental regex functions/practices within JavaScript. 

```js
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
...
if (emailRegex.test(userEmail.value)) {
  userEmail.classList.replace("error", "no-error");
  document.getElementById("email-alert").innerHTML = "";
```

### Useful resources

- [GeeksforGeeks Email RegExp](https://www.geeksforgeeks.org/javascript/how-to-validate-email-address-using-regexp-in-javascript/#google_vignette) - This helped me with setting and testing regular expressions in JavaScript. I have done work with regex in the past during college, but I have less experience using it in JavaScript. This article was a good refresher. 
- [MDN Web Docs Background Position](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/background-position) - This is a resource from Mozilla that helped me implement the error icon with the input boxes. I got the idea to display the icons as a background image, and this section explains how to position background images with specific parameters. 

## Author

- GitHub - [MaxPlummer](https://github.com/MaxPlummer)
- Frontend Mentor - [@MaxPlummer](https://www.frontendmentor.io/profile/MaxPlummer)
- LinkedIn - [Maxwell Plummer](https://www.linkedin.com/in/maxwell-plummer-1b2b13291/)
