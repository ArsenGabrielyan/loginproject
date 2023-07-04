import { useState } from "react";
import { Link } from "react-router-dom";

export default function AdminHeader(){
     const [toggled, setToggled] = useState(false);
     return (
          <header className={toggled ? "profileHeader2 active" : "profileHeader2"}>
               <div className="left">
                   <h1 className="logo">MEETME</h1>
               </div>
               <div className={toggled ? "right active" : "right"}>
                   <ul className="linkList">
                        <li className="linkItem"><Link to="/profile" className="link">HOMEPAGE</Link></li>
                   </ul>
               </div>
               <span className={toggled ? "toggleIcon active" : "toggleIcon"} onClick={()=>setToggled(!toggled)}>
                   <span></span><span></span><span></span>
               </span>
          </header>
     )
}