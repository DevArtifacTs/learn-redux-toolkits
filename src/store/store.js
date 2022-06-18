import { configureStore } from '@reduxjs/toolkit'

//import cartReducer 
// now we will get both cart action creator function => (return action type and payload)) 
//and cart reducer function => (mutate cart state)
import cartReducer from './slices/cartSlice';

//import authReducer
import authReducer from './slices/authSlice';

//create store
export default configureStore({
    reducer: {
        cart: cartReducer,
        auth : authReducer,
    },
})
// store's state is equal to { 
/**         { cart: [], 
 *            auth : {  user: null, loading: false, error: '' }
 * 
 * 
 * }
 * 
 *  */        