import React from "react";
import "../dashboard.scss"

class DashboardUser extends React.Component{
     render(){
          return(
               <>
                    <h1>User</h1>
                    <div className="loginContainer2"><button className="logoutBtn">Log Out</button></div>
               </>
          )
     }
}

export default DashboardUser