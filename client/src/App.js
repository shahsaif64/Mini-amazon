import './App.css';
import SignUp from './components/auth/SignUp';
import SignIn from './components/auth/SignIn';
import Footer from './components/footer/Footer';
import Navbar from './components/header/Navbar';
import Maincomp from './components/home/Maincomp';
import Newnav from './components/newnavbar/Newnav';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Singleproduct from './components/single/Singleproduct';
import Cart from './components/cart/Cart';


function App() {
  return (
  <>
  <BrowserRouter>
   <Navbar/>
   <Newnav/>

   <Routes>
    <Route path='/' element={<Maincomp/>}/>
    <Route path='/login' element={<SignIn/>}/>
    <Route path='/signup' element={<SignUp/>}/>
    <Route path='/singleproduct/:id' element={<Singleproduct/>}/>
    <Route path='/cart' element={<Cart/>}/>
   </Routes>
   
   <Footer/>
  </BrowserRouter>
   
   
  
  </>
  );
}

export default App;
