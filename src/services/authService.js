import axios from "axios";

// const url = "http://localhost:3000/users"
const url = "/"

const register = (fullName, email, username, password, confirmPassword, isChecked) =>{
     return axios.post(url + "signup",{
          fullName,
          email,
          username,
          password, 
          confirmPassword, 
          isChecked
     })
}

const login = (email, password) =>{
     return axios.post(url + "signin", {
          email,
          password
     }).then(res =>{
          if(res.data.accessToken){
               localStorage.setItem("user", JSON.stringify(res.data))
          }
          return res.data
     })
}
const logout = () => localStorage.removeItem("user");

export default {
     register,login,logout
}