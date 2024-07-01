import PlaceIcon from '@mui/icons-material/Place';
import CalendarIcon from '@mui/icons-material/CalendarToday';
import { Divider, Typography, Grid, RadioGroup, FormControl } from '@mui/material';
import React, { useEffect } from 'react';
import { useState } from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import MenuCard from './MenuCard';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getRestaurantById, getRestaurantCategory } from '../State/Restaurant/Action';
import { getMenuByRestaurantId } from '../State/Menu/Action';



const foodTypes = [
    { label: "All", value: "all" },
    { label: "Vegetarian only", value: "vegetarian" },
    { label: "Non-Vegetarian", value: "non_vegetarian" },
    { label: "Seasonal", value: "seasonal" }
]

const menu = [1, 1, 1, 1];

const RestaurantDetail = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const jwt = localStorage.getItem('jwt');
    const { auth, restaurant, menu } = useSelector(store => store);
    const [selectedCategory, setSelectedCategory] = useState("all");

    const { id, city } = useParams();

    const [foodType, setFoodType] = useState("all")
    const handleFilter = (e) => {
        setFoodType(e.target.value)
        console.log(e.target.value, e.target.name)
    }
    const handleFilterCategory = (e, value) => {
        setSelectedCategory(value)
        console.log(e.target.value, e.target.name, value)
    }
    console.log("restaurant", restaurant)
    useEffect(() => {
        dispatch(getRestaurantById({ jwt, restaurantId: id }))
        dispatch(getRestaurantCategory({ jwt, restaurantId: id }))
    }
        , []);

    useEffect(() => {
        dispatch(getMenuByRestaurantId({
            jwt, restaurantId: id,
            vegetarian: foodType === "vegetarian",
            nonveg: foodType === "non_vegetarian",
            seasonal: foodType === "seasonal",
            foodCategory: selectedCategory
        }))
    }
        , [selectedCategory, foodType])



    return (
        <div className='px-5 lg:px-20' style={{ fontFamily: 'Playfair' }}>
            <section>
                <h3 className='text-gray-500 py-2 mt-10'>Home/india/fast</h3>
                <div>
                    <Grid container spacing={2}>
                        <Grid item lg={12}>
                            <img className='w-full h-[40vh] object-cover'
                                src='https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=600'
                                alt="" />
                        </Grid>
                        <Grid item sx={12} lg={6}>
                            <img className='w-full h-[40vh] object-cover'
                                src="https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=600"
                                alt="" />
                        </Grid>
                        <Grid item sx={12} lg={6}>
                            <img className='w-full h-[40vh] object-cover'
                                src="https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&w=600"
                                alt="" />
                        </Grid>
                    </Grid>

                </div>
                <div className='pt-3 pb-5 '>
                    <h1 className='text-4xl font-semibold'>{restaurant.restaurant?.name}</h1>
                    <p className='text-grey-500 mt-1'>{restaurant.restaurant?.description}</p>
                    <div className="space-y-3  mt-3 ">
                        <p className='text-gray-500 flex items-center gap-3'>
                            <PlaceIcon></PlaceIcon>
                            <span>
                                mumbia,maharashra
                            </span>
                        </p>
                        <p className='text-gray-500 flex items-center gap-3'>
                            <CalendarIcon
                            ></CalendarIcon>
                            <span>
                                mon-tue 9:00-22:00 (closed on wednesday)
                            </span>
                        </p>

                    </div>

                </div>
            </section>
            <Divider />
            <section className="pt-[2rem] lg: flex relative">

                <div className="space-y-10 lg:w-[20%] filter p-5 shawdow-md">
                    <div className='box space-y-5 lg:sticky top-28'>
                        <div>
                            <Typography variant="h5" sx={{ paddingBottom: "1rem" }}>
                                Food Type
                            </Typography>

                            <FormControl className="py-10 space-y-5" component={"fieldset"}>
                                <RadioGroup onChange={handleFilterCategory} name='food_category'
                                    value={selectedCategory}
                                >
                                    {foodTypes.map((item) => (
                                        <FormControlLabel
                                            key={item.value}
                                            value={item.value}
                                            control={<Radio />}
                                            label={item.label}
                                        />
                                    ))}
                                </RadioGroup>
                            </FormControl>
                        </div>
                        <Divider />
                        <div>
                            <Typography variant="h5" sx={{ paddingBottom: "1rem" }}>
                                Food Category
                            </Typography>

                            <FormControl className="py-10 space-y-5" component={"fieldset"}>
                                <RadioGroup onChange={handleFilter} name="food_categories"
                                // value= {foodType}

                                >
                                    {restaurant.categories.map((item) => (
                                        <FormControlLabel
                                            key={item}
                                            value={item.name}
                                            control={<Radio />}
                                            label={item.name}
                                        />
                                    ))}
                                </RadioGroup>
                            </FormControl>
                        </div>
                    </div>
                </div>
                <div className="space-y-5 lg:w-[80%] lg:pl-10">
                    {menu.menuItems.map((item) => <MenuCard item={item} />)}
                </div>
            </section>
        </div>
    );
};

export default RestaurantDetail;