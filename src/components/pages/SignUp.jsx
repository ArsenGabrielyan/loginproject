import { Icon } from '@iconify/react';
import { Link } from "react-router-dom";
import SignUpFormComp from "../SignUpForm";

export default function SignUpPage(){
     return(
          <div className="formContainer">
               <SignUpFormComp />
               <div className="linkPos">
                    <Link to="/signin" className="link">Sign In <Icon icon="akar-icons:arrow-right"/></Link>
               </div>
          </div>
     )
}