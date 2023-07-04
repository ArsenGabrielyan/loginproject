import { Navigate } from "react-router-dom";
import { users } from "./Profile";
import AdminHeader from "./headers/AdminHeader";

export default function AdminService(){
     return(
          <>
          {users.isAdmin ? (
          <div className="profile-page">
          <AdminHeader/>
          <div className="homeContainer">
               <h1>MEETME SERVICES</h1>
          </div>
          </div>) : <Navigate to="/profile" replace/>}
          </>
     )
}