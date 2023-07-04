const nameValid = (formData) => !(!formData.name || formData.name.length <= 2)
const usernameValid = (formData) => !(!formData.username || formData.username.length <= 2)
const telValid = (formData) => !(!formData.phone || formData.phone.length <= 2)
const confirmPassValid = (formData) => !(!formData.confirmPass || formData.pass !== formData.confirmPass)
const checkBoxValid = (formData) => !(!formData.agreed)
const passValid = (formData) => !(!formData.pass || formData.pass.length < 8)
function dateValid(formData){
     const regex =  /^\d{4}-\d{2}-\d{2}$/;
     return !(!formData.birthDate || !regex.test(formData.birthDate))
} 
function emailValid(formData){// eslint-disable-next-line
     const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i; 
     return !(!formData.email || !regex.test(formData.email));
} 
function fileValid(formData){
     const regex =  /(\.jpg|\.jpeg|\.png|\.gif|\.webp)$/i
     return !(!formData.selectedFile || regex.exec(formData.selectedFile))
}
export const isEverythingValid = (formData)=> ({
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