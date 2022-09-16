import React from "react";
import { Icon } from '@iconify/react';
// import { Formik } from "formik";
// import * as Yup from "yup"
import { Link } from "react-router-dom";

import EmailValidComp from "./emailValid";

// const signinSchema = Yup.object().shape({
//      email: Yup.string().email("Invalid Email").required("Required"),
//      password: Yup.string().min(3, "Password Must Be at 3 Char Long").required("Required"),
// })

function SignInPage(){
     const [emailStatus, setEmailStatus] = React.useState({});
     const [passwordStatus, setPasswordStatus] = React.useState({})
     function onSubmitLogin(res){
          setEmailStatus(res)
          setPasswordStatus(res)
     }
     React.useEffect(()=>{
          console.log(emailStatus)
          console.log(passwordStatus)
     }, [emailStatus,passwordStatus])
     return(
          <>
          <div className="bg2"></div>
                <div className="loginContainer">
                <h2>Sign In</h2>
               <EmailValidComp onEmailSubmit={onSubmitLogin} onPassSubmit={onSubmitLogin}/>
               <div className="linkPos">
               <Link to="/" className="link">Sign Up <Icon icon="akar-icons:arrow-right"/></Link>
          </div>
          </div>
          </>
          )
}

export default SignInPage