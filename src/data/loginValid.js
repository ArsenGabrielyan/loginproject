export function emailValidation(loginData){
     const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i; //eslint-disable-line
     return !(!loginData.email || !regex.test(loginData.email));
}
export const passwordValidation = (loginData) => !(!loginData.password || loginData.password.length < 8);