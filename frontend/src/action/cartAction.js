import Axios from 'axios';


const addToCart=(productId)=> async(dispatch)=> {

    try{
        const {data} = await Axios.get("/api/products/" + productId);
        dispatch({type:CART_ADD_ITEM, payload:{
            product:data._id,
            name:data.name,
            image:data.image,
            price:data.price,
            countInStock:data.countInStock,
        }})
    }
    catch (error)
    {

    }
}