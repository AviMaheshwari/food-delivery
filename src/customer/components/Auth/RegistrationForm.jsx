import {Typography,TextField,Button,FormControl,InputLabel,Field,MenuItem} from '@mui/material'
import {Form,Field,Formik} from 'formik'
import React from "react";
import {useNavigate} from 'react-router-dom'
import { registerUser } from '../State/Authentication/Action';
import{useDispatch} from 'react-redux'

const initialValues={
    fullName:"",
    email:"",
    password:"",
    role: "ROLE_ADMIN",
    };
    

export default function RegistrationForm() {
  const navigate = useNavigate();
  const dispatch=useDispatch()

  const handleSubmit = (values) => {
    console.log("form values",values)
    dispatch(registerUser({userData:values,navigate}))
  }
  return (
    <div>
      <div>
        <Typography variant="h5" className="text-center">
        Register
        </Typography>

        <Formik onSubmit={handleSubmit} initialValues={initialValues}> 

          <Form>
          <Field
              as={TextField}
              name="fullName"
              label="full name"
              fullWidth
              variant="outlined"
              margin="normal"
            />

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
              type="password"
            />

  <Field
  fullWidth
  margin="normal"
  as={Select}
    labelId="role-simple-select-label"
    id="demo-simple-select"
    name="role"
   // value={age}
   
    //onChange={handleChange}
  >
    <MenuItem value={"ROLE_Customer"}>Customer</MenuItem>
    <MenuItem value={"ROLE_ADMIN"}>Admin</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Field>

            
            <Button
              sx={{ mt: 2, Padding: "1rem" }}
              fullWidth
              type="Submit"
              variant="contained"
            >
              Register
            </Button>
          </Form>
        </Formik>
        <Typography variant="body2" align="center" sx={{ mt: 3 }}>
          if have an Account already?
          <Button size="small" onClick={() => navigate("/account/login")}>
            login
          </Button>
        </Typography>
      </div>
    </div>
  );
}
