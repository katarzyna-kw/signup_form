const validate = (values) => {
   let errors = {};

   const firstNameValidation = /^[a-zA-Z]+$/ig.test(values.firstName);
   const lastNameValidation = /^[a-zA-Z]+$/ig.test(values.lastName);
   const emailValidation = !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/ig.test(values.email);
   const passwordValidation = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(values.password);


   if (!values.firstName) {
      errors.firstName = "First Name cannot be empty"
   } else if (!firstNameValidation) {
      errors.firstName = "Enter a valid first name"
   }

   if (!values.lastName) {
      errors.lastName = "Last Name cannot be empty"
   } else if (!lastNameValidation) {
      errors.lastName = "Enter a valid last name"
   }

   if (!values.email) {
      errors.email = "Enter an email address"
   } else if (emailValidation) {
      errors.email = 'Looks like this is not an email';
   }

   if (!values.password) {
      errors.password = "Password cannot be empty"
   } else if (!passwordValidation) {
      errors.password = "Password must include a number and a special character"
   } else if (values.password.length < 5) {
      errors.password = "Password must be at least 6 characters long"
   }

   return errors;
}
export default validate;
