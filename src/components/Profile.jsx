import React from "react";
import "../dashboard.scss"

class Profile extends React.Component{
     render(){
          return(
               <>
                    <h1>Name</h1>
                    <div className="loginContainer2"><button className="logoutBtn">Log Out</button></div>
               </>
          )
     }
}

export default Profile