import React, { useEffect } from 'react';
import {useSelector,  useDispatch } from 'react-redux';  
import { addToCart, removeFromCart } from "../action/cartAction";
import { Link } from 'react-router-dom';

function CartScreen(props){
    const cart= useSelector(state => state.cart);
    const {cartItems} =cart;
    const productId =props.match.params.id;
    const dispatch = useDispatch();
    const removeFromCartHandler =(productId)=>{
        dispatch(removeFromCart(productId));
    }

    useEffect(()=>{
        if(productId){
            dispatch(addToCart(productId));
        }
    }, []);

    const checkOutHandler=() =>{
        props.history.push("/signin?reirect=shipping");
    };
    


    return <div className="cart">
        <div className="cart-list">
            <ul className="cart-list-container">
                <li>
                    <h3>
                        עגלת קניות
                    </h3>
                    <div>
                        מחיר
                    </div>
                </li>
                {
                    cartItems.length ===0?
                    <div>
                        העגלה ריקה
                    </div>
                    :
                    cartItems.map(item =>
                    <li>
                        <div className="cart-image">
                            <img src={item.image} alt="product"></img>
                        </div>
                        <div className="cart-name">
                            <div>
                                <Link to={"/product/" + item.product }>
                                    {item.name}
                                </Link>
                            </div> 
                            <button type="button" className="button" onClick={() => removeFromCartHandler(item.product)}>
                                הסרת תמונה
                            </button>
                        </div> 
                        <div className="cart-price">
                            ${item.price}
                        </div> 
                    </li>
                    )
                }
            </ul>
        </div>
        <div className="cart-action">
            <h3>
                מחיר כללי 
                :
                ${cartItems.reduce((a,c) => a+c.price,0)}
            </h3>  
            <button onClick={checkOutHandler} className="button primary full-width" disabled={cartItems.length === 0}>
            התקדם לקופה    
            </button>  
        </div>
    </div>
}

export default CartScreen;