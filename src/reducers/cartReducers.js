import { ADD_TO_CART, DELETE_FROM_CART } from "../actions/cartActions";

// action structure
/** 
 * const action = {
 *      type : 'ADD_TO_CART',
 *      payload : {
 *          id : 1,
 *          title : 'product 1',
 *          price : 10,
 *          quantity : 1   
 *    }
 * }
 * 
 * 
*/

const initialState = []

export const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TO_CART :
            let updatedState 
            const foundItem = state.find(item => item.id === action.payload.id)
            if(!foundItem) {
                updatedState = [...state, action.payload]
            } else {
                updatedState = state.map(item => ({
                    ...item,
                    quantity : item.id === foundItem.id ? item.quantity + 1 : item.quantity
                }) )
            }
            return updatedState
 
        case DELETE_FROM_CART :
            // define variable
            let newCart ;
            // find item id from action.payload
            const toBeRemovedItem = state.find(item => item.id === action.payload)
                //check if item id is in cart
                if(!toBeRemovedItem){
                    return ;
                } else {
                    // if item.quantity > 1  => item.quantity--
                    if(toBeRemovedItem.quantity > 1 ){
                        console.log('item.quantity > 1')
                        toBeRemovedItem.quantity -= 1
                        console.log('toBeRemovedItem', toBeRemovedItem);
                        console.log('state', state);
                        newCart = [...state]
                    } 
                    // if item.quantity = 1 => remove item from cart        
                    else if (toBeRemovedItem.quantity === 1) {
                        newCart = [...state.filter(item => item.id !== action.payload)];
                    }
                }
            return newCart
            
        default :
            return state;
              

    }
}