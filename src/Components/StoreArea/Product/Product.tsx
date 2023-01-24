import ProductModel from "../../../Models/ProductModel";
import "./Product.css";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

import {  IoBagAdd, IoBagRemove } from "react-icons/io5";
import {  useState } from "react";
import cartService from "../../../Services/CartService";
import notifyService from "../../../Services/NotifyService";
import { useNavigate } from "react-router-dom";

interface productProps{
    product:ProductModel

}
function Product(props:productProps): JSX.Element {
    const navigate =useNavigate()
    const [open, setOpen] = useState(false);
    const [ inCart, setInCart] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
    const cart = async (product:ProductModel) =>{
    if (!inCart) {
        setInCart(true);
        onOpenModal();
        cartService.addToCart(product)
        .catch( err=> notifyService.error(err));    
        }
        else{
            setInCart(false);
            onOpenModal();
            cartService.deleteFromCart(product.id)
            .then( response=> notifyService.success('הפריט הוסר מהעגלה '));    
    }}
    const watchList=()=>{
        navigate('/cart')
    }
    const continueShopping=()=>{
        onCloseModal()
    }
       
    return (
        <div className="Product">

            <img src={props.product.imageUrl} alt={props.product.name}/>
            <div>
            <h2>{props.product.name}</h2> <br />
            <span>{props.product.description}</span> <br /> <br />
            <span>{props.product.price} ₪</span> <br />
            </div>
            <button  onClick={()=> cart(props.product)}>  { !inCart? <IoBagAdd/> : <IoBagRemove/>}</button>
            <Modal open={open} onClose={onCloseModal} classNames={{modal: 'Modal1'}}>
            <br /> <br />  <hr/>
           
            {inCart?<h2> (: הפריט נוסף בהצלחה  </h2> :<h2>  הפריט הוסר מהעגלה  </h2>} <hr/>
            <button className="b" onClick={continueShopping}>המשך בקניה</button>
            <button className="b" onClick={watchList}>צפה בפריטים שלך </button>
             </Modal>
            
            
        </div>
    );
}

export default Product;
