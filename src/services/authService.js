const dbUrl = "http://localhost:3010/users"

const register = (fullName, email, username, date, phone, password, confirmPassword, isChecked) =>{
     const formSignUpObj = {
          fullName,
          email,
          username,
          date,
          phone,
          password, 
          confirmPassword, 
          isChecked
     }
     fetch(dbUrl,{
          method: "POST",
          headers: {
               "Content-Type": "application/json"
             },
          body: JSON.stringify(formSignUpObj)
     }).then(res => res.json).then(data => console.log(data))
}

const logout = () => localStorage.removeItem("user");

export default {
     register,logout
}