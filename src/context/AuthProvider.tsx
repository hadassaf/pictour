import axios from "axios";
import { useReducer } from "react"
import AuthContext from "./AuthContext"
import AuthReducer from "./AuthReducer"

const AuthProvider = ({children}:any) => {

    const user:{token:string,name:string}= JSON.parse(sessionStorage.getItem('user'));
    const [auth,setAuth] = useReducer(AuthReducer, user);

    if(auth){
        axios.interceptors.request.use((config)=>{
            config.headers= { Authorization:'Bearer '+user.token}
            return config
        })
    }

    return (
        <AuthContext.Provider value={  { auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
    
}

export default AuthProvider