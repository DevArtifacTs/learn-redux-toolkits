import { startFetch,  endFetch, errorFetch} from "./statusActions";
import { signin } from "../data/users";

export const SET_AUTH = 'SET_AUTH';

export function setAuth(user){
    return {
        type: SET_AUTH,
        payload: user,
    }
}


// return async thunk function
export function fetchAuthAsync(email, password) {
    return async function (dispatch, getState) {
      try {
        dispatch(startFetch())
        console.log('start fetch states: ', getState() );
  
        const user = await signin(email, password)
        console.log('user: ', user);
        if (user) {
          dispatch(setAuth(user))
          dispatch(errorFetch(''))
          dispatch(endFetch())
          console.log('set auth state ', getState() );
        }
      } catch (error) {
        console.log('error: ', error);
        dispatch(setAuth(null))
        dispatch(errorFetch(error))
        dispatch(endFetch())
        console.log('set auth state error ', getState() );
      }
    }
  }