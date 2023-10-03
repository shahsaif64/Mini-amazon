import React from 'react'
import {useDispatch} from 'react-redux'
import { removeItem } from '../../redux/slices/cart/cartSlice';

const Option = ({productId}) => {
  const dispatch = useDispatch();
  const removeFromCart=(id)=>{
    dispatch(removeItem(id));
  }
  return (
    <div className='add_remove_select'>
        <select name="" id="">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
        <p style={{cursor:"pointer"}} onClick={()=>{removeFromCart(productId)}}>Delete</p> <span>|</span>
        <p className='forremovemedia'>Save for Later</p><span>|</span>
        <p className='forremovemedia'>See More Like this</p>
    </div>
  )
}

export default Option