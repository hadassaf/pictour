import axios from "axios";

import CredentialsModel from "../Models/CredentialsModel copy";
import UserModel from "../Models/UserModel";
import appConfig from "../Utils/config";


class AuthService{
    
    public async register(user:UserModel):Promise<{}>{
        const response=  await axios.post(appConfig.registerUrl,user);
        const categories = response.data
        return categories
    }
    
    public async login(credentials:CredentialsModel):Promise<{}>{
        const response=  await axios.post(appConfig.loginUrl,credentials);
        const newProduct = response.data
        return newProduct
    }

   

}

const authService = new AuthService()

export default authService