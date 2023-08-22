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