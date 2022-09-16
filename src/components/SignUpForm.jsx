import React from "react";
import { Icon } from '@iconify/react';
import { Formik } from "formik";
import * as Yup from "yup"
import { Link } from "react-router-dom";

const signupSchema = Yup.object().shape({
     name: Yup.string().min(2, "Too Short").required("Required"),
     email: Yup.string().email("Invalid Email").required("Required"),
     username: Yup.string().min(3, "Too Short").required("Required"),
     pass: Yup.string().min(8, "Password Must Be at 8 Char Long").required("Required"),
     confirmPass: Yup.string().oneOf([Yup.ref("pass"), null], "Password doesn't Match"),
     agreed: Yup.bool().oneOf([true], "You need to accept the Terms")
})

function SignUpForm(){
     return(
          <div className="formContainer">
          <Formik initialValues={{name: "", email: "", username: "", pass: "", confirmPass:"", agreed: false}} validationSchema={signupSchema} onSubmit={values=>{
              console.log(values)
          }}>
               {({values, errors, handleSubmit, handleChange})=>(
                    <form className="frm" onSubmit={handleSubmit}>
                    <label htmlFor="name" className="labelBox">Full Name</label>
                    {errors.name ? (<p className="validError">{errors.name}</p>) : null}
                    <input 
                    type="text" 
                    name="name"  
                    id="fullName" placeholder="Name..." className="inputBox" 
                    onChange={handleChange} value={values.name} />
                    <label htmlFor="email" className="labelBox">Email</label>
                    {errors.email ? (<p className="validError">{errors.email}</p>) : null}
                    <input type="email" name="email"  id="email" placeholder="Email address..." className="inputBox" onChange={handleChange} value={values.email} />
                    <label htmlFor="username" className="labelBox">Username</label>
                    {errors.username ? (<p className="validError">{errors.username}</p>) : null}
                    <input type="text" name="username"  id="userName" placeholder="Username..." className="inputBox" onChange={handleChange} value={values.username}/>
                    <label htmlFor="pass" className="labelBox">Password</label>
                    {errors.pass ? (<p className="validError">{errors.pass}</p>) : null}
                    <input type="password" name="pass"  id="password" placeholder="****************" className="inputBox" onChange={handleChange} value={values.pass} />
                    <label htmlFor="confirmPass" className="labelBox">Repeat Password</label>
                    {errors.confirmPass ? (<p className="validError">{errors.confirmPass}</p>) : null}
                    <input type="password" name="confirmPass" id="confirmPassword" placeholder="****************" className="inputBox" onChange={handleChange} value={values.confirmPass}/>
                    <span className="agreedCheckBox">
                         {errors.agreed ? (<p className="validError">{errors.agreed}</p>) : null}
                         <input type="checkbox" name="agreed" className="agreeCheck" onChange={handleChange} />
                         <label htmlFor="agreed" className="agreeText">I agree to the <span className="midBold">Terms of User</span></label>
                    </span>
                    <button type="submit" className="loginBtn">Sign Up</button>
               </form>
               )}
          </Formik>
          <div className="linkPos">
               <Link to="/signin" className="link">Sign In <Icon icon="akar-icons:arrow-right"/></Link>
          </div>
          
          </div>
     )
}

// 

export default SignUpForm