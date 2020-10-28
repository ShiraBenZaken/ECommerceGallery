import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {useSelector,  useDispatch } from 'react-redux';  
import { detailsProduct } from "../action/productActions";


function ProductScreen (props){
   
    const productDetails = useSelector(state => state.productDetails);  
    const {product, loading, error} = productDetails;
    const dispatch = useDispatch();


    useEffect(() =>{
        dispatch(detailsProduct(props.match.params.id));
        return () => {
            console.log("work")
            // 
        };
    }, []);

    const handleAddToCart = () =>{
        props.history.push("/cart/" + props.match.params.id);
    }

    return <div className="">
        <div className="back-to-result">
            <Link to="/">חזרה</Link>
        </div>
        {loading? <div>Loading</div>:
        error? <div> {error}</div>:
        (
            <div className="details">
            <div className="details-image">
                <img  className="product-image" src={product.image} alt="product"></img>
            </div>
            <div className="details-info">
                <ul>
                    <li>
                        <h4>{product.name}</h4>
                    </li>
                    <li>
                        מחיר: <b>{product.price}</b>
                    </li>
                    <li>
                        תיאור:
                        <div>{product.description}</div>
                    </li>
                </ul>
            </div>
            <div className="details-action">
                <ul>
                    <li>
                        מחיר: {product.price}
                    </li>
                    <li>
                        סטטוס: {product.status}
                    </li>
                    <li>
                        <button onClick={handleAddToCart} className="button">הוסף לעגלה</button>
                    </li>

                </ul>
            </div>

        </div>  
        )
        
        } 

    </div>
}

export default ProductScreen    ;