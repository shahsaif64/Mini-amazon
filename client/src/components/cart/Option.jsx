import React from 'react'
import { useDispatch } from 'react-redux'
import { removeItem, resetItem,emptyRemove } from '../../redux/slices/cart/cartSlice';

const Option = ({ productId }) => {
  const dispatch = useDispatch();

  const removeFromCart = (auth, id) => {
    if (!id) {
      dispatch(emptyRemove(auth));
    } else {

      dispatch(removeItem({ auth, id }));
    }



    setTimeout(() => {
      dispatch(resetItem());
    }, 2000);

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
      <p style={{ cursor: "pointer" }} onClick={() => { !localStorage.getItem('Webtoken') ? removeFromCart(productId) : removeFromCart(localStorage.getItem('Webtoken'), productId) }}>Delete</p> <span>|</span>
      <p className='forremovemedia'>Save for Later</p><span>|</span>
      <p className='forremovemedia'>See More Like this</p>
    </div>
  )
}

export default Option