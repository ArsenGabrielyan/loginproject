import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component{
     constructor(props){
          super(props);
          this.handleClick = this.handleClick.bind(this)
     }
     handleClick(){
          document.getElementById("navbar").classList.toggle("active")
          document.getElementById("toggler").classList.toggle("active")
          document.getElementById("header").classList.toggle("active")
     }
     render(){
          return(
               <div className="profile-page">
                     <header className="profileHeader2" id="header">
                    <div className="left">
                         <h1 className="logo">MEETME</h1>
                    </div>
                    <div className="right" id="navbar">
                         <ul className="linkList">
                              <li className="linkItem"><Link to="/signin" className="link">SIGN IN</Link></li>
                              <li className="linkItem"><Link to="/signup" className="link">SIGN UP</Link></li>
                         </ul>
                    </div>
                    <span className="toggleIcon" id="toggler" onClick={this.handleClick}>
                         <span></span><span></span><span></span>
                    </span>
               </header>
               <div className="homeContainer">
                         <h1>Welcome to MEETME</h1>
                         <h2>Sign up or Sign in to Join the Meet</h2>
                    </div>
               </div>
          )
     }
}

export default Home