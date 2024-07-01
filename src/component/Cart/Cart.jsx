import React from "react";
import CartItem from "./Cartitem";
import { Box, Button, Card, Divider, Grid, Modal, TextField } from "@mui/material";
import AddressCard from "./AddressCart";
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createOrder } from "../State/Order/Action";
// import * as Yup from 'yup';

const initialValues = {
    streetAddress: '',
    city: '',
    state: '',
    pincode: ''
}

export const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    outline: "none",
    boxShadow: 24,
    p: 4,
};
const Cart = () => {
    const createOrderUsingSelectedAddress = () => { }
    const handleOpenAddressModal = () => setOpen(true);
    const [open, setOpen] = React.useState(false);

    const { cart, auth } = useSelector(store => store);
    const dispatch = useDispatch();


    const handleClose = () => setOpen(false);
    const handleSubmit = (values) => {
        const data = {
            jwt: localStorage.getItem('jwt'),
            order: {
                restaurantId: cart.cartItems[0].food?.restaurant.id,
                deliveryAddress: {
                    fullName: auth.user?.fullName,
                    streetAddress: values.streetAddress,
                    city: values.city,
                    state: values.state,
                    postalCode: values.pincode,
                    country: "India"
                }
            }
        }
        dispatch(createOrder(data))
        console.log(values)
    }

    return (
        <div style={{ fontFamily: 'Playfair' }}>
            <main className='lg: flex justify-between '>
                <section className='lg: w-[30%] space-y-6 lg: min-h-screen pt-10'>
                    {cart.cart && Array.isArray(cart.cart.cartItems) ? (
                        cart.cart.cartItems.map((item) => <CartItem item={item} />)
                    ) : (
                        <p style={{ textIndent: '2em' }}>No items in cart.</p> // Using textIndent for tab space
           
                    )}
                    <Divider />

                    <div className="billlDetails px-5 text-sm">
                        <p className="font-extralight py-5">Bill Details</p>
                        <div className="space-y-3">
                            <div className="flex justify-between text-gray-400">
                                <p>Item Total</p>
                                <p>₹{cart.cart?.total}</p>
                            </div>
                            <div className="flex justify-between text-gray-400">
                                <p>Delivery Charges</p>
                                <p>₹50</p>
                            </div>
                            <div className="flex justify-between text-gray-400">
                                <p>GST ans Service Tax</p>
                                <p>₹50</p>
                            </div>
                            <Divider />
                        </div>
                        <div className="pt-3 flex justify-between text-gray-400">
                            <p>Total Pay:</p>
                            <p>₹{cart.cart?.total + 50 + 50}</p>

                        </div>
                    </div>
                </section>
                <Divider orientation="vertical" flexItem />

                <section className="lg:w-[70%] flex justify-center px-5 pb-10 lg:pb-0">
                    <div>
                        <h1 className="text-center font-semibold text-2xl py-10">
                            Choose Delivery Address
                        </h1>
                        <div className="flex gap-5  flex-wrap justify-center">
                            {[1, 1, 1].map((item) => (
                                <AddressCard handleSelectAddress={createOrderUsingSelectedAddress} item={item} showButton={true} />
                            ))}
                            <Card className="flex gap-5 w-64 p-5">
                                <AddLocationAltIcon />
                                <div className='space-y-3 text-gray-500'>
                                    <h1 className='font-semibold text-lg text-white '>
                                        Add New Address
                                    </h1>
                                    <Button variant='outlined' fullWidth onClick={handleOpenAddressModal}> Add</Button>

                                </div>
                            </Card>
                        </div>
                    </div>
                </section>
            </main>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Formik initialValues={initialValues}
                        // validationSchema={validationSchema}
                        onSubmit={handleSubmit}>
                        <Form>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Field
                                        as={TextField}
                                        name="streetAddress"
                                        label="Street Address"
                                        fullWidth
                                        variant="outlined"
                                    // error={!ErrorMessage('streetAddress')}
                                    // placeholder="Enter Street Address"
                                    // helperText={
                                    // <ErrorMessage>
                                    //     {(msg)=> <div style={{color:'red'}}>{msg}</div>}
                                    // </ErrorMessage>
                                    // }
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Field
                                        as={TextField}
                                        name="state"
                                        label="state"
                                        fullWidth
                                        variant="outlined"
                                    // error={!ErrorMessage('streetAddress')}
                                    // placeholder="Enter Street Address"
                                    // helperText={
                                    // <ErrorMessage>
                                    //     {(msg)=> <div style={{color:'red'}}>{msg}</div>}
                                    // </ErrorMessage>
                                    // }
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Field
                                        as={TextField}
                                        name="city"
                                        label="city"
                                        fullWidth
                                        variant="outlined"
                                    // error={!ErrorMessage('streetAddress')}
                                    // placeholder="Enter Street Address"
                                    // helperText={
                                    // <ErrorMessage>
                                    //     {(msg)=> <div style={{color:'red'}}>{msg}</div>}
                                    // </ErrorMessage>
                                    // }
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Field
                                        as={TextField}
                                        name="pincode"
                                        label="pincode"
                                        fullWidth
                                        variant="outlined"
                                    // error={!ErrorMessage('streetAddress')}
                                    // placeholder="Enter Street Address"
                                    // helperText={
                                    // <ErrorMessage>
                                    //     {(msg)=> <div style={{color:'red'}}>{msg}</div>}
                                    // </ErrorMessage>
                                    // }
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button variant='contained' fullWidth color="primary" type='submit'>Deliver Here</Button>
                                </Grid>


                            </Grid>
                        </Form>
                    </Formik>
                </Box>
            </Modal>
        </div>
    )
}

export default Cart;