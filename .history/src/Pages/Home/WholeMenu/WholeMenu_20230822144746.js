import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography, TextField, MenuItem as MuiMenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuItem from '../MenuItem/MenuItem';
import useAuth from '../../../hooks/useAuth';

const WholeMenu = () => {
    const { user } = useAuth();

    const [menu, setMenu] = useState([]);
    const [searchCountry, setSearchCountry] = useState('');
    const [searchFoodName, setSearchFoodName] = useState('');
    const [searchRestaurant, setSearchRestaurant] = useState('');
    const [searchMaxPrice, setSearchMaxPrice] = useState('');
    const [searchReservation, setSearchReservation] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        const url = `/foodDB.json`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setMenu(data);
                setSearchResults(data);
            });
    }, []);

    const filterMenuItems = () => {
        return menu.filter(menuItem =>
            menuItem.foodCountry.toLowerCase().includes(searchCountry.toLowerCase()) &&
            menuItem.foodName.toLowerCase().includes(searchFoodName.toLowerCase()) &&
            menuItem.restaurantName.toLowerCase().includes(searchRestaurant.toLowerCase()) &&
            (searchMaxPrice === '' || parseFloat(menuItem.foodPrice) <= parseFloat(searchMaxPrice)) &&
            (searchReservation === '' || menuItem.reservationAvailability.toLowerCase() === searchReservation.toLowerCase())
        );
    };

    const handleSearchSubmit = () => {
        // search operation
        const results = filterMenuItems();
        setSearchResults(results);

        // sending data to DB

    };

    return (
        <div>
            <Container sx={{ flexGrow: 1, my: 4 }}>
                <Typography sx={{ fontWeight: 500, m: '25px auto 10px auto', color: '#253746' }} gutterBottom variant="h4" component="div">
                    Search your food here
                </Typography>

                <TextField
                    label="Search by Country"
                    value={searchCountry}
                    onChange={(e) => setSearchCountry(e.target.value)}
                    fullWidth
                    variant="outlined"
                    sx={{ m: 1, width: '50%' }}
                />

                <TextField
                    label="Search by Food Name"
                    value={searchFoodName}
                    onChange={(e) => setSearchFoodName(e.target.value)}
                    fullWidth
                    variant="outlined"
                    sx={{ m: 1, width: '50%' }}
                />

                <TextField
                    label="Search by Restaurant"
                    value={searchRestaurant}
                    onChange={(e) => setSearchRestaurant(e.target.value)}
                    fullWidth
                    variant="outlined"
                    sx={{ m: 1, width: '50%' }}
                />

                <TextField
                    label="Maximum Price"
                    type="number"
                    value={searchMaxPrice}
                    onChange={(e) => setSearchMaxPrice(e.target.value)}
                    fullWidth
                    variant="outlined"
                    sx={{ m: 1, width: '50%' }}
                />

                <TextField
                    select
                    label="Reservation Availability"
                    value={searchReservation}
                    onChange={(e) => setSearchReservation(e.target.value)}
                    fullWidth
                    variant="outlined"
                    sx={{ m: 1, width: '50%' }}
                >
                    <MuiMenuItem value="">All</MuiMenuItem>
                    <MuiMenuItem value="yes">Available</MuiMenuItem>
                    <MuiMenuItem value="no">Not Available</MuiMenuItem>
                </TextField>
                <br />
                {/* Submit Button */}
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSearchSubmit}
                    sx={{ mt: 2 }}
                >
                    Search
                </Button>
                <br /><br />
                <Typography sx={{ fontWeight: 500, m: 2, color: '#253746' }} gutterBottom variant="h5" component="div">
                    Available food menu
                </Typography>
                <br /><br />
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>
                    {searchResults.map(menuItem => (
                        <MenuItem
                            key={menuItem.ID}
                            menuItem={menuItem}
                        />
                    ))}
                </Grid>
            </Container>
            <Typography sx={{ m: 1, color: '#2b6777', fontWeight: 400 }} variant="h6" component="div">
                Looking for something else?
            </Typography>
            <Button variant="contained" style={{ backgroundColor: '#253746' }} sx={{ mb: 4, textDecoration: 'none' }}>
                <Link to={'/contact'} style={{ textDecoration: 'none', color: 'white' }}>Contact US</Link>
            </Button>
            <br /><br />
        </div>
    );
};

export default WholeMenu;
