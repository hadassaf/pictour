import axios from "axios";
import TourModel from "../Models/TourModel";
import appConfig from "../Utils/config";

class ToursListService{
    public async getAllToursFromList():Promise<TourModel[]>{
        const response=  await axios.get(appConfig.tourslistUrl);
        const categories = response.data
        return categories
    }
    public async getTourFromList(id:number):Promise<TourModel[]>{
        const response=  await axios.get(appConfig.tourslistUrl+"/"+id);
        const categories = response.data
        return categories
    }

    public async addTourToList(id:number):Promise<TourModel>{

        const response=  await axios.post(appConfig.tourslistUrl+"/"+id);
        const newProduct = response.data
        return newProduct
    }
    public async deleteTourFromList(id:number):Promise<void>{
        await axios.delete(appConfig.tourslistUrl+"/"+id);

    }

}

const toursListService = new ToursListService()

export default toursListService