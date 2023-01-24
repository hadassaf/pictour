class TheaterModel{
    
    public theaterID:number;
    public theaterName:string;

    public constructor(theater:TheaterModel){
       
        this.theaterID=theater.theaterID
        this.theaterName=theater.theaterName
    }


}
export default TheaterModel