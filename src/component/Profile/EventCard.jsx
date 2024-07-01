
import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import React from 'react'
import { DeleteIcon } from '@mui/icons-material/Delete'
export const EventCard = () => {
    return (
        <div>
            <Card sx={{ width: 305 }}>
                <CardMedia
                    sx={{ height: 345 }}
                    image='https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg?auto=compress&cs=tinysrgb&w=600' />

                <CardContent>
                    <Typography variant='h5'>
                        Indian fast Food
                    </Typography>
                    <Typography variant='body2'>
                        25% off on your first order
                    </Typography>

                    <div className="py-2 space-y-2">
                        <p>{"mumbai"}</p>
                        <p className="text-sm text-blue-500"> February 14, 2024 12:00 AM</p>
                        <p className="text-sm text-blue-500"> February 15, 2024 12:00 AM</p>

                    </div>
                </CardContent>
                {false && <CardActions>
                    <IconButton>
                        <DeleteIcon />
                    </IconButton>
                </CardActions>}
            </Card>
        </div >
    )
}
