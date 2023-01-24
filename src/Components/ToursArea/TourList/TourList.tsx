import { useEffect, useState } from "react";
import notifyService from "../../../Services/NotifyService";
import "./TourList.css";
import { BsTrashFill } from 'react-icons/bs';
import TourModel from "../../../Models/TourModel";
import toursListService from "../../../Services/ToursListService";
import { useNavigate } from "react-router-dom";



function ToursList(): JSX.Element {

    const [tourList, setTourList] = useState<TourModel[]>([]);
    const navigate = useNavigate()
    const deleteTour=async (id:number)=>{
        await toursListService.deleteTourFromList(id)
        notifyService.success('הוסרת בהצלחה מהסיור ')
        toursListService.getAllToursFromList()
        .then(data=>setTourList(data) )
        .catch( err=>notifyService.error(err))
    }

    const back = ()=>{
        navigate('/tours')

    }

    useEffect(() => {
        toursListService.getAllToursFromList()
        .then(data=>setTourList(data) )
        .catch( err=>notifyService.error(err))
    
    }, []);

   

    
    return (
            <div className="TourList">
                <button  onClick={back}>חזרה לדף הטיולים</button>
                <h1>רשימת הסיורים שלי</h1>
                <table>
                    <thead>
                    <tr>
                    <th>שם המסלול</th>
                    <th>אזור בארץ</th>
                    <th>תאריך</th>
                    <th>שם המדריך</th>
                    <th>ביטול </th>
                    </tr>
                    </thead>
                    <tbody>
            {
                tourList.map(t=>(

                    <tr key={t.id}>
                    <td>{t.name}</td>
                    <td>{t.areaName}</td>
                    <td>{t.date}</td>
                    <td>{t.guide}</td>
                    <td className="delButton" onClick={()=>deleteTour(t.id)}> <BsTrashFill/></td>
                    </tr>
                    )
                )
            }
            </tbody>
            </table>
			</div>
    );
}

export default ToursList;
