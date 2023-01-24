import axios from "axios";
import GuideModel from "../Models/GuideModel";
import appConfig from "../Utils/config";

class GuidesService{
    public async getAllGuides():Promise<GuideModel[]>{
        const response=  await axios.get(appConfig.guidesUrl);
        const guides = response.data
        return guides
    }
    public async getOneGuide(id:number):Promise<GuideModel>{
        const response=  await axios.get(appConfig.guidesUrl+"/"+id);
        const guides = response.data
        return guides
    }
    public async addToguides(Guide:GuideModel):Promise<GuideModel>{
        const response=  await axios.post(appConfig.guidesUrl,Guide);
        const newGuide = response.data
        return newGuide
    }
    public async deleteFromguides(id:number):Promise<void>{
        await axios.delete(appConfig.guidesUrl+"/"+id);

    }

}

const guidesService = new GuidesService()

export default guidesService