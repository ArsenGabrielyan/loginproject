import React from "react";
import SignUpPage from "./SignUp";

function MainPage(){
     return(
     <div className="grid">
          <div className="bg"></div>
          <div className="loginContainer">
               <h2>Sign Up</h2>
               <SignUpPage />
          </div>
     </div>
     )
}

export default MainPage