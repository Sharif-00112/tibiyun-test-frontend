import React from 'react';
// import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { Button, Container, Typography } from '@mui/material';
// import Service from '../Service/Service';
// import { useTitle } from '../../../../hooks/useTitle';
import { useEffect } from 'react';
import { useState } from 'react';
// import MiniFooter from '../../../Shared/Footer/MiniFooter';
// import Navigation from '../../../Shared/Navigation/Navigation';
import { Link } from 'react-router-dom';
import MenuItem from '../MenuItem/MenuItem';

//fake data
// const services = [];

const WholeMenu = () => {
    // useTitle('Services|GetEasy');

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
            {/* <Navigation></Navigation> */}
            <Container sx={{ flexGrow: 1, my:4 }}>
                <Typography sx={{fontWeight: 500, m: '25px auto 10px auto', color: '#253746'}} gutterBottom variant="h4" component="div">
                    Food Menu
                </Typography>
                {/* <Typography sx={{fontWeight: 500, margin: '5px auto'}} gutterBottom variant="h6" component="div">
                    -Services We Provide-
                </Typography> */}

                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
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
            {/* <MiniFooter></MiniFooter> */}
        </div>
    );
};

export default WholeMenu;