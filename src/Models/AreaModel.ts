class AreaModel{
    
    public areaId:number;
    public areaName:string;

    public constructor(area:AreaModel){
       
        this.areaId=area.areaId
        this.areaName=area.areaName
    }


}
export default AreaModel