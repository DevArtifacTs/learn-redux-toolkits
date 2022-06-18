import React from 'react'
import { Link } from 'react-router-dom'

// Redux selector
import { useSelector, useDispatch } from 'react-redux/es/exports'

//import sigOut function
import { signOut } from '../store/slices/authSlice'

//clear cart data
import { clearCart } from '../store/slices/cartSlice'

export default function Nav() {

  //select all state from redux store and return only state.cart
  const cart = useSelector((state)=> state.cart)
  const { user } = useSelector(state=> state.auth);
  const dispatch = useDispatch();

  const handleSignOut = e => {
    dispatch(clearCart());
    dispatch(signOut());
  }

  return (
    <header className='head'>
      <div>
        <ul className='nav'>
          <li className='nav-list'>
            <Link to='/'>Products</Link>
          </li>
          {user && 
            <li className='nav-list'>
              <Link to='/cart'>Cart 
              <span className='cart-num'>
              {cart.reduce((sum, item) => sum += item.quantity, 0)}  
              </span></Link>
            </li>
          }
          <li className='nav-list'>
            {user? <button  onClick={handleSignOut} >SignOut</button> : <Link to='/signin'>SignIn</Link> }
            
          </li>
        </ul>
      </div>
    </header>
  )
}