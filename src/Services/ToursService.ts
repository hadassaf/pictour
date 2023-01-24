import axios from "axios";
import TourModel from "../Models/TourModel";
import appConfig from "../Utils/config";

class ToursService{
    public async getAllTours():Promise<TourModel[]>{
        const response=  await axios.get(appConfig.toursUrl);
        const categories = response.data
        return categories
    }
    public async getSpecificTours(areaId:number,):Promise<TourModel[]>{        
        const response=  await axios.get(appConfig.toursUrl+"/"+areaId);
        const categories = response.data
        return categories
    }
    public async getTour(id:number):Promise<TourModel>{
        const response=  await axios.get(appConfig.toursUrl+"/"+id);
        const tour = response.data
        return tour
    }
    public async addTour(tour:TourModel):Promise<TourModel>{
        const response=  await axios.post(appConfig.toursUrl,tour);
        const newProduct = response.data
        return newProduct
    }
    public async deleteTour(id:number):Promise<void>{
        await axios.delete(appConfig.toursUrl+"/"+id);

    }

}

const toursService = new ToursService()

export default toursService