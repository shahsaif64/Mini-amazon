import React, { useEffect } from 'react';
import Banner from './Banner';
import './home.css';
import Slide from './Slide';
import { getProducts } from '../../redux/slices/products/productSlice';
import { useDispatch, useSelector } from 'react-redux'
import Alert from '@mui/material/Alert';
import statusCode from '../../utils/statusCode';
import { getCartItems } from '../../redux/slices/cart/cartSlice';

const Maincomp = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(getProducts());
    if(localStorage.getItem('Webtoken')){
      dispatch(getCartItems(localStorage.getItem('Webtoken')))
    }
    // eslint-disable-next-line
  }, [])

  if (status === statusCode.LOADING) {
    return (
        <div className='home_section'>
      <h2 style={{textAlign: "center" }}>Loading...</h2>
      </div>
    )
  }
  if (status === statusCode.ERROR) {
    return (
        <div className='home_section'>
       <Alert variant="filled" severity="error" sx={{textAlign:"center", width:"inherit"}}>
        Something went wrong! Please try again Later
      </Alert>
      </div>
    )
  }

    return (
      <div className='home_section'>
        <div className="banner_part">
          <Banner />
        </div>
        <div className="slide_part">
          <div className="left_slide">
            <Slide title="Deal of the Day" products={products} />
          </div>
          <div className="right_slide">
            <h4>Festive latest Launches</h4>
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Jupiter/Launches/T3/DesktopGateway_CategoryCard2x_758X608_T3._SY608_CB639883570_.jpg" alt="rightimg" />
            <a href="/">see more</a>
          </div>
        </div>
        <Slide title="Today's Deal" products={products} />
        <div className="center_img">
          <img src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg" alt="" />
        </div>
        <Slide title="Best Seller" products={products} />
        <Slide title="Upto 80% off" products={products} />


      </div>
    )
}

export default Maincomp