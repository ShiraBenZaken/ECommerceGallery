import { CART_ADD_ITEM } from "../constans/cartConstans";
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
export {addToCart}