import { Icon } from "@iconify/react";
import ProfileHeader from "../headers/ProfileHeader";
import { logout } from "../../services/authService";
import { Navigate, useNavigate } from "react-router-dom";

export let users = JSON.parse(localStorage.getItem("user"));
export default function ProfilePage(){
     const navigate = useNavigate();
     const handleLogout = () => {logout(); navigate("/"); users = {};}
     return <>
               {users!==null ? <div className="profile-page">
               <ProfileHeader />
               <div className="toCenter">
               <div className="profile-info">
                    <div className="container"></div>
                    <div className="left"><img src={users.selectedFile} alt="profile" /></div>
                    <div className="right">
                         <h3 id="h1">HELLO EVERYBODY I AM</h3>
                         <h2 id="name">{users.name.split(" ")[0]}</h2>
                         <h2 id="name">{users.name.split(" ")[1]}</h2>
                         <h3 id="oc">DEVELOPER</h3>
                         <p id="text">You will begin to realise why this exercise is called the {users.name} Pattern (with reference to the ghost showing Scrooge some different futures)</p>
                         <div className="info">
                              <p><span className="infoIcon"><Icon icon="uiw:date" /></span> {new Date(users.birthDate).toLocaleDateString()}</p>
                              <p><span className="infoIcon"><Icon icon="akar-icons:phone" /></span> {users.phone}</p>
                              <p><span className="infoIcon"><Icon icon="carbon:email" /></span> {users.email}</p>
                              <p><span className="infoIcon"><Icon icon="clarity:house-line" /></span> Armenia</p>
                         </div>
                         <button className="logoutBtn" onClick={handleLogout}>SIGN OUT</button>
                    </div>
               </div>
               </div>
          </div> : <Navigate to="/signin" replace/>}
     </>
}