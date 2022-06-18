import React from 'react'
// import { useNavigate } from 'react-router-dom'

//import dispatch
import { useDispatch, useSelector } from 'react-redux/es/exports';

//import cart action creator
import { addToCart } from '../store/slices/cartSlice';

//use this to push user to a specific website path
import { useNavigate } from 'react-router-dom'

export default function Item({product}) {

  const {user} = useSelector(state=> state.auth);
  
  // const navigate = useNavigate();
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleAddToCart = () => {
    if(user){
      dispatch(addToCart({...product, quantity : 1}));
    } else {
      navigate('/signin');
    }
  }


  return (
    <div className='product' >
        <h4>{product.title}</h4>
        <p>{product.price}</p>
        <button style={{borderRadius: '2px', border : '0px', backgroundColor:'#beb6b6', cursor:'pointer'}} 
          onClick={handleAddToCart} > 
            Add To Cart
          </button>
      </div>
  )
}