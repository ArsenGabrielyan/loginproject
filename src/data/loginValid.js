const regex = {// eslint-disable-next-line
     email:  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
     pass: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/i
}
export const emailValidation = (loginData) => !(!loginData.email || !regex.email.test(loginData.email));
export const passwordValidation = (loginData) => !(!loginData.password || !regex.pass.test(loginData.password));