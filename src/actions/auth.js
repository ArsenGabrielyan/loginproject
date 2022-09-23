import AuthService from "../services/authService";

export const register = (fullName, email, username,date,phone, password, confirmPassword, isChecked) =>{
     return AuthService.register(fullName,email,username,date,phone,password,confirmPassword,isChecked)
}
export const logout = () => {
     return AuthService.logout()    
}