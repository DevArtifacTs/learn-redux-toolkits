//Todo 1. import createSlice()
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { signin } from '../../data/users';


//Todo 2. define initial state of the slice
const initialState = {
    user: null,
    loading: false,
    error : '',
}

//Todo 2.1. create asyncThunk function
export const signInAsync = createAsyncThunk('signIn', async ({email, password}, store) => {
    try{
        const user = await signin(email, password); // we can use axios.post here!
        return user;  // return action object to the extraReducer and this value will be appear in extraReducer
    } catch(err){   
        throw err ;
    }
} )
// asyncThunk will auto generating our async function state 
// signInAsync.pending, signInAsync.fulfilled, signInAsync.rejected

//Todo 3. define action creators and reducers
const authSlice = createSlice({

    //Todo 3.1. define slice name
    name: 'auth',

    //Todo 3.2. define slice state
    initialState,

    //Todo 3.3. define action creators and reducer
    reducers : {
        signOut : (state, action) => {
            state.user = null;
            state.loading = false;
            state.error = '';
        },
    }, // this is for dispatch a normal object state
    extraReducers : { // This is for async dispatch operations.
        [signInAsync.pending] : (state, action) => {
            state.loading = true;
            state.error = '';
        },
        [signInAsync.fulfilled] : (state, action) =>{
            state.user = action.payload;
            state.loading = false;
            state.error = '';
        },
        [signInAsync.rejected] : (state, action) => {
            state.user = null
            state.loading = false;
            state.error = action.error.message;
        },
    }
})


//Todo 4. export actions and reducer
//actions
export const { signOut } = authSlice.actions;
//reducer
export default authSlice.reducer;
