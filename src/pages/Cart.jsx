import React from 'react'

//import useSelector
import { useSelector, useDispatch } from 'react-redux/es/exports';
//import cart action creator
import { removeFromCart } from '../store/slices/cartSlice';
import { clearCart } from '../store/slices/cartSlice';

export default function Cart() {

  //TODo : select cart state
  const cart = useSelector((state)=> state.cart);
  
  const dispatch = useDispatch();

  return <div className='cart'>
    <div className='cart-body'>
      <h4>Title</h4>
      <h4>Price</h4>
      <h4>Quantity</h4>
      <h4>Amount</h4>
      <h4>Delete</h4>
    </div>
    <button  onClick={()=> dispatch(clearCart())} >Clear cart</button> 
    {cart.length === 0 ? 
      <>
        <p>Cart is empty</p> 
      </> 
      : 
      cart.map((item) => 
        
          <div key={item.id} className='cart-body'>
            <p> {item.title} </p>
            <p> {item.price} </p>
            <p> {item.quantity} </p>
            <p> {item.price * item.quantity} </p>
            <p  style={{cursor: 'pointer'}} onClick={()=> dispatch( removeFromCart(item.id) )  }  >X</p>
            {/* now action.payload is item.id */}
          </div>
        
      )
    }
  </div>
}