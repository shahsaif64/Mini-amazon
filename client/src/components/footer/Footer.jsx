import React from 'react'
import amzLogo from '../../assets/static/amazon_PNG25.png';
import './footer.css';

const Footer = () => {
    const year= new Date().getFullYear();
  return (
    <footer>
        <div className="footer_container">
            <div className="footr_details_one">
                <h3>Get to know us</h3>
                <p>About us</p>
                <p>Careers</p>
                <p>Press Releases</p>
                <p>Amazon Cares</p>
            </div>
            <div className="footr_details_one">
                <h3>Connect with us</h3>
                <p>Facebook</p>
                <p>Twitter</p>
                <p>Instagram</p>
            </div>
            <div className="footr_details_one forres">
                <h3>Make money with us</h3>
                <p>About us</p>
                <p>Careers</p>
                <p>Press Releases</p>
                <p>Amazon Cares</p>
            </div>
            <div className="footr_details_one forres">
                <h3>Make money with us</h3>
                <p>About us</p>
                <p>Careers</p>
                <p>Press Releases</p>
                <p>Amazon Cares</p>
            </div>
        </div>
        <div className="lastdetails">
            <img src={amzLogo} alt="" />
            <p>Conditions of Use & sales&nbsp;&nbsp;&nbsp; Privacy Notice &nbsp;&nbsp;&nbsp;  Interest-Based Ads &nbsp;&nbsp;&nbsp;    &copy; 1996-{year}, Amazon.com, inc. or its affiliates</p>
        </div>
    </footer>
  )
}

export default Footer