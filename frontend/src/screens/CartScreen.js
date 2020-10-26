import React, { useEffect } from 'react'



function CartScreen(prop){
    const productId =prop.match.params.id;

    useEffect(()=>{
        if(productId){
            dispach(addToCart(productId));
        }
    }, [])


    return <div>CartScreen

    </div>
}

export default CartScreen;