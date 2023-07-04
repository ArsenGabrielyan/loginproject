import SignUpPage from "./SignUp";

export default function MainPage(){
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