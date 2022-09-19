import React from "react";
import { Icon } from '@iconify/react';
import { Link } from "react-router-dom";
import SignInFormComp from "./SignInForm";

function SignInPage(){
     const [loginStatus, setLoginStatus] = React.useState({});
     function onSubmitLogin(res){
          setLoginStatus(res)
     }
     React.useEffect(()=>{
          console.log(loginStatus)
     }, [loginStatus])
     return(
          <>
          <div className="bg2"></div>
                <div className="loginContainer">
                <h2>Sign In</h2>
               <SignInFormComp onEmailSubmit={onSubmitLogin} onPassSubmit={onSubmitLogin}/>
               <div className="linkPos">
               <Link to="/signup" className="link">Sign Up <Icon icon="akar-icons:arrow-right"/></Link>
          </div>
          </div>
          </>
          )
}

export default SignInPage