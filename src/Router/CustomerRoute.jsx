import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Navbar from '../component/Navbar/Navbar';
import Profile from '../component/Profile/Profile';
import RestaurantDetail from '../component/Restaurant/RestaurantDetail';
import Cart from '../component/Cart/Cart';
import { Auth } from '../component/Auth/Auth';
import Home from '../component/Home/Home';

const CustomerRoute = () => {
    return (
        <div>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/account/:register" element={<Home/>} />
                <Route path="/restaurant/:city/:title/:id" element={<RestaurantDetail/>} /> 
                <Route path="/cart" element={<Cart/>} />
                <Route path="/my-profile/*" element={<Profile/>} />
            </Routes>
            <Auth/>
        
        </div>
    );
};

export default CustomerRoute;