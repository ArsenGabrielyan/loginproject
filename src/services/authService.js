import { INITIAL_FORM_DATA, DB_URL } from "../data/constants";
export const register = (file,fullName,email,username,date,phone,pass,confirmPass,isChecked,isAdmin,e,setFormData) =>{
     const formSignUpObj = {file,fullName,email,username,date,phone,pass,confirmPass,isChecked,isAdmin}
     fetch(DB_URL,{
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(formSignUpObj)
     }).then(res => res.json);
     e.target.reset()
     setFormData(INITIAL_FORM_DATA)
}
export const logout = () => localStorage.removeItem("user");