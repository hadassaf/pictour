import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const useAuth=()=>{

    const {auth , setAuth}=  useContext( AuthContext );


    const navigate =useNavigate();

    const loginUser = (data:{}) =>{
        setAuth({type:'LOGIN',payload:data});
        sessionStorage.setItem('user',JSON.stringify(data));
        navigate('/')
    }
    const logoutUser = () =>{
        setAuth({type:'LOGOUT'});
        sessionStorage.removeItem('user');
        navigate('/')
    }


    return {loginUser,logoutUser,auth}
}

export default useAuth