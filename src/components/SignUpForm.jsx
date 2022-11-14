import { Icon } from "@iconify/react";
import React, {useState, useRef} from "react";
import AuthService from "../services/authService";

function SignUpFormComp(){
     const [formData, setFormData] = useState({
          name: "",
          email: "",
          username: "",
          pass: "",
          confirmPass: "",
          agreed: false,
          birthDate: "",
          phone: "",
          selectedFile: "",
          isAdmin: false,
     })
     const [isValid, setIsValid] = useState({
          isValidName: false,
          isValidEmail: false,
          isValidUsername: false,
          isValidPass: false,
          isPassConfirmed: false,
          isCheckboxChecked: false,
          isValidDate: false,
          isValidPhone: false,
          isValidFile: false
     })
     const [msg, setMsg] = useState({
          msgName: "",
          msgEmail: "",
          msgUsername: "",
          msgPass: "",
          msgConfirmPass: "",
          msgCheckbox: "",
          msgDate: "",
          msgPhone: "",
          msgFile: ""
     })
     const [successful, setSuccessful] = useState(false)
     const fileInput = useRef(null)
     function resetForm(){
          let resetValues = {
               name: "",
               email: "",
               username: "",
               pass: "",
               confirmPass: "",
               agreed: false,
               birthDate: "",
               phone: "",
               selectedFile: "",
               isAdmin: false,
          }
          setFormData(formData => ({
               ...formData,
               ...resetValues
          }))
     }
     function handleChange(e){
          setFormData({...formData, [e.target.name]: e.target.value})
     }
     function handleChangeCheckbox(e){
          setFormData({...formData, [e.target.name]: e.target.checked})
     }
     async function handleChangeFile(){
          const files = fileInput.current?.files[0]
          const base64 = await convertFilesIntoBase64(files);
          setFormData({...formData, selectedFile: base64})
     }
     function convertFilesIntoBase64(file){
          return new Promise((resolve, reject)=>{
               const reader = new FileReader()
               reader.readAsDataURL(file)
               reader.onload = ()=>{
                    resolve(reader.result)
               }
               reader.onerror = (err)=>{
                    reject(err)
               }
          })
     }
     function nameValid(){return !(!formData.name || formData.name.length <= 2)}
     function usernameValid(){return !(!formData.username || formData.username.length <= 2)}
     function telValid(){return !(!formData.phone || formData.phone.length <= 2)}
     function dateValid(){const regex =  /^\d{4}-\d{2}-\d{2}$/;return !(!formData.birthDate || !regex.test(formData.birthDate))} // eslint-disable-next-line
     function emailValid(){const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i; return !(!formData.email || regex.test(formData.email) === false);} // eslint-disable-next-line
     function passValid(){return !(!formData.pass || formData.pass.length <= 8)}
     function clickUpload(){fileInput.current.click()}
     function fileValid(){
          const regex =  /(\.jpg|\.jpeg|\.png|\.gif|\.webp)$/i
          return !(!formData.selectedFile || regex.exec(formData.selectedFile))
     }
     function confirmPassValid(){return !(!formData.confirmPass || formData.pass !== formData.confirmPass)}
     function checkBoxValid(){return !(!formData.agreed)}
     function handleSubmitSignUp(e){
          e.preventDefault()
          setSuccessful(false)
          const isNameValid = nameValid()
          const isEmailValid = emailValid()
          const isUsernameValid = usernameValid()
          const isPasswordValid = passValid()
          const isConfirmPassValid = confirmPassValid()
          const isCheckBoxValid = checkBoxValid()
          const isDateValid = dateValid()
          const isPhoneValid = telValid()
          const isFileValid = fileValid()
          setIsValid({
               isValidName: isNameValid,
               isValidEmail: isEmailValid,
               isValidUsername: isUsernameValid,
               isValidPass: isPasswordValid,
               isPassConfirmed: isConfirmPassValid,
               isCheckboxChecked: isCheckBoxValid,
               isValidDate: isDateValid,
               isValidPhone: isPhoneValid,
               isValidFile: isFileValid
          })
          setMsg({
               msgName: isNameValid ? "" : "Invalid Name",
               msgEmail: isEmailValid ? "" : "Invalid Email",
               msgUsername: isUsernameValid ? "" : "Invalid Username",
               msgPass: isPasswordValid ? "" : "Invalid Password",
               msgConfirmPass: isConfirmPassValid ? "" : "Password Doesn't Match",
               msgCheckbox: isCheckBoxValid ? "" : "You Need To Accept the Terms",
               msgDate: isDateValid ? "" : "Invalid Date",
               msgPhone: isPhoneValid ? "": "Invalid Phone Number",
               msgFile: isFileValid ? "" : "Invalid File"
          })
          const isEverythingValid = Object.values(isValid).every(val => val === true)
          if(isEverythingValid){
               AuthService.register(formData.selectedFile,formData.name,formData.email,formData.username,formData.birthDate,formData.phone,formData.pass,formData.confirmPass,formData.agreed, formData.isAdmin)
               e.target.reset()
               resetForm()
          }
     }
     return(
          <>
           <form className="frm" onSubmit={handleSubmitSignUp}>
               {!successful && (
                    <>
                    <p className="validError">{msg.msgFile}</p>
                    <label htmlFor="uploadFile" className="labelBox">Profile Picture</label>
                    <button className="uploadBtn" onClick={clickUpload.bind(this)} type="button">
                         <Icon icon="fa-solid:upload" /> Upload
                    </button>
                    <input type="file" hidden name="file" id="uploadFile" className="inputBox" onChange={e => handleChangeFile(e)} ref={fileInput}/>
                    <label className="labelBox">Preview</label>
                    <br/>
                    <img src={formData.selectedFile} alt="Insert to Show" width="200" />
                    <br/>
                         <p className="validError">{msg.msgName}</p>
               <label htmlFor="name" className="labelBox">Full Name</label>
               <input 
               type="text" 
               name="name"  
               id="fullName" placeholder="Name..." className="inputBox" 
               onChange={handleChange} value={formData.name} />
               <p className="validError">{msg.msgEmail}</p>
               <label htmlFor="email" className="labelBox">Email</label>
               <input type="email" name="email"  id="email" placeholder="Email address..." className="inputBox" onChange={handleChange} value={formData.email} />
               <p className="validError">{msg.msgUsername}</p>
               <label htmlFor="username" className="labelBox">Username</label>
               <input type="text" name="username"  id="userName" placeholder="Username..." className="inputBox" onChange={handleChange} value={formData.username}/>
               <p className="validError">{msg.msgDate}</p>
               <label htmlFor="birthDate" className="labelBox">Birth Date</label>
               <input type="date" name="birthDate" id="date"className="inputBox" onChange={handleChange} value={formData.birthDate}/>
               <p className="validError">{msg.msgPhone}</p>
               <label htmlFor="phone" className="labelBox">Phone Number</label>
               <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}" name="phone" id="phone" placeholder="Phone Number..." className="inputBox" onChange={handleChange} value={formData.phone}/>
               <p className="validError">{msg.msgPass}</p>
               <label htmlFor="pass" className="labelBox">Password</label>
               <input type="password" name="pass"  id="password" placeholder="****************" className="inputBox" onChange={handleChange} value={formData.pass} />
               <p className="validError">{msg.msgConfirmPass}</p>
               <label htmlFor="confirmPass" className="labelBox">Repeat Password</label>
               <input type="password" name="confirmPass" id="confirmPassword" placeholder="****************" className="inputBox" onChange={handleChange} value={formData.confirmPass}/>
               <span className="agreedCheckBox">
                    <p className="validError">{msg.msgCheckbox}</p>
                    <input type="checkbox" name="agreed" className="agreeCheck" checked={formData.agreed} onChange={handleChangeCheckbox}/>
                    <label htmlFor="agreed" className="agreeText">I agree to the <span className="midBold">Terms of User</span></label>
               </span>
               <br/>
               <span className="agreedCheckBox">
                    <input type="checkbox" name="isAdmin" className="agreeCheck" checked={formData.isAdmin} onChange={handleChangeCheckbox}/>
                    <label htmlFor="IsAdmin" className="agreeText">Are you an Administrator of This Application?</label>
               </span>
               <button type="submit" className="loginBtn">Sign Up</button>
                    </>
               )}
          </form>
          </>
     )
}

export default SignUpFormComp