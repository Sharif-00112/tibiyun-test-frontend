import React from 'react';
import { Container, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useAuth from '../../../hooks/useAuth';
import { useTitle } from '../../../hooks/useTitle';

const AdminPanel = () => {
    useTitle('Admin|Tibiyun Eats');
    const { user } = useAuth();
    const [searchHistories, setSearchHistories] = useState([]);

    useEffect(() => {
        const url = `http://localhost:3010/searchResults`;
        fetch(url)
            .then(res => res.json())
            .then(data => setSearchHistories(data));
    }, [user.email]);

    return (
        <Container>
            <Typography sx={{ fontWeight: 600, my: 3 }} variant="h6" component="div">
                You got {searchHistories.length} searches till now
            </Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 550 }} aria-label="Search History table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Time</TableCell>
                            <TableCell align="center">User</TableCell>
                            <TableCell align="center">Searched by (Country, Food, Restaurant, Max Price, Reservation)</TableCell>
                            <TableCell align="center">Search Result (Items)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {searchHistories.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.currentDate}
                                </TableCell>
                                <TableCell align="center">
                                    {row.userEmail}
                                </TableCell>
                                <TableCell align="center">
                                    {row.searchedBy && row.searchedBy.searchCountry}, {row.searchedBy && row.searchedBy.searchFoodName}, {row.searchedBy && row.searchedBy.searchRestaurant}, {row.searchedBy && row.searchedBy.searchMaxPrice}, {row.searchedBy && row.searchedBy.searchReservation}
                                </TableCell>
                                <TableCell align="center">
                                    {row.searchResults && row.searchResults.map((item) => (
                                        <div key={item.foodCode}>
                                            {item.foodCode}-{item.foodName}
                                        </div>
                                    ))}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <br /><br /><br />
        </Container>
    );
};

export default AdminPanel;
