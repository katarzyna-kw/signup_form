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
      <section className="form__container">
         <div className="form__btn form__btn--trial">
            <h3 class="form__btn--trial-text"><span>Try it free 7 days</span> then $20/mo. thereafter</h3>
         </div>
         <form onSubmit={handleSubmit}>
            <div className={errors.firstName ? 'form__input-container border-red' : 'form__input-container'}>
               <input 
                  className={errors.firstName ? 'form__input error' : 'form__input'}
                  placeholder="First Name"
                  type="text" 
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
               />
               {errors.firstName && <img className="error-img" src={errorIcon} alt="error: enter valid first name" />}
            </div>
            {errors.firstName && <label className="error__text">{errors.firstName}</label>}
            <div className={errors.lastName ? 'form__input-container border-red' : 'form__input-container'}>
               <input 
                  className={errors.lastName ? 'form__input error' : 'form__input'}
                  placeholder="Last Name"
                  type="text" 
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
               />
               {errors.lastName && <img className="error-img" src={errorIcon} alt="error: enter valid last name" />}
            </div>
            {errors.lastName && <label className="error__text">{errors.lastName}</label>}
            <div className={errors.email ? 'form__input-container border-red' : 'form__input-container'}>
               <input 
                  className={errors.email ? 'form__input error' : 'form__input'}
                  placeholder="Email Address"
                  type="email"
                  name="email"           
                  value={values.email} 
                  onChange={handleChange}
               />
               {errors.email && <img className="error-img" src={errorIcon}alt="error: enter valid email" />}
            </div>
            {errors.email && <label className="error__text">{errors.email}</label>}
            <div className={errors.password ? 'form__input-container border-red' : 'form__input-container'}>
               <input 
                  className={errors.password ? 'form__input error' : 'form__input'}
                  placeholder="Password"
                  type="password"
                  name="password"
                  value={values.password} 
                  onChange={handleChange}
               />
               {errors.password && <img className="error-img" src={errorIcon} alt="error: a password between 6-16 characters long" />}
            </div>
            {errors.password && <label className="error__text">{errors.password}</label>}
            <button className="form__btn form__btn--submit" type="submit">
               Claim your free trial
            </button>
            {isSubmitted && <p className="form__text"><span>Thank you for registering!</span></p>}
            <p className="form__text">By clicking the button, you are agreeing to our <span>Terms and Services</span></p>
         </form>
      </section>
   )
}