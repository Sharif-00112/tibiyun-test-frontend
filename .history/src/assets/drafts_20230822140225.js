import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { Button, Container, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuItem from '../MenuItem/MenuItem';

const WholeMenu = () => {

    const [menu, setMenu] = useState([]);

    useEffect(() => {
        const url = `/foodDB.json`
        fetch(url, {

        })
        .then(res => res.json())
        .then(data => setMenu(data))
    }, [])

    return (
        <div>
            <Container sx={{ flexGrow: 1, my:4 }}>
                <Typography sx={{fontWeight: 500, m: '25px auto 10px auto', color: '#253746'}} gutterBottom variant="h4" component="div">
                    Available food menu
                </Typography>

                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>
                    {
                        menu.map(menuItem => <MenuItem
                            key={menuItem.ID}
                            menuItem={menuItem}
                        ></MenuItem>)
                    }
                </Grid>
            </Container>
            <Typography sx={{ m: 1, color: '#2b6777', fontWeight: 400 }} variant="h6" component="div">
                Looking for something else?
            </Typography>
            <Button variant="contained" style={{ backgroundColor: '#253746' }} sx={{ mb: 4, textDecoration: 'none' }}>
                <Link to={'/contact'} style={{textDecoration: 'none', color:'white'}}>Contact US</Link>
            </Button>
            <br /><br />
        </div>
    );
};

export default WholeMenu;



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
            <Card sx={{ maxWidth: 300, m:1 }}>
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