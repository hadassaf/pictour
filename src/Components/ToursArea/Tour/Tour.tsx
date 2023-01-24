import "./Tour.css";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

import {  SlLocationPin,SlClock } from "react-icons/sl";
import {  MdOutlineDateRange } from "react-icons/md";
import {  TbCameraPlus } from "react-icons/tb";
import {  GiBilledCap } from "react-icons/gi";
import {  useState } from "react";
import notifyService from "../../../Services/NotifyService";
import { useNavigate } from "react-router-dom";
import TourModel from "../../../Models/TourModel";
import ToursListService from "../../../Services/ToursListService";

interface tourProps{
    tour:TourModel
}
function Tour(props:tourProps): JSX.Element {
    
    const [open, setOpen] = useState(false);
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
    const navigate =useNavigate()
    const [tourList,setTourList] = useState(false);

    const join = async () =>{
        onOpenModal();
    }
    const details= ()=>{
        navigate('/details/'+props.tour.id)
    }
    const id = props.tour.id

    const watchTourList= async() =>{
        if( tourList )
        {notifyService.error("סיור זה כבר הוזמן על ידך") 
        onCloseModal()
    } 
        else{
        setTourList(true);
        ToursListService.addTourToList(id)
        .catch( err=> notifyService.error(err))
         navigate('/equipment/') }
    }

    const hesitate= ()=>{
        onCloseModal()        
    }
    const professional= props.tour.professional
    return (
        <div className="Tour">

            <img src={props.tour.imageUrl} alt={props.tour.name}/>
            <div>
            <h2> {props.tour.name}</h2> <br />
            <span > <GiBilledCap className="signs"/>   {props.tour.guide}</span> <br /> <br />
            <span > <SlLocationPin className="signs"/>   {props.tour.areaName}</span> <br /> <br />
            <span > <MdOutlineDateRange className="signs"/>   {props.tour.date}</span> <br /> <br />
            <span > <SlClock className="signs"/>   {props.tour.hour}</span> <br /> <br />
            <span > <TbCameraPlus className="signs"/>{professional===0? <span >חובבן</span>: <span>מקצוען </span> }</span> <br /> <br />
            </div>
            <div className="flex"><button  onClick={details}> לפרטים נוספים</button>
            <button  onClick={join}>  הצטרפות</button></div>
            
            <Modal open={open} onClose={onCloseModal} classNames={{modal: 'Modal1'}}>
            <br /> <br />  <hr/>
            <h2> אתה בטוח שברצונך להצטרף? </h2> <hr/>
            <button className="b" onClick={watchTourList}>כן </button>
            <button className="b" onClick={hesitate}>עדיין מתלבט... </button>
             </Modal>
            
            
        </div>
    );
}

export default Tour;
