import { NavLink } from "react-router-dom";
import "./Menu.css";
import { VscDeviceCamera } from 'react-icons/vsc';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { HiOutlineHome } from 'react-icons/hi';
import { FaMapSigns } from 'react-icons/fa';
import useAuth from "../../../Services/useAuth";

function Menu(): JSX.Element {
    const {auth,logoutUser}= useAuth()

    return (
        <div className="Menu">
            <div >
            <VscDeviceCamera className="logo"/>
            <NavLink to='/tours'>נצא לדרך?</NavLink>
            <NavLink to='/store'>חנות</NavLink>
            <NavLink to='/about'>אודותינו</NavLink>
            </div>
            <div >
            {auth?<div className="orange" > {auth?.name} <span className="logout" onClick={logoutUser}> ליציאה</span></div> :<NavLink to='/register'>התחבר</NavLink>}                
            <NavLink to='/cart'> <AiOutlineShoppingCart className="logo"/></NavLink> 
            <NavLink to='/tourslist'> <FaMapSigns  className="logo"/></NavLink> 
            <NavLink to='/'><HiOutlineHome className="logo"/></NavLink>
            </div>
        </div>
    );
}

export default Menu;
