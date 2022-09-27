import { Icon } from "@iconify/react";
import React from "react";
import profileImg from "../img/blank-profile-picture-973460__340.webp"
import ProfileHeader from "./profile/ProfileHeader";
import {logout} from "../actions/auth"
import { useNavigate } from "react-router-dom";

const users = JSON.parse(localStorage.getItem("user"));

function ProfilePage(){
     const navigate = useNavigate()
     function handleLogout(){
          logout()
          navigate("/")
     }
     console.log(users)
     return(
          <div className="profile-page">
               <ProfileHeader />
               <div className="toCenter">
               <div className="profile-info">
                    <div className="container"></div>
                    <div className="left">
                         <img src={profileImg} alt="profile" />
                    </div>
                    <div className="right">
                         <h3 id="h1">HELLO EVERYBODY I AM</h3>
                         <h2 id="name">{users.fullName.split(" ")[0]}</h2>
                         <h2 id="name">{users.fullName.split(" ")[1]}</h2>
                         <h3 id="oc">DEVELOPER</h3>
                         <p id="text">You will begin to realise why this exercise is called the Dickens Pattern (with reference to the ghost showing Scrooge some different futures)</p>
                         <div className="info">
                              <p><span className="infoIcon"><Icon icon="uiw:date" /></span> {users.date}</p>
                              <p><span className="infoIcon"><Icon icon="akar-icons:phone" /></span> {users.phone}</p>
                              <p><span className="infoIcon"><Icon icon="carbon:email" /></span>{users.email}</p>
                              <p><span className="infoIcon"><Icon icon="clarity:house-line" /></span>Armenia</p>
                         </div>
                         <button className="logoutBtn" onClick={handleLogout}>SIGN OUT</button>
                    </div>
               </div>
               </div>
          </div>
     )
}

export default ProfilePage