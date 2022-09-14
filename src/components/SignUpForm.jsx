import React from "react";

class SignUpForm extends React.Component{
     render(){
          return(
               <div className="formContainer">
               <form className="frm">
                    <label htmlFor="name" className="labelBox">Full Name</label>
                    <input type="text" name="name" placeholder="Name..." className="inputBox"/>
                    <label htmlFor="email" className="labelBox">Email</label>
                    <input type="email" name="email" placeholder="Email address..." className="inputBox"/>
                    <label htmlFor="username" className="labelBox">Username</label>
                    <input type="text" name="username" placeholder="Username..." className="inputBox"/>
                    <label htmlFor="pass" className="labelBox">Password</label>
                    <input type="password" name="pass" placeholder="****************" className="inputBox"/>
                    <label htmlFor="confirmPass" className="labelBox">Repeat Password</label>
                    <input type="password" name="confirmPass" placeholder="****************" className="inputBox"/>
                    <span className="agreedCheckBox">
                         <input type="checkbox" name="agreed" className="agreeCheck"/>
                         <span className="agreeBox"></span>
                         <span className="agreeText">I agree to the <span className="midBold">Terms of User</span></span>
                    </span>
                    <button type="submit" className="loginBtn">Sign Up</button>
               </form>
               <a href="#">Sign In</a>
               </div>
               
          )
     }
}

export default SignUpForm