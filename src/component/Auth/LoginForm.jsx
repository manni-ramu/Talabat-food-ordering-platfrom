import { Button, TextField, Typography } from '@mui/material'
import React from 'react'
import { Field, Form, Formik } from "formik";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from '../State/Authentication/Action';

const initialvalues = {
  email: "",
  password: ""
}
const LoginForm = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleSubmit = (values) => {
    dispatch(loginUser({ userData: values, navigate }))
  }
  return (
    <div style={{ fontFamily: 'Playfair' }}>
      <Typography variant='h5' className='text-center'>
        Login
      </Typography>

      <Formik onSubmit={handleSubmit} initialValues={initialvalues}>
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
          <Button sx={{ mt: 2, padding: "1rem" }} fullWidth type='submit' variant='contained'>Login</Button>
        </Form>
      </Formik>
      <Typography variant='body2' align='center' sx={{ mt: 3 }}>
        Dont have a acoount?
        <Button size='small' onClick={() => navigate("/account/register")}>
          register
        </Button>
      </Typography>
    </div>
  )
}

export default LoginForm
