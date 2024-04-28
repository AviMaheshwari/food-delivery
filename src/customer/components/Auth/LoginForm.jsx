import {Typography,Button,TextField} from '@mui/material'
import {Formik,Form,Field} from 'formik'
import React from 'react'
import { useDispatch} from 'react-redux'
import { loginUser } from '../State/Authentication/Action'
import {useNavigate} from 'react-router-dom'


const initialValues={
email:"",
password:""
}
const LoginForm = () => {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const handleSubmit=(values)=>{
        dispatch(loginUser({userData:values,navigate}))
       


    }
  return (
    <div>
        <Typography variant='h5' className ='text-center'>

        </Typography>

        <Formik onSubmit={handleSubmit}>

            <Form>
                <Field 
                    as={TextField}
                    name="email"
                    label="email"
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    />
                 <Field 
                    as={TextField}
                    name="password"
                    label="password"
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    />

                    <Button sx={{mt:2, Padding:"1rem"}} fullWidth type='Submit' variant='contained'>Login</Button>
            </Form>

        </Formik>
        <Typography variant='body2' align='center' sx={{mt:3}}>
            Don't have Account?
            <Button size='small' onClick={()=>navigate("/account/register")}>
                register
            </Button>
        </Typography>
      
    </div>
  )
}

export default LoginForm
