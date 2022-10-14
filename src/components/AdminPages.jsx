import { useRef } from "react";
import { Link, Navigate } from "react-router-dom";
import { users } from "./Profile";

function AdminPages(){
     const navbarRef = useRef(null);
     const togglerRef = useRef(null);
     const headerRef = useRef(null);
     function handleClick(){
          navbarRef.current.classList.toggle("active")
          togglerRef.current.classList.toggle("active")
          headerRef.current.classList.toggle("active")
     }
     return(
          <>
          {users.isAdmin !== false ? (
               <div className="profile-page">
               <header className="profileHeader2" ref={headerRef}>
               <div className="left">
                   <h1 className="logo">MEETME</h1>
               </div>
               <div className="right" ref={navbarRef}>
                   <ul className="linkList">
                        <li className="linkItem"><Link to="/profile" className="link">HOMEPAGE</Link></li>
                   </ul>
               </div>
               <span className="toggleIcon" ref={togglerRef} onClick={handleClick}>
                   <span></span><span></span><span></span>
               </span>
          </header>
          <div className="homeContainer">
               <h1>MEETME PAGES</h1>
          </div>
          </div>) : <Navigate to="/profile" replace/>}
          </>
     )
}

export default AdminPages