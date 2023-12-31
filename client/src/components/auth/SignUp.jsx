import React, { useState } from 'react'
import amzBlack from '../../assets/static/blacklogoamazon.png';
import './sign.css';
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, resetUser } from '../../redux/slices/users/userSlice';
import AlertBox from '../alert/AlertBox';

const SignUp = () => {
  const navigate = useNavigate();
  const { success, error, loading } = useSelector(state => state.user)

  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState({ fname: "", email: "", mobile: "", password: "", cpassword: "" });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
    //  console.log(credentials);
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    const { password, cpassword } = credentials;
    if (password === cpassword) {
      dispatch(addUser(credentials));

    } else {
      console.log("password do not match");
    }

  }

  if (success) {

    setTimeout(() => {
      dispatch(resetUser());
      navigate("/login");
    }, 2000);
  } else if (error) {
    setTimeout(() => {
      dispatch(resetUser());
    }, 2000);
  }




  return (
    <>

      <section>
        <AlertBox success={success} error={error} loading={loading} />


        <div className="sign_container">


          <div className="sign_header">
            <img src={amzBlack} alt="AmazonLogo" />
          </div>

          <div className="sign_form">
            <form onSubmit={handleSubmit}>
              <h1>Create a new Account</h1>
              <div className="form_data">
                <label htmlFor="fname">Full name</label>
                <input type="text" onChange={handleChange} name='fname' id='fname' />
              </div>
              <div className="form_data">
                <label htmlFor="email">Email</label>
                <input type="text" onChange={handleChange} name='email' id='email' />
              </div>
              <div className="form_data">
                <label htmlFor="mobile">Mobile</label>
                <input type='number' onChange={handleChange} name='mobile' id='mobile' />
              </div>
              <div className="form_data">
                <label htmlFor="password">Password</label>
                <input type="password" onChange={handleChange} name='password' id='password' />
              </div>
              <div className="form_data">
                <label htmlFor="cpassword">Confirm Password</label>
                <input type="password" onChange={handleChange} name='cpassword' id='cpassword' />
              </div>
              <button className='signin_btn' type="submit">Continue</button>
              <div className="signin_info">
                <p>Already have an Account ?</p> &nbsp;
                <Link to="/login">Sign in</Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default SignUp