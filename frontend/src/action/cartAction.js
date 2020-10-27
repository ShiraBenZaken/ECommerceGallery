import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constans/cartConstans";
import axios from 'axios';

const addToCart=(productId)=> async(dispatch)=> {
    try{
        const {data} = await axios.get("/api/products/" + productId);
        dispatch({
            type:CART_ADD_ITEM, payload:{
            product:data._id,
            name:data.name,
            image:data.image,
            price:data.price,
            countInStock:data.countInStock
            }
        });
    }catch (error)
    {
     //   dispatch({type: PRODUCT_LIST_FAIL, payload: error.message});
    }
}

const removeFromCart =(productId) => (dispatch) =>{
    dispatch({type:CART_REMOVE_ITEM , payload:productId});
}
export {addToCart,removeFromCart}