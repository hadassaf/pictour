import axios from "axios";
import ProductModel from "../Models/ProductModel";
import appConfig from "../Utils/config";

class CartService{
    public async getAllCart():Promise<ProductModel[]>{
        const response=  await axios.get(appConfig.cartUrl);
        const cart = response.data
        return cart
    }
    public async getTotal():Promise<number>{
        const response=  await axios.get(appConfig.cartUrl+'Total');
        const cart = response.data
        return cart
    }
    public async addToCart(product:ProductModel):Promise<ProductModel>{
        const response=  await axios.post(appConfig.cartUrl,product);
        const newProduct = response.data
        return newProduct
    }
    public async deleteFromCart(id:number):Promise<void>{
        await axios.delete(appConfig.cartUrl+"/"+id);

    }

}

const cartService = new CartService()

export default cartService