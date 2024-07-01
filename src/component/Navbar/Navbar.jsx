import { Avatar, Box, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';
import { pink } from '@mui/material/colors';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge, Person } from '@mui/icons-material';
import "./Navbar.css";
import { Navigate, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet"></link>

export const Navbar = () => {
    const { auth,cart } = useSelector(store => store)
    const navigate = useNavigate();

    const handleAvatarClick = () => {
        if(auth.user?.role === "ROLE_CUSTOMER") {
            navigate("/my-profile")
        }
        else {
            navigate("/admin/restaurant")
        }
    }
    return (
        <Box
            className="px-5 sticky top-0 z-50 py-[0.8rem] bg-[#8B0000] lg:px-20 flex justify-between"
        >
            <div className="lg:mr-10 cursor-pointer flex items-center space-x-4">
                <li onClick={()=>navigate("/")} className='logo font-semibold text-gray-300 text-2xl ' style={{ fontFamily: "Playfair" }}>Talabat</li>
            </div>
            <div className='flex items-center space-x-2 lg:space-x-10' style={{ flexDirection: 'row' }}>
                <div className=''>
                    <IconButton>
                        <SearchIcon sx={{ fontSize: "1.5rem" }} />
                    </IconButton>
                </div>
                <div className=''>
                    {auth.user ?
                        <Avatar onClick={handleAvatarClick} sx={{ bgcolor: "white", color: pink.A400 }}>
                            {auth.user?.fullname[0].toUpperCase()}
                        </Avatar> :
                        <IconButton onClick={() => navigate("/account/login")}>
                            <Person />
                        </IconButton>}
                </div>
                <div className=''>
                    <IconButton onClick={()=> navigate("/cart")}>
                        <Badge color='white' badgeContent={3}>
                            <ShoppingCartIcon sx={{ fontSize: "1.5rem" }} />
                        </Badge>
                    </IconButton>
                </div>
            </div>
        </Box>
    )
}

export default Navbar;