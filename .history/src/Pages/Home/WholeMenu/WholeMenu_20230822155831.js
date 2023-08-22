import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { Container, Typography, Pagination } from '@mui/material';
import MenuItem from '../MenuItem/MenuItem';

const ITEMS_PER_PAGE = 8; // Number of items to display per page

const WholeMenu = () => {
    const [menu, setMenu] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const url = `/foodDB.json`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setMenu(data));
    }, []);

    // Calculate the start and end index for the items to display on the current page
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;

    return (
        <div id='menu'>
            <Container sx={{ flexGrow: 1, my: 4 }}>
                <Typography
                    sx={{ fontWeight: 500, m: '25px auto 10px auto', color: '#253746' }}
                    gutterBottom
                    variant="h4"
                    component="div"
                >
                    -All we serve-
                </Typography>

                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>
                    {menu.slice(startIndex, endIndex).map((menuItem) => (
                        <MenuItem key={menuItem.ID} menuItem={menuItem} />
                    ))}
                </Grid>

                {/* Pagination */}
                <Pagination
                    count={Math.ceil(menu.length / ITEMS_PER_PAGE)} // Calculate the number of pages needed
                    page={currentPage}
                    onChange={(event, value) => setCurrentPage(value)} // Handle page change
                    sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}
                />
            </Container>
        </div>
    );
};

export default WholeMenu;
