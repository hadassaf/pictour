import { createContext, Dispatch, SetStateAction } from "react";

interface AuthContextType {
  auth: {};
  setAuth: Dispatch<SetStateAction<boolean>>; 
}
interface anyType {
  auth: any;
  setAuth: any; 
}

 const AuthContext = createContext<AuthContextType|anyType>({ auth: {},  setAuth: () => {}, });

export default AuthContext

