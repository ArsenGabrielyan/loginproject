import { useState } from "react";
import { Link } from "react-router-dom";

export default function Home(){
     const [toggled, setToggled] = useState(false);
     return(
          <div className="profile-page">
               <header className={toggled ? "profileHeader2 active" : "profileHeader2"}>
               <div className="left"><h1 className="logo">MEETME</h1></div>
               <div className={toggled ? "right active" : "right"} >
                    <ul className="linkList">
                         <li className="linkItem"><Link to="/signin" className="link">SIGN IN</Link></li>
                         <li className="linkItem"><Link to="/signup" className="link">SIGN UP</Link></li>
                    </ul>
               </div>
               <span className={toggled ? "toggleIcon active" : "toggleIcon"} onClick={()=>setToggled(!toggled)}><span></span><span></span><span></span></span>
               </header>
               <div className="homeContainer">
                    <h1>Welcome to MEETME</h1>
                    <h2>Sign up or Sign in to Join the Meet</h2>
               </div>
          </div>
     )
}