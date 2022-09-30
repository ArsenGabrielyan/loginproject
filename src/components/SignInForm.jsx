import React, {useState} from "react";
import {useNavigate } from "react-router-dom";

function SignInFormComp(){
     const [email, setEmail] = useState("")
     const [password, setPassword] = useState("")
     const [isValidEmail, setIsValidEmail] = useState(false)
     const [isValidPassword, setIsValidPassword] = useState(false)
     const [message1, setMessage1] = useState("")
     const [message2, setMessage2] = useState("")
     const navigate = useNavigate()
     const [message, setMessage] = useState("")

     function handleChangeEmail(e){setEmail(e.target.value)}
     function handleChangePass(e){setPassword(e.target.value)}
     function emailValidation(){
          const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i; //eslint-disable-line
          return !(!email || regex.test(email) !== true);
     }
     function passwordValidation(){return !(!password || password.length <= 8)}
     function handleSubmitLogin(e){
          e.preventDefault()
          const isPassValid = passwordValidation();
          const isEmailValid = emailValidation();
          setIsValidPassword(isPassValid)
          setMessage2(isPassValid ? "" : "Invalid Password")
          setIsValidEmail(isEmailValid)
          setMessage1(isEmailValid ? "" : "Invalid Email")
          if(isValidEmail && isValidPassword){
               fetch("http://localhost:3010/users").then(res => res.json())
               .then(data => {
                    for(let i=0; i<data.length; i++){
                         if(data[i].email === email && (data[i].password === password || data[i].confirmPassword === password)){
                              localStorage.setItem("user", JSON.stringify(data[i]))
                              navigate("/profile")
                              window.location.reload()
                         }
                         if(data[i].email !== email || (data[i].password !== password || data[i].confirmPassword !== password)){
                              setMessage("Cannot Log in")
                         } else{
                              setMessage("")
                         }
                    }
               })
          } 
     }
     return(
          <>
               <form className="frm" onSubmit={handleSubmitLogin}>
               <p className="validError">{message1}</p>
               <label htmlFor="email" className="labelBox">Email</label>
                    <input type="email" name="email"  id="email" placeholder="Email address..." className="inputBox" onChange={handleChangeEmail} value={email} />
                    <p className="validError">{message2}</p>
                    <label htmlFor="pass" className="labelBox">Password</label>
                    <input type="password" name="pass"  id="password" placeholder="****************" className="inputBox" onChange={handleChangePass} value={password} />
                    <button type="submit" className="loginBtn">Sign In</button>
               </form>
               {message && (
                    <p className="validError">{message}</p>
               )}
               </>
     )
}

export default SignInFormComp