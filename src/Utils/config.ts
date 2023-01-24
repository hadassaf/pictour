class AppConfig{

    public productsUrl = "http://localhost:3001/api/products"
    public cartUrl = "http://localhost:3001/api/cart"
    public toursUrl = "http://localhost:3001/api/tours"
    public tourslistUrl = "http://localhost:3001/api/tourslist"
    public registerUrl = "http://localhost:3001/api/auth/register"
    public loginUrl = "http://localhost:3001/api/auth/login"
    public guidesUrl = "http://localhost:3001/api/guides"
    public usersUrl = "http://localhost:3001/api/users"
}
const appConfig = new AppConfig();
export default appConfig;