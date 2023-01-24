import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home(): JSX.Element {
    const navigate=useNavigate()
    const navReg= ()=>{
        navigate('/register')
    }
    return (
        <div className="Home">
           
		אוהבים צילום?<br/> 
        אוהבים טיולים?<br/> 
        הגעתם למקום הנכון---<br/> 
		מוזמנים <br/> 
		לבחור תאריך<br/> 
        לקבוע מסלול<br/> 
        לבדוק ציוד  <br/> 
        להכין תיק<br/> 
        להכניס מצלמה<br/> 
		והנה---<br/> 
		.אתם בפנים<br/> 
		 מטיילים - מצלמים - מאושרים .  <br/> 
<button onClick={navReg}> קדימה, לטייל ---</button>


        </div>
    );
}

export default Home;
