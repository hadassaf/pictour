class CredentialsModel{
    
    public userName:string;
    public password:string;

    public constructor(user:CredentialsModel){
       
        this.userName=user.userName
        this.password=user.password
    }


}
export default CredentialsModel