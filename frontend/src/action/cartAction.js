import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constans/cartConstans";
import Cookie from "js-cookie";
import Axios from 'axios';


const addToCart=(productId)=> async(dispatch,getState )=> {
    try{
        const {data} = await Axios.get("/api/products/" + productId);
        dispatch({
            type:CART_ADD_ITEM, payload:{
            product:data._id,
            name:data.name,
            image:data.image,
            price:data.price,
            countInStock:data.countInStock
            }
        });
        const {cart:{cartItems}} = getState();
        Cookie.set("cartItems", JSON.stringify(cartItems));

    }catch (error)
    {
     //   dispatch({type: PRODUCT_LIST_FAIL, payload: error.message});
    }
}

const removeFromCart =(productId) => (dispatch, getState) =>{
    dispatch({type:CART_REMOVE_ITEM , payload:productId});

    
    const {cart:{cartItems}} =getState();
    Cookie.set("cartItems", JSON.stringify(cartItems));

}
export {addToCart,removeFromCart}