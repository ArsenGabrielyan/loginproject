import {useState} from "react";
import {Link} from "react-router-dom"
import { users } from "../Profile";

export default function ProfileHeader(){
     const [toggled, setToggled] = useState(false);
     return(
          <header className={toggled ? "profileHeader active" : "profileHeader"}>
               <div className="left"><h1 className="logo">MEETME</h1></div>
               <div className={toggled ? "right active" : "right"}>
                    <ul className="linkList">
                         <li className="linkItem"><Link to="/profile" className="link">HOME</Link></li>
                         <li className="linkItem"><Link to="/profile" className="link">ABOUT</Link></li>
                         {users.isAdmin && (
                            <>
                              <li className="linkItem"><Link to="/service" className="link">SERVICES</Link></li>
                              <li className="linkItem"><Link to="/pages" className="link">PAGES</Link></li>  
                            </>
                         )}
                         <li className="linkItem"><Link to="/profile" className="link">BLOG</Link></li>
                         <li className="linkItem"><Link to="/profile" className="link">CONTACT</Link></li>
                    </ul>
               </div>
               <span className={toggled ? "toggleIcon active" : "toggleIcon "} onClick={()=>setToggled(!toggled)}>
                    <span></span><span></span><span></span>
               </span>
          </header>
     )
}