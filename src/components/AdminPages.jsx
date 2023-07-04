import { Navigate } from "react-router-dom";
import { users } from "./Profile";
import AdminHeader from "./headers/AdminHeader";

export default function AdminPages(){
     return(
          <>
          {users.isAdmin ? (
          <div className="profile-page">
          <AdminHeader />
          <div className="homeContainer">
               <h1>MEETME PAGES</h1>
          </div>
          </div>) : <Navigate to="/profile" replace/>}
          </>
     )
}