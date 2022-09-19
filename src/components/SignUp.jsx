import React from "react";
import { Icon } from '@iconify/react';
import { Link } from "react-router-dom";
import SignUpFormComp from "./SignUpForm";


function SignUpPage(){
     const [signupStatus, setSignupStatus] = React.useState({})
     function onSubmitSignup(res){
          setSignupStatus(res)
     }
     React.useEffect(()=>{
          console.log(signupStatus)
     }, [signupStatus])
     return(
          <div className="formContainer">
          <SignUpFormComp onNameSubmit={onSubmitSignup} onEmailSubmit={onSubmitSignup}onUsernameSubmit={onSubmitSignup}onPasswordSubmit={onSubmitSignup} onConfirmPassSubmit={onSubmitSignup} onCheckboxSubmit={onSubmitSignup} />
          <div className="linkPos">
               <Link to="/signin" className="link">Sign In <Icon icon="akar-icons:arrow-right"/></Link>
          </div>
          </div>
     )
}

// 

export default SignUpPage