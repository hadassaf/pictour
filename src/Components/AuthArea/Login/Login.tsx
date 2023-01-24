import { useForm } from "react-hook-form";
import CredentialsModel from "../../../Models/CredentialsModel";
import authService from "../../../Services/AuthService";
import notifyService from "../../../Services/NotifyService";
import useAuth from "../../../Services/useAuth";
import "./Login.css";

function Login(): JSX.Element {
    const {loginUser}= useAuth()
    const {register,handleSubmit}= useForm<CredentialsModel>();
    const save=async (credentials:CredentialsModel) =>{
        authService.login(credentials)
        .then(response=> loginUser(response))
        .then( res=> notifyService.success("כמה טוב ששבת אלינו---"))
        .catch(err=>notifyService.error(err));
        
    }
    return (
        <div className="Login">
            <h1>  רק להיזכר... </h1>
            <hr />
            <form onSubmit={handleSubmit(save)}>
                    <input type="text" {...register('userName')}  placeholder=' שם משתמש'/> <br />
                    <input type="Password" {...register('password')}  placeholder=' ססמא '/> <br />
                <button>להתחברות</button>
            </form>
        </div>
    );
}

export default Login;


