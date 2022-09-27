import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component{
     render(){
          return(
               <div className="profile-page">
                     <header className="profileHeader">
                    <div className="left">
                         <h1 className="logo">MEETME</h1>
                    </div>
                    <div className="right">
                         <ul className="linkList">
                              <li className="linkItem"><Link to="/signin" className="link">SIGN IN</Link></li>
                              <li className="linkItem"><Link to="/signup" className="link">SIGN UP</Link></li>
                         </ul>
                    </div>
               </header>
               <div className="homeContainer">
                         <h1>Welcome to MEETME</h1>
                         <h2>Sign up or Sign in to Access</h2>
                    </div>
               </div>
          )
     }
}

export default Home