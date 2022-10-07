import { useRef } from "react";
import { Link } from "react-router-dom";

function Home(){
     const navbarRef = useRef(null);
     const togglerRef = useRef(null);
     const headerRef = useRef(null);
     function handleClick(){
          navbarRef.current.classList.toggle("active")
          togglerRef.current.classList.toggle("active")
          headerRef.current.classList.toggle("active")
     }
     return(
          <div className="profile-page">
                <header className="profileHeader2" ref={headerRef}>
               <div className="left">
                    <h1 className="logo">MEETME</h1>
               </div>
               <div className="right" ref={navbarRef}>
                    <ul className="linkList">
                         <li className="linkItem"><Link to="/signin" className="link">SIGN IN</Link></li>
                         <li className="linkItem"><Link to="/signup" className="link">SIGN UP</Link></li>
                    </ul>
               </div>
               <span className="toggleIcon" ref={togglerRef} onClick={handleClick}>
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

export default Home