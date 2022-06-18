//slice = state that are key and value pairs

// 1.import createSlice API from redux-slices
import { createSlice } from '@reduxjs/toolkit'

//2.define the initial state of the slice
const initialState = [];

//3.create the slice using createSlice() and store it in cartSlice variable
const cartSlice = createSlice({
    //3.1 name a slice 
    name : 'cart',
    //3.2 define the initial state of the slice
    initialState : initialState,
    //3.2 define the reducer function
    reducers: {
        addToCart: (state, action) => {
            //Todo : search item first
            const foundItem = state.find(item => item.id === action.payload.id)

            if(!foundItem) {
                //with redux toolkit we can mutate state directly so we don't need to copy the state before mutating
                state.push(action.payload);
            } else {
                return state.map(item => ({
                    ...item,
                    quantity : item.id === foundItem.id ? 
                                            item.quantity + 1 
                                            : 
                                            item.quantity
                }) )
            }
        },
        removeFromCart : (state, action) => {
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
                        return state
                    } 
                    // if item.quantity = 1 => remove item from cart        
                    else if (toBeRemovedItem.quantity === 1) {
                        return state.filter(item => item.id !== action.payload);
                    }
                }
            return newCart
        },

        clearCart : (state, action) => {
            return state = [];
        }
    }
})

//! Note : what we got from cartSlice ?  (that created by createSlice() API )
//! 1. Action creators
export const  { addToCart, removeFromCart, clearCart } = cartSlice.actions;


//! 2. Reducer function and this can be imported as cartReducer in index.js
export default cartSlice.reducer;
