import React, {useState} from 'react'
import amzBlack from '../../assets/static/blacklogoamazon.png';
import './sign.css';
import {Link} from 'react-router-dom'

const SignIn = () => {

  const [loginCred, setLoginCred] = useState({email:"", password:""});

  function handleChange(e){
    setLoginCred({...loginCred,[e.target.name]:e.target.value});
  }
  function handleSubmit(e){
    e.preventDefault();
    console.log(loginCred);
  }

  return (
    <>
    <section>
      <div className="sign_container">
        <div className="sign_header">
          <img src={amzBlack} alt="AmazonLogo" />
        </div>
        <div className="sign_form">
          <form onSubmit={handleSubmit}>
            <h1>Sign In</h1>
            <div className="form_data">
              <label htmlFor="email">Email</label>
              <input type="text" placeholder='example@mail' onChange={handleChange} name='email' id='email'/>
            </div>
            <div className="form_data">
              <label htmlFor="password">Password</label>
              <input type="password" placeholder='atleast 8 characters' onChange={handleChange} name='password' id='password'/>
            </div>
            <button className='signin_btn' type="submit">Continue</button>
          </form>
        </div>
        <div className="create_accountinfo">
          <p>New to Amazon ?</p>
          <button><Link to="/signup">Create Your Amazon account</Link></button>
        </div>
      </div>
    </section>
    </>
  )
}

export default SignIn