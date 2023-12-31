import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography, TextField, MenuItem as MuiMenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuItem from '../MenuItem/MenuItem';
import useAuth from '../../../hooks/useAuth';

const SearchMenu = () => {
    const { user } = useAuth();

    const [menu, setMenu] = useState([]);
    const [searchCountry, setSearchCountry] = useState('');
    const [searchFoodName, setSearchFoodName] = useState('');
    const [searchRestaurant, setSearchRestaurant] = useState('');
    const [searchMaxPrice, setSearchMaxPrice] = useState('');
    const [searchReservation, setSearchReservation] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [uniqueCountries, setUniqueCountries] = useState([]);
    const [uniqueFoodNames, setUniqueFoodNames] = useState([]);
    const [uniqueRestaurants, setUniqueRestaurants] = useState([]);


    useEffect(() => {
        const url = `/foodDB.json`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setMenu(data);
    
                const uniqueCountries = Array.from(new Set(data.map(item => item.foodCountry.toLowerCase())));
                const uniqueFoodNames = Array.from(new Set(data.map(item => item.foodName.toLowerCase())));
                const uniqueRestaurants = Array.from(new Set(data.map(item => item.restaurantName.toLowerCase())));
    
                setUniqueCountries(uniqueCountries);
                setUniqueFoodNames(uniqueFoodNames);
                setUniqueRestaurants(uniqueRestaurants);
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
        sendSearchResultsToDatabase(results);
    };

    const sendSearchResultsToDatabase = (results) => {
        const userEmail = user.email; 
        const currentDate = new Date().toISOString(); 
    
        const dataToSend = {
            userEmail: userEmail,
            currentDate: currentDate,
            searchedBy: {searchCountry, searchFoodName, searchRestaurant, searchMaxPrice, searchReservation},
            searchResults: results,
        };
    
        const apiUrl = 'http://localhost:3010/searchResults';
        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataToSend),
        })
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            if(data.insertedId){
                alert('Visit Dashboard for detailed search result and history.');
            }
        })
        .catch(error => {
            console.error('Error sending search results to the database:', error);
        });
    };
    

    return (
        <div id='search'>
            <Container sx={{ flexGrow: 1, my: 4 }}>
                <Typography sx={{ fontWeight: 500, m: '25px auto 10px auto', color: '#253746' }} gutterBottom variant="h4" component="div">
                    Search your food here
                </Typography>

                <TextField
                    select
                    label="Search by Country"
                    value={searchCountry}
                    onChange={(e) => setSearchCountry(e.target.value)}
                    fullWidth
                    variant="outlined"
                    sx={{ m: 1, width: '50%' }}
                >
                    <MuiMenuItem value="">All</MuiMenuItem>
                    {uniqueCountries.map(country => (
                        <MuiMenuItem key={country} value={country}>
                            {country}
                        </MuiMenuItem>
                    ))}
                </TextField>

                <TextField
                    select
                    label="Search by Food Name"
                    value={searchFoodName}
                    onChange={(e) => setSearchFoodName(e.target.value)}
                    fullWidth
                    variant="outlined"
                    sx={{ m: 1, width: '50%' }}
                >
                    <MuiMenuItem value="">All</MuiMenuItem>
                    {uniqueFoodNames.map(foodName => (
                        <MuiMenuItem key={foodName} value={foodName}>
                            {foodName}
                        </MuiMenuItem>
                    ))}
                </TextField>

                <TextField
                    select
                    label="Search by Restaurant"
                    value={searchRestaurant}
                    onChange={(e) => setSearchRestaurant(e.target.value)}
                    fullWidth
                    variant="outlined"
                    sx={{ m: 1, width: '50%' }}
                >
                    <MuiMenuItem value="">All</MuiMenuItem>
                    {uniqueRestaurants.map(restaurant => (
                        <MuiMenuItem key={restaurant} value={restaurant}>
                            {restaurant}
                        </MuiMenuItem>
                    ))}
                </TextField>


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
                    color="secondary"
                    onClick={handleSearchSubmit}
                    sx={{ m: 2 }}
                >
                    Search 
                </Button> 
                <Button
                    variant="contained"
                    color="warning"
                    sx={{ m: 2 }}
                    href="/"
                >
                    Refresh
                </Button>
                <br /><br />
                <Typography sx={{ fontWeight: 500, m: 2, color: '#253746' }} gutterBottom variant="h5" component="div">
                    Available Search results
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

export default SearchMenu;
