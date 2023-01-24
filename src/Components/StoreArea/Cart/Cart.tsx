import { useEffect, useState } from "react";
import ProductModel from "../../../Models/ProductModel";
import cartService from "../../../Services/CartService";
import notifyService from "../../../Services/NotifyService";
import "./Cart.css";
import { BsTrashFill } from 'react-icons/bs';



function Cart():JSX.Element {
 
    const [cart, setCart] = useState<ProductModel[]>([]);
    const [total, setTotal] = useState<number>(0);

    const deleteProduct=async (id:number)=>{
        await cartService.deleteFromCart(id)
        notifyService.success('הפריט הוסר מהעגלה ')
        cartService.getAllCart()
        .then(data=>setCart(data) )
        .catch( err=>notifyService.error(err))
        cartService.getTotal()
        .then(data=>setTotal(data) )
        .catch( err=>notifyService.error(err))
    }

    useEffect(() => {
        cartService.getAllCart()
        .then(data=>setCart(data) )
        .catch( err=>notifyService.error(err))
        cartService.getTotal()
        .then(data=>setTotal(data) )
        .catch( err=>notifyService.error(err))
    
    }, []);

    
    
    return (
        <div className="Cart">
            <div className="CartProducts">
            {
                cart.map(p=>(
                    <div key={p.id} className="CartProduct">
                        <img src={p.imageUrl} alt={p.name}/>
                        <div>
                            <span>{p.name}</span> <br /><br />
                            <span >{p.price} ₪ </span> <br /><br />
                            <BsTrashFill className="orange" onClick={()=>deleteProduct(p.id)}/> <br />
                        </div>
                    </div>
                    )
                )
            }
			</div>
            <div className="total">
                <span>סה"כ לתשלום </span> <br />
                <span>{total} ₪ </span>
                
            </div>
        </div>
    )
}


export default Cart;
