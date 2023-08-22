import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const MenuItem = (props) => {
    const { foodCode, foodName, foodImage, foodCountry, foodPrice, restaurantName, restaurantAddress, reservationAvailability } = props.menuItem;

    return (
        <Grid xs={6} sm={4} md={3} >
            <Card sx={{ maxWidth: 300, mx:1 }}>
                <CardMedia
                    component="img"
                    src={foodImage}
                    alt={foodName}
                    style={{ width: 'auto', height: 160, margin: '0 auto', marginTop: '7px'}} 
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div" sx={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 1 }}>
                        {foodCode}-{foodName}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 1 }}>
                        Restaurant: {restaurantName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 1 }}>
                        Origin country: {foodCountry}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 1 }}>
                        Address: {restaurantAddress}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 1 }}>
                        Res. Requirement: {reservationAvailability}
                    </Typography>
                </CardContent>
                <CardActions  style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <Button size="small">BDT {foodPrice}</Button>
                    <Button size="small">Order Online</Button>
                </CardActions>
            </Card>       
        </Grid>
    );
};

export default MenuItem;