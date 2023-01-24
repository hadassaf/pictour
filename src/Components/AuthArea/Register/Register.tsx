import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import UserModel from "../../../Models/UserModel";
import authService from "../../../Services/AuthService";
import notifyService from "../../../Services/NotifyService";
import useAuth from "../../../Services/useAuth";
import "./Register.css";

function Register(): JSX.Element {
    const navigate= useNavigate()
    const {loginUser}= useAuth()
    const {register,handleSubmit}= useForm<UserModel>();
    const save=async (user:UserModel) =>{
        authService.register(user)
        .then(response=> loginUser(response))
        .then( res=> notifyService.success("איזה כיף שהצטרפת :)"))
        .catch(err=>notifyService.error(err))
    }

    const navLogin = ()=>{
        navigate('/login')

    }
    return (
        <div className="Register">
            <h1>כמה פרטים לפני--- </h1>
            <hr />
            <form onSubmit={handleSubmit(save)}>
                    <input type="text" {...register('firstName')} placeholder='שם פרטי'/> <br />
                    <input type="text" {...register('lastName')} placeholder='שם משפחה'/> <br />
                    <input type="email" {...register('email')}  placeholder='כתובת אימייל'/> <br />
                    <input type="text" {...register('phone')}  placeholder='טלפון'/> <br />
                    <input type="text" {...register('userName')}  placeholder=' שם משתמש'/> <br />
                    <input type="Password" {...register('password')}  placeholder=' ססמא '/> <br />
                <button>להצטרפות</button> <br /> <br />
            </form>
            <button onClick={navLogin} >משתמש רשום?- עבור לכניסה</button>
        </div>
    );
}

export default Register;
