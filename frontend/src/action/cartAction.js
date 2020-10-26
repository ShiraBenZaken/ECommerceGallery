import Axios from 'axios';


const addToCart=(productId)=> async(dispatch)=> {

    try{
        const {data} = await Axios.get("/api/products/" + productId);
    }
    catch (error)
    {

    }
}