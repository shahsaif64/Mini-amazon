import { Divider } from "@mui/material";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {products} from './productdata';
import './slide.css';
import { Link } from "react-router-dom";


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

// const Slide = (props) => {
const Slide = ({title}) => {
  return (
    <div className="products_section">
      <div className="products_deal">
        <h3>{title}</h3>
        <button className="view_btn">View All</button>
      </div>
      <Divider />
      <Carousel
        responsive={responsive}
        infinite={true}
        swipeable={true}
        draggable={false}
        showDots={false}
        centerMode={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
      >
       {
        products.map((item)=>{
            return(
                <div className="products_items"  key={item.id}>
                    <div className="product_img">
                    <Link to={`/singleproduct/${item.id}`}><img src={item.url} alt="productItem" /></Link> 
                    </div>
                    <p className="products_name">{item.title.shortTitle}</p>
                    <p className="products_offer">{item.discount}</p>
                     <p className="products_explore">{item.tagline}</p>
                </div>
            )
        })
       }

      </Carousel>
    </div>
  );
};

export default Slide;
