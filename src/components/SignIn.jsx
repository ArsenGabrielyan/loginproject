import React from "react";
import { Icon } from '@iconify/react';
import { Formik } from "formik";
import * as Yup from "yup"
import { Link } from "react-router-dom";

const signinSchema = Yup.object().shape({
     email: Yup.string().email("Invalid Email").required("Required"),
     password: Yup.string().min(3, "Password Must Be at 3 Char Long").required("Required"),
})

class SignInPage extends React.Component{
     render(){
          return(
          <>
          <div className="bg2"></div>
               <div className="loginContainer">
               <h2>Sign In</h2>
               <Formik initialValues={{email: "",  password: "",}} validationSchema={signinSchema} onSubmit={values=>{
                    console.log(values)
               }}>
                    {({errors, handleSubmit, handleChange})=>(
                         <form className="frm" onSubmit={handleSubmit}>
                         <label htmlFor="email" className="labelBox">Email</label>
                         {errors.email ? (<p className="validError">{errors.email}</p>) : null}
                         <input type="email" name="email"  id="email" placeholder="Email address..." className="inputBox" onChange={handleChange}/>
                         <label htmlFor="password" className="labelBox">Password</label>
                         {errors.password ? (<p className="validError">{errors.password}</p>) : null}
                         <input type="password" name="password"  id="password" placeholder="****************" className="inputBox" onChange={handleChange}/>
                         <button type="submit" className="loginBtn">Sign In</button>
                    </form>
                    )}
               </Formik>
               <div className="linkPos">
                    <Link to="/" className="link">Sign Up <Icon icon="akar-icons:arrow-right"/></Link>
               </div>
          </div>
          </>
          )
     }
}

export default SignInPage