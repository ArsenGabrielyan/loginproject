const regex = {// eslint-disable-next-line
     email:  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
     date: /^\d{4}-\d{2}-\d{2}$/,
     pass: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/i,
     phone:  /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/
}
const nameValid = formData => !(!formData.name || formData.name.length <= 2)
const usernameValid = formData => !(!formData.username || formData.username.length <= 2)
const telValid = formData => !(!formData.phone || !regex.phone.test(formData.phone))
const confirmPassValid = formData => !(!formData.confirmPass || formData.pass !== formData.confirmPass)
const checkBoxValid = formData => !(!formData.agreed)
const passValid = formData => !(!formData.pass || !regex.pass.test(formData.pass))
const fileValid = formData => !(!formData.selectedFile)
const dateValid = formData => !(!formData.birthDate || !regex.date.test(formData.birthDate))
const emailValid = formData => !(!formData.email || !regex.email.test(formData.email));
export const signupValid = (formData)=> ({
     isNameValid: nameValid(formData),
     isEmailValid: emailValid(formData),
     isUsernameValid: usernameValid(formData),
     isPasswordValid: passValid(formData),
     isConfirmPassValid: confirmPassValid(formData),
     isCheckBoxValid: checkBoxValid(formData),
     isDateValid: dateValid(formData),
     isPhoneValid: telValid(formData),
     isFileValid: fileValid(formData)
})