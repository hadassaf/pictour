import {  Route, Routes } from "react-router-dom";
import About from "../../AboutArea/About/About";
import Login from "../../AuthArea/Login/Login";
import Register from "../../AuthArea/Register/Register";
import Home from "../../HomeArea/Home/Home";
import Cart from "../../StoreArea/Cart/Cart";
import Equipment from "../../StoreArea/Equipment/Equipment";
import Store from "../../StoreArea/Store/Store";
import Details from "../../ToursArea/Details/Details";
import ToursList from "../../ToursArea/TourList/TourList";
import Tours from "../../ToursArea/Tours/Tours";
import PageNotFound from "../PageNotFound/PageNotFound";
import "./Routing.css";

function Routing(): JSX.Element {
    return (
        <div className="Routing">

            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/store" element={<Store />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="equipment" element={<Equipment />} />
                <Route path="/tours" element={<Tours />} />
                <Route path="/toursList" element={<ToursList />} />
                <Route path="/toursList/:id" element={<ToursList />} />
                <Route path="/details/:id" element={<Details />} />
                <Route path="/about" element={<About/>} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login/>} />
                <Route path="*" element={<PageNotFound /> } /> 
            </Routes>
			
        </div>
    );
}

export default Routing;
