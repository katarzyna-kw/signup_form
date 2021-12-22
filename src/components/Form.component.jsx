import React, {useState} from 'react'
import useForm from './useForm'
import validate from './validate'
import './Form.css'
import errorIcon from '../img/icon-error.svg'


export default function Form() {

   const [isSubmitted, setIsSubmitted] = useState(false);

   const submitForm = () => {
      setIsSubmitted(true)
      setTimeout(() => {window.location.reload()}, 1000);
   }

   const {handleChange, values, handleSubmit, errors} = useForm(
      submitForm, 
      validate
   );


   return (
      <section>
         <button className="trial">
            <h4><span>Try it free 7 days</span> then $20/mo. thereafter</h4>
         </button>
         <form onSubmit={handleSubmit}>
            <div className={errors.firstName ? 'input-container border-red' : 'input-container'}>
               <input 
                  className={errors.firstName ? 'input error' : 'input'}
                  placeholder="First Name"
                  type="text" 
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
               />
               {errors.firstName && <img className="error-img" src={errorIcon} alt="error: enter valid first name" />}
            </div>
            {errors.firstName && <label className="error-text">{errors.firstName}</label>}
            <div className={errors.lastName ? 'input-container border-red' : 'input-container'}>
               <input 
                  className={errors.lastName ? 'input error' : 'input'}
                  placeholder="Last Name"
                  type="text" 
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
               />
               {errors.lastName && <img className="error-img" src={errorIcon} alt="error: enter valid last name" />}
            </div>
            {errors.lastName && <label className="error-text">{errors.lastName}</label>}
            <div className={errors.email ? 'input-container border-red' : 'input-container'}>
               <input 
                  className={errors.email ? 'input error' : 'input'}
                  placeholder="Email Address"
                  type="email"
                  name="email"           
                  value={values.email} 
                  onChange={handleChange}
               />
               {errors.email && <img className="error-img" src={errorIcon}alt="error: enter valid email" />}
            </div>
            {errors.email && <label className="error-text">{errors.email}</label>}
            <div className={errors.password ? 'input-container border-red' : 'input-container'}>
               <input 
                  className={errors.password ? 'input error' : 'input'}
                  placeholder="Password"
                  type="password"
                  name="password"
                  value={values.password} 
                  onChange={handleChange}
               />
               {errors.password && <img className="error-img" src={errorIcon} alt="error: a password between 6-16 characters long" />}
            </div>
            {errors.password && <label className="error-text">{errors.password}</label>}
            <button className="submit" type="submit">
               Claim your free trial
            </button>
            {isSubmitted && <p><span>Thank you for registering!</span></p>}
            <p>By clicking the button, you are agreeing to our <span>Terms and Services</span></p>
         </form>
      </section>
   )
}