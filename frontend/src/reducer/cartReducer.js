import { CART_ADD_ITEM } from "../constans/cartConstans";

function cartReducer(state={cartItem:[]},action){
    switch(action.type){
        case CART_ADD_ITEM:
            const item= action.payload;
            const product =state.cartItem.find(x=> x.product ===item.product);
            if(product){
               return {
                cartItem:
                    state.cartItem.map(x=>x.product ===product.product?item:x)
                };
            }
            return {cartItem:[...state.cartItem,item]}
            default:
                return state;
    }
}


export {cartReducer}