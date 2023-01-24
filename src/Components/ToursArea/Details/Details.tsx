import { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { useParams } from "react-router-dom";
import TourModel from "../../../Models/TourModel";
import notifyService from "../../../Services/NotifyService";
import toursService from "../../../Services/ToursService";
import Description from "../Description/Description";
import Map from "../Map/Map";
import Way from "../Way/Way";
import "./Details.css";

function Details(): JSX.Element {

  
  
  const [tour,setTour]=useState<TourModel>()

  const [eventKey,setEventKey]=useState("");
    const {id}= useParams();

    useEffect(() => {
      
        toursService.getTour(+id)
        .then(response=> {
          setTour(response);
          setEventKey('about') })
        .catch(err=> notifyService.error(err));
        
    });
    
    return (
    <div className="Details">
      <Nav justify variant="tabs" defaultActiveKey="about" onSelect={(eventKey) => setEventKey(eventKey)}>
        <Nav.Item>
          <Nav.Link eventKey ="about">אודות המסלול</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="way"> דרכי הגעה</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="map"> מפה</Nav.Link>
        </Nav.Item>
      </Nav>
      <div className="indetail">
          { eventKey === "about" && <Description tour={tour} />}
          { eventKey === "way" && <Way way={tour.way} />}
          {eventKey === "map" && <Map map={tour.mapUrl} />}
      </div>
    </div>
    );
}

export default Details;
