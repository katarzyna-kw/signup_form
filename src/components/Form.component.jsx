import React from 'react'
import './Form.css'

export default function Form() {
   return (
      <section>
         <button className="trial">
            <span>Try it free 7 days</span> then $20/mo. thereafter
         </button>
         <form>
            <input 
               placeholder="First Name"
               type="text" 
               name="firstName"
               //  value={firstName}
               //  onChange={e => setFirstName(e.target.value)}
            />
            <input 
               placeholder="Last Name"
               type="text" 
               name="lastName"
               //  value={lastName}
               //  onChange={e => setLastName(e.target.value)}
            />
            <input 
               placeholder="Email Address"
               type="email"
               name="email"           
               // value={email} 
               // onChange={e => setEmail(e.target.value)}
            />
            <input 
               placeholder="Password"
               type="password"
               name="password"           
               // value={password} 
               // onChange={e => setPassword(e.target.value)}
            />
            <button className="submit" type="submit">
               Claim your free trial
            </button>
            <p>By clicking the button, you are agreeing to our <span>Terms and Services</span></p>
         </form>
      </section>
   )
}