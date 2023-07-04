import React, {useState} from "react";
import {useNavigate } from "react-router-dom";
import {passwordValidation, emailValidation} from "../data/loginValid";
import {DB_URL} from "../data/constants";

export default function SignInFormComp(){
     const [loginData, setLoginData] = useState({email: "",password: ""})
     const [msgLogin, setMsgLogin] = useState({message1: "",message2: ""})
     const [message, setMessage] = useState("")
     const navigate = useNavigate();
     
     const handleChange = (e) => setLoginData({...loginData, [e.target.name]: e.target.value});
     function handleSubmitLogin(e){
          e.preventDefault()
          const isPassValid = passwordValidation(loginData);
          const isEmailValid = emailValidation(loginData);
          setMsgLogin({
               message1: isEmailValid ? "" : "Invalid Email",
               message2: isPassValid ? "" : "Invalid Password"
          })
          const isValidLogin = [isEmailValid, isPassValid].every(val => val);
          if(isValidLogin){
               fetch(DB_URL).then(res=>res.json())
               .then(data => data.forEach(val=>{
                    if(val.email === loginData.email && (val.pass === loginData.password || val.confirmPass=== loginData.password)){
                         localStorage.setItem("user", JSON.stringify(val))
                         navigate("/profile")
                         window.location.reload()
                    }
                    setMessage(val.email !== loginData.email || (val.pass !== loginData.password || val.confirmPass!== loginData.password) ? "User Not Found" : "")
               }))
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
               {message && <p className="validError">{message}</p>}
          </>
     )
}