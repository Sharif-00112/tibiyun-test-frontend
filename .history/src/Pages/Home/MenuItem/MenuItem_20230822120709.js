import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import { useNavigate } from 'react-router-dom';


const MenuItem = (props) => {
    const { foodCode, foodName, foodImage, foodCountry, foodPrice, restaurantName, restaurantAddress, reservationAvailability } = props.menuItem;

    // const navigate = useNavigate();

    // const handleViewDetails = () => {
    //     navigate(`service?id=${foodCode}`);
    // };

    return (
        <Grid xs={4} sm={4} md={4} >
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    src={foodImage}
                    alt={foodName}
                    style={{ width: 'auto', height: 160, margin: '0 auto', marginTop: '7px'}} 
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 1 }}>
                    {foodName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 3 }}>
                    {restaurantName}
                    </Typography>
                </CardContent>
                <CardActions  style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <Button size="small">Order Now</Button>
                    {/* <Button size="small" variant='outlined' onClick={handleViewDetails}>
                        View Details
                    </Button> */}
                </CardActions>
            </Card>       
        </Grid>
    );
};

export default MenuItem;