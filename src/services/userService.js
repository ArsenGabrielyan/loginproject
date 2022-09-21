import axios from "axios";
import authHeader from "./auth-header";

const url = "/"

const getPublicContent = () =>{
     return axios.get(url + "all")
}

const getUserBoard = () => {
     return axios.get(url + "user", {headers: authHeader()})
}

const getModBoard = () => {
     return axios.get(url + "mod", {headers: authHeader()})
}

const getAdminBoard = () => {
     return axios.get(url + "admin", {headers: authHeader()})
}

export default {
     getPublicContent,
     getUserBoard,
     getModBoard,
     getAdminBoard
}