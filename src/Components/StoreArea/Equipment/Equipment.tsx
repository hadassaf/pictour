import { useNavigate } from "react-router-dom";
import "./Equipment.css";
import { RxDoubleArrowLeft } from 'react-icons/rx';

function Equipment(): JSX.Element {
    const navigate= useNavigate()

    const buy=()=>{
        navigate('/store')
    }
    return (
        <div className="Equipment">
            <h1> יש להצטייד ב- </h1> <RxDoubleArrowLeft/>
            <span> מצלמה </span> <br /><RxDoubleArrowLeft/>
            <span> מגן מצלמה מפני גשם </span><br /><RxDoubleArrowLeft/>
            <span> מטלית מיקרופייבר </span><br /><RxDoubleArrowLeft/>
            <span> מוט סלפי  </span><br /><RxDoubleArrowLeft/>
            <span> קאבל הטענה </span><br /><RxDoubleArrowLeft/>
            <span> רחפן  </span><br /><RxDoubleArrowLeft/>
            <span> סוללה נוספת </span><br /><RxDoubleArrowLeft/>
            <span> מיצב לוידיאו </span><br /><RxDoubleArrowLeft/>
            <span> שתיה </span><br /><RxDoubleArrowLeft/>
            <span> נעלי הליכה </span><br />
            <button onClick={buy}>לרכישה כאן</button>
			
        </div>
    );
}

export default Equipment;
