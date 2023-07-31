import React, {useState} from "react";
import {useNavigate } from "react-router-dom";
import {loginValid} from "../data/loginValid";
import { login } from "../services/authService";

export default function SignInFormComp(){
     const [loginData, setLoginData] = useState({email: "",password: ""})
     const [msgLogin, setMsgLogin] = useState({msgEmail: "",msgPass: ""})
     const [message, setMessage] = useState("")
     const navigate = useNavigate();
     const handleChange = e => setLoginData({...loginData, [e.target.name]: e.target.value});
     const handleSubmitLogin = e=>{
          e.preventDefault()
          const isValid = loginValid(loginData);
          setMsgLogin({
               msgEmail: isValid.isEmailValid ? "" : "Email Format Isn't Valid",
               msgPass: isValid.isPassValid ? "" : "Password is Too Short"
          })
          if(Object.values(isValid).every(val=>val)) login(loginData,navigate,setMessage)
     }
     return(
          <>
               <form className="frm" onSubmit={handleSubmitLogin}>
               <p className="validError">{msgLogin.msgEmail}</p>
               <label htmlFor="email" className="labelBox">Email</label>
                    <input type="email" name="email"  id="email" placeholder="Email address..." className="inputBox" onChange={handleChange} value={loginData.email} />
                    <p className="validError">{msgLogin.msgPass}</p>
                    <label htmlFor="password" className="labelBox">Password</label>
                    <input type="password" name="password"  id="password" placeholder="****************" className="inputBox" onChange={handleChange} value={loginData.password} />
                    <button type="submit" className="loginBtn">Sign In</button>
               </form>
               {message && <p className="validError">{message}</p>}
          </>
     )
}