import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import addToCart from '../action/cartAction';


function CartScreen(prop){
    const productId =prop.match.params.id;
    const dispatch= useDispatch();

    useEffect(()=>{
        if(productId){
            dispatch(addToCart(productId));
        }
    }, [])


    return <div>CartScreen

    </div>
}

export default CartScreen;