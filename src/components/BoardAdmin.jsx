import React from "react";
import "../dashboard.scss"

class DashboardAdmin extends React.Component{
     render(){
          return(
               <>
                    <h1>Admin</h1>
                    <div className="loginContainer2"><button className="logoutBtn">Log Out</button></div>
               </>
          )
     }
}

export default DashboardAdmin