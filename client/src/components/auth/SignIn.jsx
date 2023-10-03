import React, {useState} from 'react'
import amzBlack from '../../assets/static/blacklogoamazon.png';
import './sign.css';
import {Link,useNavigate} from 'react-router-dom'
import AlertBox from '../alert/AlertBox';
import {useDispatch,useSelector} from 'react-redux'
import { loginUser,resetUser } from '../../redux/slices/users/userSlice';

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate= useNavigate();
  const {token,success, error,loading} = useSelector(state=>state.user);
  const [loginCred, setLoginCred] = useState({email:"", password:""});

  function handleChange(e){
    setLoginCred({...loginCred,[e.target.name]:e.target.value});
  }

  function handleSubmit(e){
    e.preventDefault();
    dispatch(loginUser(loginCred));
    
   
    setTimeout(() => {
      if(localStorage.getItem('Webtoken')){
        navigate('/');
      }
      dispatch(resetUser());
    }, 2000);
    
  }
  if(token){
    localStorage.setItem('Webtoken',token);
  }
  
  // useEffect(() => {
  //   if(localStorage.getItem('Webtoken')){
  //     navigate('/');
  //   }
  //   // eslint-disable-next-line
  // }, [localStorage.getItem('Webtoken')])
  

  return (
    <>
    <section>
      <AlertBox success={success} error={error} loading={loading}/>
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