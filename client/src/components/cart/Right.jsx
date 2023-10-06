import amzProtect from '../../assets/static/amzProtect.png';
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {useNavigate} from 'react-router-dom'

const Right = ({itemCount,amount}) => {
  const navigate= useNavigate();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    if(!localStorage.getItem('Webtoken')){

      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
       <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Message</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To Place Order, please Login or Create a New Account.
          </DialogContentText>
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={()=>{navigate('/login')}}>Login</Button>
          <Button onClick={()=>{navigate('/signup')}}>Create New Account</Button>
        </DialogActions>
      </Dialog>
    </div>
    <div className='right_buy'>
        <img src={amzProtect} alt="" />
         <div className="cost_right">
            <p>Your order is eligible for FREE Delivery.</p> <br />
             <span style={{color:"#565959"}}>Select this option at checkout. Details</span>
             <h3>Subtotal ({itemCount} item) : <span style={{fontWeight:700, color:"#111"}}>&#x20B9;{amount}</span></h3>
             <button className='rightbuy_btn' onClick={()=>{handleClickOpen()}}>Process to Buy</button>
             <div className="emi">
                Emi available
             </div>
         </div>
    </div>
    </>
  )
}

export default Right