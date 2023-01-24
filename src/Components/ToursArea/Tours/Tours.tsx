import { BaseSyntheticEvent, useEffect, useState } from "react";
import TourModel from "../../../Models/TourModel";
import notifyService from "../../../Services/NotifyService";
import toursService from "../../../Services/ToursService";
import Tour from "../Tour/Tour";
import "./Tours.css";
function Tours(): JSX.Element {
    const [tours, setTours] = useState<TourModel[]>([])
    useEffect(() => {
         toursService.getAllTours()
         .then(tours=> setTours(tours))
         .catch(err=> notifyService.error(err))
    
    }, []);
  

const onInputChangeArea=(e:BaseSyntheticEvent)=>{
    toursService.getSpecificTours(e.target.value)
    .then(tours=> setTours(tours))
    .catch(err=> notifyService.error(err))
}
const reset= ()=>{
    toursService.getAllTours()
    .then(tours=> setTours(tours))
    .catch(err=> notifyService.error(err))
}
    
    
    return (
        <div className="Tours">
            <div className="selector">
            <form className="filter-div">
                <div onChange={(e) => onInputChangeArea(e)}>
                    <p>בחר אזור:</p>
                    <input type="radio" name="level" value="1"/><span className="typeMeet">צפון</span> <br />
                    <input type="radio" name="level" value="2"/><span className="typeMeet">דרום</span> <br />
                    <input type="radio" name="level" value="3"/><span className="typeMeet">נגב</span> <br />
                    <input type="radio" name="level" value="4"/><span className="typeMeet">רמת הגולן</span>  <br />        
                    <input type="radio" name="level" value="5"/><span className="typeMeet">גליל עליון </span>         
                </div> <br />
                <input type="reset" className="button-reset" onClick={async()=> reset()} value="אפס נתונים"/>
                </form>
            </div>
            <div className="toursCards">
            {
                tours.map(
                    t=>(
                        <Tour key={t.id} tour={t}/>
                    )
                )
            }
            </div>
        </div>
    );
}

export default Tours;
