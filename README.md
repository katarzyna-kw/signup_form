This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

![](./src/img/screenshot.png)



### Links
npm
- Solution URL: [https://github.com/katarzyna-kw/signup_form](https://github.com/katarzyna-kw/signup_form)
- Live Site URL: [https://katarzyna-kw.github.io/signup_form/](https://katarzyna-kw.github.io/signup_form/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library


### What I learned

I used React to build a simple one-page site with a multi-input form in order to practice creating/validating forms with user input stored as an object without use of libraries and to practice making backgrounds/images responsive based on window size using React Hooks. I used a tutorial to create a custom hook called useForm. I also learned about the very useful CSS pseudo-class :focus-within, which allows styling of elements that do not accept styles with :focus. Sources on these topics can be found under Useful Resources. 

### Useful resources

- [Responsive Background Images Using React Hooks🍍](https://itnext.io/responsive-background-images-using-react-hooks-941af365ea1f) - Great article on how to use React Hooks to responsively render background image based on window size.
- [Form Validation Using Custom Hooks](https://upmostly.com/tutorials/form-validation-using-custom-react-hooks) - Extremely helpful article on form validation in React when you want to avoid using opinionated libraries to match a prototype.
- [:focus-within pseudo-class example](https://codepen.io/danield770/pen/jweZPN) - This is an example of the :focus-within pseudo-class, found through the [following question on Stack Overflow](https://stackoverflow.com/questions/7876283/using-focus-to-style-outer-div)


## Author

- Website - [Katarzyna Wegrzynowicz](https://katarzyna-kw.github.io/portfolio-website/)
- Frontend Mentor - [@katarzyna-kw](https://www.frontendmentor.io/profile/katarzyna-kw)