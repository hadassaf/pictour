import axios from "axios";
import UserModel from "../Models/UserModel";
import appConfig from "../Utils/config";

class UsersService{
    public async getAllUsers():Promise<UserModel[]>{
        const response=  await axios.get(appConfig.usersUrl);
        const users = response.data
        return users
    }
    public async getOneUser(id:number):Promise<UserModel>{
        const response=  await axios.get(appConfig.usersUrl+"/"+id);
        const users = response.data
        return users
    }
    public async addToUsers(User:UserModel):Promise<UserModel>{
        const response=  await axios.post(appConfig.usersUrl,User);
        const newUser = response.data
        return newUser
    }
    public async deleteFromUsers(id:number):Promise<void>{
        await axios.delete(appConfig.usersUrl+"/"+id);

    }

}

const usersService = new UsersService()

export default usersService