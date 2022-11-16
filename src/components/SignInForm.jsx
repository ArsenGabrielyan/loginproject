import React, {useState} from "react";
import {useNavigate } from "react-router-dom";

function SignInFormComp(){
     const [loginData, setLoginData] = useState({
          email: "",
          password: ""
     })
     const [msgLogin, setMsgLogin] = useState({
          message1: "",
          message2: ""
     })
     const navigate = useNavigate()
     const [message, setMessage] = useState("")

     function handleChange(e){
          setLoginData({...loginData, [e.target.name]: e.target.value})
     }
     function emailValidation(){
          const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i; //eslint-disable-line
          return !(!loginData.email || regex.test(loginData.email) !== true);
     }
     function passwordValidation(){return !(!loginData.password || loginData.password.length <= 8)}
     function handleSubmitLogin(e){
          e.preventDefault()
          const isPassValid = passwordValidation();
          const isEmailValid = emailValidation();
          setMsgLogin({
               message1: isEmailValid ? "" : "Invalid Email",
               message2: isPassValid ? "" : "Invalid Password"
          })
          const isValidLogin = [isEmailValid, isPassValid].every(val => val === true)
          if(isValidLogin){
               fetch("http://localhost:3010/users").then(res => res.json())
               .then(data => {
                    for(let i=0; i<data.length; i++){
                         if(data[i].email === loginData.email && (data[i].password === loginData.password || data[i].confirmPassword === loginData.password)){
                              localStorage.setItem("user", JSON.stringify(data[i]))
                              navigate("/profile")
                              window.location.reload()
                         }
                         if(data[i].email !== loginData.email || (data[i].password !== loginData.password || data[i].confirmPassword !== loginData.password)){
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
               <p className="validError">{msgLogin.message1}</p>
               <label htmlFor="email" className="labelBox">Email</label>
                    <input type="email" name="email"  id="email" placeholder="Email address..." className="inputBox" onChange={handleChange} value={loginData.email} />
                    <p className="validError">{msgLogin.message2}</p>
                    <label htmlFor="password" className="labelBox">Password</label>
                    <input type="password" name="password"  id="password" placeholder="****************" className="inputBox" onChange={handleChange} value={loginData.password} />
                    <button type="submit" className="loginBtn">Sign In</button>
               </form>
               {message && (
                    <p className="validError">{message}</p>
               )}
               </>
     )
}

export default SignInFormComp