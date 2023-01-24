import axios from "axios";
import ProductModel from "../Models/ProductModel";
import appConfig from "../Utils/config";

class ProductsService{
    public async getAllProducts():Promise<ProductModel[]>{
        const response=  await axios.get(appConfig.productsUrl);
        const categories = response.data
        return categories
    }
    public async getOneProduct(id:number):Promise<ProductModel>{
        const response=  await axios.get(appConfig.productsUrl+"/"+id);
        const categories = response.data
        return categories
    }
    public async addToProducts(product:ProductModel):Promise<ProductModel>{
        const response=  await axios.post(appConfig.productsUrl,product);
        const newProduct = response.data
        return newProduct
    }
    public async deleteFromProducts(id:number):Promise<void>{
        await axios.delete(appConfig.productsUrl+"/"+id);

    }

}

const productsService = new ProductsService()

export default productsService