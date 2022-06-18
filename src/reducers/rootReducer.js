import { combineReducers } from 'redux'

// cart
import { cartReducer } from './cartReducers'

//user
import { authReducer } from './authReducer'

//status reducer
import { statusReducer } from './statusReducer'

export const rootReducer = combineReducers({
    cart : cartReducer,
    auth : authReducer,
    status : statusReducer,
})

// { cart : [ ], auth : { user : null}, status : { loading:false, error : '' } }