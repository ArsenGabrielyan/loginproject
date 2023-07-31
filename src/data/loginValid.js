const regex = {// eslint-disable-next-line
     email:  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
     pass: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/i
}
const emailValidation = (loginData) => !(!loginData.email || !regex.email.test(loginData.email));
const passwordValidation = (loginData) => !(!loginData.password || !regex.pass.test(loginData.password));
export const loginValid = (loginData) => ({
     isPassValid: passwordValidation(loginData),
     isEmailValid: emailValidation(loginData)
})