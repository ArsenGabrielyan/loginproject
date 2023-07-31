import { INITIAL_FORM_DATA, DB_URL } from "../data/constants";
export const register = (formData,e,setFormData) => fetch(DB_URL,{
     method: "POST",
     headers: {"Content-Type": "application/json"},
     body: JSON.stringify(formData)
}).then(res => res.json).then(()=>{
     e.target.reset()
     setFormData(INITIAL_FORM_DATA)
});
export const login = (loginData,navigate,setMessage)=>fetch(DB_URL).then(res=>res.json())
.then(data => {
     const selected = data.find(val=>val.email===loginData.email);
     if(selected){
          setMessage(selected.pass!==loginData.password?"Wrong Password. Please Try Again":"")
          if(selected.pass===loginData.password){
               setMessage("");
               localStorage.setItem("user", JSON.stringify(selected))
               navigate("/profile")
               window.location.reload()
          }
     } else setMessage("This Account Doesn't Exist. Create a New One")
})
export const logout = () => localStorage.removeItem("user");