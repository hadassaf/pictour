class GuideModel{
    public guideId:number;
    public name:string;
    public phone:string;
    public image:string;

    public constructor(guide:GuideModel){
        this.guideId=guide.guideId,
        this.name=guide.name,
        this.phone=guide.phone
        this.image=guide.image
    }


}
export default GuideModel