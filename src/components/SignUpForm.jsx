import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux"
import { Navigate } from "react-router-dom"
import {register} from "../actions/auth";

function SignUpFormComp(props){
     const [name, setName] = useState("")
     const [email, setEmail] = useState("")
     const [username, setUsername] = useState("")
     const [pass, setPass] = useState("")
     const [confirmPass, setConfirmPass] = useState("")
     const [agreed, setAgreed] = useState(false)

     const [isValidName, setIsValidName] = useState(false)
     const [isValidEmail, setIsValidEmail] = useState(false)
     const [isValidUsername, setIsValidUsername] = useState(false)
     const [isValidPass, setIsValidPass] = useState(false)
     const [isPassConfirmed, setIsPassConfirmed] = useState(false)
     const [isCheckboxChecked, setIsCheckboxChecked] = useState(false)

     const [msgName, setMsgName] = useState("")
     const [msgEmail, setMsgEmail] = useState("")
     const [msgUsername, setMsgUsername] = useState("")
     const [msgPass, setMsgPass] = useState("")
     const [msgConfirmPass, setMsgConfirmPass] = useState("")
     const [msgCheckbox, setMsgCheckbox] = useState("")

     const [successful, setSuccessful] = useState(false)

     const {isLoggedIn} = useSelector(state => state.auth)

     const {message} = useSelector(state => state.message)

     const dispatch = useDispatch()

     function handleChangeName(e){setName(e.target.value)}
     function handleChangeEmail(e){setEmail(e.target.value)}
     function handleChangeUsername(e){setUsername(e.target.value)}
     function handleChangePass(e){setPass(e.target.value)}
     function handleChangeConfirmPass(e){setConfirmPass(e.target.value)}
     function handleChangeCheckbox(e){setAgreed(e.target.checked)}
     function nameValid(){return !(!name || name.length <= 2)}
     function usernameValid(){return !(!username || username.length <= 2)}
     function emailValid(){
          const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;  //eslint-disable-line
          return !(!email || regex.test(email) === false);
     }
     function passValid(){return !(!pass || pass.length <= 8)}
     function confirmPassValid(){return !(!confirmPass || pass !== confirmPass)}
     function checkBoxValid(){return !(!agreed)}
     function handleSubmitSignUp(){
          setSuccessful(false)
          const isNameValid = nameValid()
          const isEmailValid = emailValid()
          const isUsernameValid = usernameValid()
          const isPasswordValid = passValid()
          const isConfirmPassValid = confirmPassValid()
          const isCheckBoxValid = checkBoxValid()

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

          if(isValidName && isValidEmail && isValidUsername && isValidPass && isPassConfirmed && isCheckboxChecked){
               console.log(name, email, username, pass, confirmPass, agreed)
               dispatch(register(name,email,username,pass,confirmPass,agreed))
               .then(()=>{
                    setSuccessful(true)
               })
               .catch(()=>{
                    setSuccessful(false)
               })
          }
     }
     function handlePreventDef(e){
          e.preventDefault()
     }
     return(
          <>
           <form className="frm" onSubmit={handlePreventDef}>
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
               <button type="submit" className="loginBtn" onClick={() => {handleSubmitSignUp()}}>Sign Up</button>
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