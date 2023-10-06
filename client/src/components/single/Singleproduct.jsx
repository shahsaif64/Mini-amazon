import React, { useEffect } from 'react';
import './singleproduct.css'
import { Alert, Divider } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux'
import statusCode from '../../utils/statusCode';
import { useParams } from 'react-router-dom';
import { getSingle } from '../../redux/slices/products/productSlice';
import { addItem,resetItem,emptyAdd} from '../../redux/slices/cart/cartSlice';
import AlertBox from '../alert/AlertBox';
import { useNavigate } from 'react-router-dom';

const Singleproduct = () => {
  const dispatch = useDispatch();
  const navigate= useNavigate();
  let { id } = useParams()
  const { single, status } = useSelector(state => state.products);
  const { msg,error } = useSelector(state => state.cart);
  
  const addToCart=(auth,item)=>{
    if(!item){
      dispatch(emptyAdd(auth));
    }else{

      dispatch(addItem({auth,item}));
    }
    setTimeout(() => {
      dispatch(resetItem());
    }, 2000);
  }

  useEffect(() => {
    dispatch(getSingle(id));
    // eslint-disable-next-line
  }, [])


  if (status === statusCode.LOADING) {
    return (
      <div className='home_section'>
        <h2 style={{ textAlign: "center" }}>Loading...</h2>
      </div>
    )
  }

  if (single.error || !single) {
    return (

      <div className='home_section'>
        <Alert variant="filled" severity="error" sx={{ textAlign: "center", width: "inherit" }}>Somehtning went wrong! &nbsp; {single.error?single.error:<></>}</Alert>
      </div>


    )
  }



  return (
    <>

      <div className='product_section'>
      <AlertBox success={msg} error={error} loading={false}/>
        <div className="cart_container">
          <div className="left_cart">
            <img src={single.url} alt="product_image" />
            <div className="cart_btn">
              <button className='cart_btn1' onClick={()=>{!localStorage.getItem('Webtoken') ? addToCart(single) : addToCart(localStorage.getItem('Webtoken'), single)
            }}>Add to cart</button>
              <button className='cart_btn2' onClick={()=>{navigate('/cart')}}>Buy now</button>
            </div>
          </div>
          <div className="right_cart">
            <h3>{single.title.shortTitle}</h3>
            <h4>{single.title.longTitle}</h4>
            <Divider />
            <p className='mrp'>M.R.P : &#x20B9;{single.price.mrp}</p>
            <p className=''>Deal of the Day : <span style={{ color: "#b12704" }}>&#x20B9;{single.price.cost}</span> </p>
            <p className=''>You save : <span style={{ color: "#b12704" }}>&#x20B9;{single.price.mrp - single.price.cost} ({single.price.discount})</span> </p>

            <div className="discount_box">
              <h5>Discount : <span style={{ color: "#111" }}>{single.discount}</span> </h5>
              <h4>Free Delivery : <span style={{ color: "#111", fontWeight: "600" }}>Oct 8 - 21</span> Details</h4>
              <p>Fastest delivery : <span style={{ color: "#111", fontWeight: "600" }}>Tomorrow 11AM</span> </p>
            </div>

            <p className='description'>About the Item : <span style={{ color: "#565959", fontSize: 14, fontWeight: 500, letterSpacing: ".4px" }}>{single.description}</span></p>

          </div>
        </div>
      </div>

    </>
  )
}

export default Singleproduct