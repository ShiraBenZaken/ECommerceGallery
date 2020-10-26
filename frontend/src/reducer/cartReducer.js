function cartReducer(state={cartItem:[]},action){
    switch(action.type){
        case ADD_TO_CART:
            const item= action.payload;
            const product =state.cartItem.find(x=> x.product ===item.product);
            if(product){
               return {
                cartItem:
                    state.cartItem.map(x=>x.product ===product.product?item:x)
                };
            }
            return {cartItem:[...state.cartItem,item]}
    }
}