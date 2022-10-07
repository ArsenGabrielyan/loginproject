import {useRef} from "react";
import {Link} from "react-router-dom"

function ProfileHeader(){
     const navbarEl = useRef(null);
     const togglerEl = useRef(null);
     const headerEl = useRef(null);
     function handleClick(){
          navbarEl.current.classList.toggle("active")
          togglerEl.current.classList.toggle("active")
          headerEl.current.classList.toggle("active")
     }
     return(
          <header className="profileHeader" ref={headerEl}>
               <div className="left">
                    <h1 className="logo">MEETME</h1>
               </div>
               <div className="right" ref={navbarEl}>
                    <ul className="linkList">
                         <li className="linkItem"><Link to="/profile" className="link">HOME</Link></li>
                         <li className="linkItem"><Link to="/profile" className="link">ABOUT</Link></li>
                         <li className="linkItem"><Link to="/profile" className="link">SERVICES</Link></li>
                         <li className="linkItem"><Link to="/profile" className="link">PAGES</Link></li>
                         <li className="linkItem"><Link to="/profile" className="link">BLOG</Link></li>
                         <li className="linkItem"><Link to="/profile" className="link">CONTACT</Link></li>
                    </ul>
               </div>
               <span className="toggleIcon" ref={togglerEl} onClick={handleClick}>
                    <span></span><span></span><span></span>
               </span>
          </header>
     )
}

export default ProfileHeader