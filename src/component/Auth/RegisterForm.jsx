import { Button, MenuItem, Select, TextField, Typography } from '@mui/material'
import React from 'react'
import { Field, Form, Formik } from "formik";
import { useNavigate } from 'react-router-dom'
import { registerUser } from '../State/Authentication/Action';
import { useDispatch } from 'react-redux';

const initialvalues = {
  fullname: "",
  email: "",
  password: "",
  role: "ROLE_CUSTOMER"
}

const RegisterForm = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch ()
  const handleSubmit = (values) => {
    dispatch(registerUser({ userData: values, navigate }))
    console.log("form values",values)
   }
  return (
    <div style={{ fontFamily: 'Playfair'}}>
      <Typography variant='h5' className='text-center'>
        Register
      </Typography>

      <Formik onSubmit={handleSubmit} initialValues={initialvalues}>
        <Form>
          <Field
            as={TextField}
            name="fullname"
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
            id="role-simple-select"
            name="role"
          >
            <MenuItem value={"ROLE_CUSTOMER"}>Customer</MenuItem>
            <MenuItem value={"ROLE_RESTAURANT_OWNER"}>Restaurant Owner</MenuItem>
          </Field>
          <Button sx={{ mt: 2, padding: "1rem" }} fullWidth type='submit' variant='contained'>
            Register</Button>
        </Form>
      </Formik>
      <Typography variant='body2' align='center' sx={{ mt: 3 }}>
        if have a acoount already?
        <Button size='small' onClick={() => navigate("/account/login")}>
          Login
        </Button>
      </Typography>
    </div>
  )
}

export default RegisterForm
