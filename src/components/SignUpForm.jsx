import { Icon } from "@iconify/react";
import {useState, useRef} from "react";
import {register} from "../services/authService";
import { INITIAL_FORM_DATA, INITIAL_FORM_MSG } from "../data/constants";
import {isEverythingValid} from "../data/signupValid";

export default function SignUpFormComp(){
     const fileInput = useRef(null)
     const [formData, setFormData] = useState(INITIAL_FORM_DATA)
     const [msg, setMsg] = useState(INITIAL_FORM_MSG)
     const [successful, setSuccessful] = useState(false);
     
     const handleChange =e=>setFormData({...formData, [e.target.name]: e.target.value})
     const handleChangeCheckbox =e=> setFormData({...formData, [e.target.name]: e.target.checked})
     const convertIntoBase64 =file=> new Promise((resolve, reject)=>{
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => resolve(reader.result);
          reader.onerror = (err)=> reject(err);
     });
     async function handleChangeFile(){
          const files = fileInput.current?.files[0]
          const base64 = await convertIntoBase64(files);
          setFormData({...formData, selectedFile: base64})
     }
     function handleSubmitSignUp(e){
          e.preventDefault()
          setSuccessful(false);
          const isValid = isEverythingValid(formData);
          setMsg({
               msgName: isValid.isNameValid ? "" : "Name is Too Short",
               msgEmail: isValid.isEmailValid ? "" : "Email Format Isn't Valid",
               msgUsername: isValid.isUsernameValid ? "" : "Username is Too Short",
               msgPass: isValid.isPasswordValid ? "" : "Password is Too Short",
               msgConfirmPass: isValid.isConfirmPassValid ? "" : "Password Doesn't Match",
               msgCheckbox: isValid.isCheckBoxValid ? "" : "You Need To Accept the Terms",
               msgDate: isValid.isDateValid ? "" : "Date Format Isn't Valid",
               msgPhone: isValid.isPhoneValid ? "": "Phone Number Isn't Valid",
               msgFile: isValid.isFileValid ? "" : "You Didn't Attach the File"
          })
          const {selectedFile,name,email,username,birthDate,phone,pass,confirmPass,agreed,isAdmin} = formData;
          if(Object.values(isValid).every(val=>val)) register(selectedFile,name,email,username,birthDate,phone,pass,confirmPass,agreed,isAdmin,e,setFormData);
     }
     return(
          <form className="frm" onSubmit={handleSubmitSignUp}>
               {!successful && <>
               <p className="validError">{msg.msgFile}</p>
               <label htmlFor="uploadFile" className="labelBox">Profile Picture</label>
               <button className="uploadBtn" onClick={()=>fileInput.current.click()} type="button"><Icon icon="fa-solid:upload"/> Upload</button>
               <input type="file" hidden name="file" id="uploadFile" className="inputBox" onChange={e => handleChangeFile(e)} ref={fileInput}/>
               <label className="labelBox">Preview</label>
               <br/><img src={formData.selectedFile} alt="Insert to Show" width={180} height={180}/><br/>
               <p className="validError">{msg.msgName}</p>
               <label htmlFor="name" className="labelBox">Full Name</label>
               <input type="text" name="name"  id="fullName" placeholder="Name..." className="inputBox" onChange={handleChange} value={formData.name} />
               <p className="validError">{msg.msgEmail}</p>
               <label htmlFor="email" className="labelBox">Email</label>
               <input type="email" name="email"  id="email" placeholder="Email address..." className="inputBox" onChange={handleChange} value={formData.email} />
               <p className="validError">{msg.msgUsername}</p>
               <label htmlFor="username" className="labelBox">Username</label>
               <input type="text" name="username"  id="userName" placeholder="Username..." className="inputBox" onChange={handleChange} value={formData.username}/>
               <p className="validError">{msg.msgDate}</p>
               <label htmlFor="birthDate" className="labelBox">Birth Date</label>
               <input type="date" name="birthDate" id="date"className="inputBox" onChange={handleChange} value={formData.birthDate}/>
               <p className="validError">{msg.msgPhone}</p>
               <label htmlFor="phone" className="labelBox">Phone Number</label>
               <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}" maxLength={11} name="phone" id="phone" placeholder="Phone Number..." className="inputBox" onChange={handleChange} value={formData.phone}/>
               <p className="validError">{msg.msgPass}</p>
               <label htmlFor="pass" className="labelBox">Password</label>
               <input type="password" name="pass"  id="password" placeholder="****************" className="inputBox" onChange={handleChange} value={formData.pass} />
               <p className="validError">{msg.msgConfirmPass}</p>
               <label htmlFor="confirmPass" className="labelBox">Repeat Password</label>
               <input type="password" name="confirmPass" id="confirmPassword" placeholder="****************" className="inputBox" onChange={handleChange} value={formData.confirmPass}/>
               <span className="agreedCheckBox">
                    <p className="validError">{msg.msgCheckbox}</p>
                    <input type="checkbox" name="agreed" className="agreeCheck" checked={formData.agreed} onChange={handleChangeCheckbox}/>
                    <label htmlFor="agreed" className="agreeText">I agree to the <span className="midBold">Terms of User</span></label>
               </span>
               <br/>
               <span className="agreedCheckBox">
                    <input type="checkbox" name="isAdmin" className="agreeCheck" checked={formData.isAdmin} onChange={handleChangeCheckbox}/>
                    <label htmlFor="IsAdmin" className="agreeText">Are you an Administrator of This Application?</label>
               </span>
               <button type="submit" className="loginBtn">Sign Up</button>
               </>}
          </form>
     )
}