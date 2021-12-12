import React, { useState, useEffect, useRef } from 'react'
import './Form.css'
import errorIcon from '../img/icon-error.svg'

export default function Form() {

   //test if first render
   const firstRender = useRef(true);

   const [disabled, setDisabled] = useState(true);
   const [firstName, setFirstName] = useState("");
   const [lastName, setLastName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [errorFirstName, setErrorFirstName] = useState(null);
   const [errorLastName, setErrorLastName] = useState(null);
   const [errorEmail, setErrorEmail] = useState(null);
   const [errorPassword, setErrorPassword] = useState(null);

   const onSubmit = (e) => {
      e.preventDefault();

      if (!errorFirstName && !errorLastName && !errorEmail && !errorPassword) {
         console.log("submitting form with ", email)
      }
   }

   useEffect(() => {
      //skip validation on first render
      if (firstRender.current) {
         //no longer initial render
         firstRender.current = false;
         return;
      }

      const formValidation =() => {
         const firstNameValidation = /^[a-zA-Z]+$/ig.test(firstName);
         const lastNameValidation = /^[a-zA-Z]+$/ig.test(lastName);
         const emailValidation = !/\S+@\S+\.\S+/.test(email);
         const passwordValidation = /[a-zA-Z0-9]/.test(password);

         if (!firstNameValidation) {
            setErrorFirstName("First Name cannot be empty");
            console.log("error on first name!")
         } else {
            setErrorFirstName(null);
            console.log("no error on first name")
         }

          if (!lastNameValidation) {
            setErrorLastName("Last Name cannot be empty");
            console.log("error on last name!")
         } else {
            setErrorLastName(null);
            console.log("no error on last name")
         }

         if (emailValidation) {
            setErrorEmail("Looks like this is not an email");
            console.log("error on email!")
         } else {
            setErrorEmail(null);
            console.log("no error on email!")
         }

         if (!passwordValidation) {
            setErrorPassword("Password cannot be empty");
            console.log("error on password!")
         } else {
            setErrorPassword(null);
            console.log("error on password!")
         }
      };
      setDisabled(formValidation());
    }, [firstName, lastName, email, password]);
 

   return (
      <section>
         <button className="trial">
            <span>Try it free 7 days</span> then $20/mo. thereafter
         </button>
         <form onSubmit={onSubmit}>
            <div className={errorFirstName ? 'input-container border-red' : 'input-container'}>
               <input 
                  placeholder="First Name"
                  type="text" 
                  name="firstName"
                  value={firstName}
                  onChange={e => setFirstName(e.target.value)}
               />
               {errorFirstName && <img className="error-img" src={errorIcon} alt="error: enter valid first name" />}
            </div>
            <div className={errorLastName ? 'input-container border-red' : 'input-container'}>
               <input 
                  placeholder="Last Name"
                  type="text" 
                  name="lastName"
                  value={lastName}
                  onChange={e => setLastName(e.target.value)}
               />
               {errorLastName && <img className="error-img" src={errorIcon} alt="error: enter valid last name" />}
            </div>
            <div className={errorEmail ? 'input-container border-red' : 'input-container'}>
               <input 
                  placeholder="Email Address"
                  type="email"
                  name="email"           
                  value={email} 
                  onChange={e => setEmail(e.target.value)}
               />
               {errorEmail && <img className="error-img" src={errorIcon}alt="error: enter valid email" />}
            </div>
            <div className={errorPassword ? 'input-container border-red' : 'input-container'}>
               <input 
                  placeholder="Password"
                  type="password"
                  name="password"           
                  value={password} 
                  onChange={e => setPassword(e.target.value)}
               />
               {errorPassword && <img className="error-img" src={errorIcon} alt="error: a password between 6-16 characters long" />}
            </div>
            <button className="submit" type="submit">
               Claim your free trial
            </button>
            <p>By clicking the button, you are agreeing to our <span>Terms and Services</span></p>
         </form>
      </section>
   )
}