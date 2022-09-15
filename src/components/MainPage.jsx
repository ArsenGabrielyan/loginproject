import React from "react";
import SignUpForm from "./SignUpForm";

function MainPage(){
     return(
     <>
          <div className="bg"></div>
          <div className="loginContainer">
               <h2>Sign Up</h2>
               <SignUpForm />
          </div>
     </>
     )
}

export default MainPage