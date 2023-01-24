class UserModel{
    public id:number;
    public firstName:string;
    public lastName:string;
    public email:string;
    public phone:string;
    public userName:string;
    public password:string;

    public constructor(user:UserModel){
        this.id=user.id,
        this.firstName=user.firstName,
        this.lastName=user.lastName,
        this.email=user.email,
        this.phone=user.phone
        this.userName=user.userName
        this.password=user.password
    }


}
export default UserModel