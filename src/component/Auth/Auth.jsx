
import { Box, Modal } from '@mui/material'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { style } from '../Cart/Cart';
import RegisterForm from '../Auth/RegisterForm'
import LoginForm from '../Auth/LoginForm'

export const Auth = () => {
    const location=useLocation();
    const navigate=useNavigate();
    const handleonClose=()=>{
        navigate("/")
    }

    return (
        <Modal onClose={handleonClose} open={
            location.pathname==="/account/register"
            || location.pathname==="/account/login"
        }>
            <Box sx={style} >
                {
                    location.pathname==="/account/register"? <RegisterForm/> : <LoginForm/>
                }
                 
            </Box>
        </Modal>
    )
}
