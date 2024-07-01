import React, { useEffect } from 'react';
import './App.css';
import { ThemeProvider } from '@emotion/react';
import { dark } from '@mui/material/styles/createPalette';
import { darkTheme } from './Theme/DarkTheme';
import { CssBaseline } from '@mui/material';
import './component/Navbar/Navbar.jsx';
import CustomerRoute from './Router/CustomerRoute.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from './component/State/Authentication/Action.js';
import { findCart } from './component/State/Cart/Action.js';


export default function App() {
  const dispatch = useDispatch()
  const jwt = localStorage.getItem('jwt')
  const { auth } = useSelector(store => store)
  useEffect(() => {
    dispatch(getUser(auth.jwt || jwt))
    dispatch(findCart(jwt))
  }, [auth.jwt])
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <CustomerRoute />
    </ThemeProvider>
  )
}

