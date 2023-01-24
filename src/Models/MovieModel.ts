class MovieModel{
    public id:number;
    public theaterID:number;
    public name:string;
    public DateHour:string;
    public duration:number;

    public constructor(movie:MovieModel){
        this.id=movie.id
        this.theaterID=movie.theaterID
        this.name=movie.name
        this.DateHour=movie.DateHour
        this.duration=movie.duration
    }


}
export default MovieModel