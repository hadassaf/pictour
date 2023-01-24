import { useEffect, useState } from "react";
import notifyService from "../../../Services/NotifyService";
import productsService from "../../../Services/ProductsService";
import Product from "../Product/Product";
import "./Store.css";

function Store(): JSX.Element {
    const [products, setProducts] = useState([])

    useEffect(() => {
         productsService.getAllProducts()
         .then(products=> setProducts(products))
         .catch(err=> notifyService.error(err))
    
    }, [])
    
    return (
        <div className="Store">
            {
                products.map(
                    p=>(
                        <Product key={p.id} product={p}/>
                    )
                )
            }
            
        </div>
    );
}

export default Store;
