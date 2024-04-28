import React from 'react'
import {Modal} from '@mui/material'
import {useLocation,useNavigate} from 'react-router-dom'

const Auth = () => {
    const location=useLocation();
    const navigate=useNavigate();
  return (
    <>

    <Modal open={
        location.pathname==="/account/register"
        || location.pathname==="/account/login"
        
    }>

       {/*<Box sx={Style}> 
         </Box> */}
    </Modal>
      
    </>
  )
}

export default Auth
