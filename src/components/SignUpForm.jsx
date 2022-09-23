import React, {useState} from "react";
import {register} from "../actions/auth";

function SignUpFormComp(){
     const [name, setName] = useState("")
     const [email, setEmail] = useState("")
     const [username, setUsername] = useState("")
     const [pass, setPass] = useState("")
     const [confirmPass, setConfirmPass] = useState("")
     const [agreed, setAgreed] = useState(false)
     const [birthDate, setBirthDate] = useState("")
     const [phone, setPhone] = useState("")

     const [isValidName, setIsValidName] = useState(false)
     const [isValidEmail, setIsValidEmail] = useState(false)
     const [isValidUsername, setIsValidUsername] = useState(false)
     const [isValidPass, setIsValidPass] = useState(false)
     const [isPassConfirmed, setIsPassConfirmed] = useState(false)
     const [isCheckboxChecked, setIsCheckboxChecked] = useState(false)
     const [isValidDate, setIsValidDate] = useState(false)
     const [isValidPhone, setIsValidPhone] = useState(false)

     const [msgName, setMsgName] = useState("")
     const [msgEmail, setMsgEmail] = useState("")
     const [msgUsername, setMsgUsername] = useState("")
     const [msgPass, setMsgPass] = useState("")
     const [msgConfirmPass, setMsgConfirmPass] = useState("")
     const [msgCheckbox, setMsgCheckbox] = useState("")
     const [message, setMessage] = useState("")
     const [msgDate, setMsgDate] = useState("")
     const [msgPhone, setMsgPhone] = useState("")

     const [successful, setSuccessful] = useState(false)

     function handleChangeName(e){setName(e.target.value)}
     function handleChangeEmail(e){setEmail(e.target.value)}
     function handleChangeUsername(e){setUsername(e.target.value)}
     function handleChangePass(e){setPass(e.target.value)}
     function handleChangeConfirmPass(e){setConfirmPass(e.target.value)}
     function handleChangeCheckbox(e){setAgreed(e.target.checked)}
     function handleChangePhone(e){setPhone(e.target.value)}
     function handleChangeDate(e){setBirthDate(e.target.value)}
     function nameValid(){return !(!name || name.length <= 2)}
     function usernameValid(){return !(!username || username.length <= 2)}
     function telValid(){return !(!phone || phone.length <= 2)}
     function dateValid(){const regex =  /^\d{4}-\d{2}-\d{2}$/;return !(!birthDate || !regex.test(birthDate))} // eslint-disable-next-line
     function emailValid(){const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i; return !(!email || regex.test(email) === false);} // eslint-disable-next-line
     function passValid(){return !(!pass || pass.length <= 8)}
     function confirmPassValid(){return !(!confirmPass || pass !== confirmPass)}
     function checkBoxValid(){return !(!agreed)}
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

          setIsValidName(isNameValid)
          setMsgName(isNameValid ? "" : "Invalid Name")

          setIsValidEmail(isEmailValid)
          setMsgEmail(isEmailValid ? "" : "Invalid Email")

          setIsValidUsername(isUsernameValid)
          setMsgUsername(isUsernameValid ? "" : "Invalid Username")

          setIsValidPass(isPasswordValid)
          setMsgPass(isPasswordValid ? "" : "Invalid Password")

          setIsPassConfirmed(isConfirmPassValid)
          setMsgConfirmPass(isConfirmPassValid ? "" : "Password Doesn't Match")

          setIsCheckboxChecked(isCheckBoxValid)
          setMsgCheckbox(isCheckBoxValid ? "" : "You Need To Accept the Terms")

          setIsValidPhone(isPhoneValid)
          setMsgPhone(isPhoneValid ? "": "Invalid Phone Number")

          setIsValidDate(isDateValid)
          setMsgDate(isDateValid ? "" : "Invalid Date")

          if(isValidName && isValidEmail && isValidUsername && isValidDate && isValidPhone && isValidPass && isPassConfirmed && isCheckboxChecked){
               console.log(name, email, username,birthDate,phone, pass, confirmPass, agreed)
               register(name,email,username,birthDate,phone,pass,confirmPass,agreed)
          }
     }
     return(
          <>
           <form className="frm" onSubmit={handleSubmitSignUp}>
               {!successful && (
                    <>
                         <p className="validError">{msgName}</p>
               <label htmlFor="name" className="labelBox">Full Name</label>
               <input 
               type="text" 
               name="name"  
               id="fullName" placeholder="Name..." className="inputBox" 
               onChange={handleChangeName} value={name} />
               <p className="validError">{msgEmail}</p>
               <label htmlFor="email" className="labelBox">Email</label>
               <input type="email" name="email"  id="email" placeholder="Email address..." className="inputBox" onChange={handleChangeEmail} value={email} />
               <p className="validError">{msgUsername}</p>
               <label htmlFor="username" className="labelBox">Username</label>
               <input type="text" name="username"  id="userName" placeholder="Username..." className="inputBox" onChange={handleChangeUsername} value={username}/>
               <p className="validError">{msgDate}</p>
               <label htmlFor="date" className="labelBox">Birth Date</label>
               <input type="date" name="date" id="date"className="inputBox" onChange={handleChangeDate} value={birthDate}/>

               <p className="validError">{msgPhone}</p>
               <label htmlFor="phone" className="labelBox">Phone Number</label>
               <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}" name="phone" id="phone" placeholder="Phone Number..." className="inputBox" onChange={handleChangePhone} value={phone}/>
               <p className="validError">{msgPass}</p>
               <label htmlFor="pass" className="labelBox">Password</label>
               <input type="password" name="pass"  id="password" placeholder="****************" className="inputBox" onChange={handleChangePass} value={pass} />
               <p className="validError">{msgConfirmPass}</p>
               <label htmlFor="confirmPass" className="labelBox">Repeat Password</label>
               <input type="password" name="confirmPass" id="confirmPassword" placeholder="****************" className="inputBox" onChange={handleChangeConfirmPass} value={confirmPass}/>
               <span className="agreedCheckBox">
                    <p className="validError">{msgCheckbox}</p>
                    <input type="checkbox" name="agreed" className="agreeCheck" checked={agreed} onChange={handleChangeCheckbox}/>
                    <label htmlFor="agreed" className="agreeText">I agree to the <span className="midBold">Terms of User</span></label>
               </span>
               <button type="submit" className="loginBtn">Sign Up</button>
                    </>
               )}
               {message && (
                    <p className={successful ? "validSuccess" : "validError"}>{message}</p>
               )}
          </form>
          </>
     )
}

export default SignUpFormComp