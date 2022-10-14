const dbUrl = "http://localhost:3010/users"

const register = (file, fullName, email, username, date, phone, password, confirmPassword, isChecked, isAdmin) =>{
     const formSignUpObj = {file,fullName,email,username,date,phone,password, confirmPassword, isChecked, isAdmin}
     fetch(dbUrl,{
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(formSignUpObj)
     }).then(res => res.json).then(data => console.log(data))
}

const logout = () => localStorage.removeItem("user");

export default {
     register,logout
}