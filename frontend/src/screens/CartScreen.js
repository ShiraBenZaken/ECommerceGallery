import React, { useEffect } from 'react';
import {useSelector,  useDispatch } from 'react-redux';  
import { addToCart } from "../action/cartAction";


function CartScreen(props){
    const cart= useSelector(state => state.cart);
    const {cartItem} =cart;
    const productId =props.match.params.id;
    const dispatch = useDispatch();

    useEffect(()=>{
        if(productId){
            dispatch(addToCart(productId));
           // dispatch(addToCart(props.match.params.id));
        }
    }, []);


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
                    cartItem.length ===0 ?
                    <div>
                        העגלה ריקה
                    </div>
                    :
                    cartItem.map(item =>
                        <div>
                            <img src={item.image} alt="product"></img>
                            <div className="cart-name">
                                <div>
                                    {item.name}
                                </div> 
                            </div>
                            {item.price}
                        </div>
                    )
                }
            </ul>
        </div>
        <div className="catr-action">
        </div>
    </div>
}

export default CartScreen;