import React from 'react'
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import { Alert } from '@mui/material'
import './alert.css';

const AlertBox = ({ success, error, loading }) => {
  return (
    <div className='alertBox'>
      {error && <Alert sx={{ display: "flex", justifyContent: "center" }} variant="filled" severity="error">
        {error}!
      </Alert>}
      {success==="Login successful" ? <Alert sx={{ display: "flex", justifyContent: "center" }} variant="filled" severity="success">
        {success}
      </Alert>:<></>}
      {success==="SignUp complete — Login Now!" ? <Alert sx={{ display: "flex", justifyContent: "center" }} variant="filled" severity="success">
      {success}
      </Alert>:<></>}
      {success==="item added to cart" ? <Alert sx={{ display: "flex", justifyContent: "center" }} variant="filled" severity="success">
      {success}
      </Alert>:<></>}
      {success==="item removed from cart" ? <Alert sx={{ display: "flex", justifyContent: "center" }} variant="filled" severity="error">
      {success}
      </Alert>:<></>}
      

        
      
      {loading &&  <Box sx={{ width: '100%' }}>
      <LinearProgress />
    </Box>}

    </div>
  )
}

export default AlertBox