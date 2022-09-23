import React from "react";
import { Icon } from '@iconify/react';
import { Link } from "react-router-dom";
import SignInFormComp from "./SignInForm";

function SignInPage(){
     return(
          <div className="grid">
          <div className="bg2"></div>
                <div className="loginContainer">
                <h2>Sign In</h2>
               <SignInFormComp />
               <div className="linkPos">
               <Link to="/signup" className="link">Sign Up <Icon icon="akar-icons:arrow-right"/></Link>
          </div>
          </div>
          </div>
          )
}

export default SignInPage