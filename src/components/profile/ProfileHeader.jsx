import React from "react";

class ProfileHeader extends React.Component{
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
               <header className="profileHeader" id="header">
                    <div className="left">
                         <h1 className="logo">MEETME</h1>
                    </div>
                    <div className="right" id="navbar">
                         <ul className="linkList">
                              <li className="linkItem"><a href="#" className="link">HOME</a></li>
                              <li className="linkItem"><a href="#" className="link">ABOUT</a></li>
                              <li className="linkItem"><a href="#" className="link">SERVICES</a></li>
                              <li className="linkItem"><a href="#" className="link">PAGES</a></li>
                              <li className="linkItem"><a href="#" className="link">BLOG</a></li>
                              <li className="linkItem"><a href="#" className="link">CONTACT</a></li>
                         </ul>
                    </div>
                    <span className="toggleIcon" id="toggler" onClick={this.handleClick}>
                         <span></span><span></span><span></span>
                    </span>
               </header>
          )
     }
}

export default ProfileHeader