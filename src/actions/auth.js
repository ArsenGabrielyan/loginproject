import AuthService from "../services/authService";
export const register = (files, fullName, email, username,date,phone, password, confirmPassword, isChecked) => AuthService.register(files, fullName,email,username,date,phone,password,confirmPassword,isChecked)
export const logout = () => AuthService.logout()  