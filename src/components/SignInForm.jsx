import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux"
import { Navigate } from "react-router-dom";
import {login} from "../actions/auth"

function SignInFormComp(props){
     const [email, setEmail] = useState("")
     const [password, setPassword] = useState("")
     const [isValidEmail, setIsValidEmail] = useState(false)
     const [isValidPassword, setIsValidPassword] = useState(false)
     const [message1, setMessage1] = useState("")
     const [message2, setMessage2] = useState("")

     const {isLoggedIn} = useSelector(state => state.auth)

     const {message} = useSelector(state => state.message)

     const dispatch = useDispatch()

     function handleChangeEmail(e){
          setEmail(e.target.value)
     }
     function handleChangePass(e){
          setPassword(e.target.value)
     }
     function emailValidation(){
          const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i; //eslint-disable-line
          return !(!email || regex.test(email) !== true);
     }
     function passwordValidation(){return !(!password || password.length <= 8)}
     function handleSubmitLogin(){
          const isPassValid = passwordValidation();
          const isEmailValid = emailValidation();
          setIsValidPassword(isPassValid)
          setMessage2(isPassValid ? "" : "Invalid Password")
          setIsValidEmail(isEmailValid)
          setMessage1(isEmailValid ? "" : "Invalid Email")
          if(isValidEmail && isValidPassword){
               dispatch(login(email, password))
               .then(()=>{
                    props.history.push("/profile");
                    window.location.reload();
               })
               console.log(email, password)
          } 
          if(isLoggedIn){
               return <Navigate to="/profile" />
          }
     }
     function handlePreventDef(e){
          e.preventDefault()
     }
     return(
          <>
               <form className="frm" onSubmit={handlePreventDef}>
               <p className="validError">{message1}</p>
               <label htmlFor="email" className="labelBox">Email</label>
                    <input type="email" name="email"  id="email" placeholder="Email address..." className="inputBox" onChange={handleChangeEmail} value={email} />
                    <p className="validError">{message2}</p>
                    <label htmlFor="pass" className="labelBox">Password</label>
                    <input type="password" name="pass"  id="password" placeholder="****************" className="inputBox" onChange={handleChangePass} value={password} />
                    <button type="submit" className="loginBtn" onClick={() => handleSubmitLogin()}>Sign In</button>
               </form>
               {message && (
                    <p className="validError">{message}</p>
               )}
               </>
     )
}

export default SignInFormComp