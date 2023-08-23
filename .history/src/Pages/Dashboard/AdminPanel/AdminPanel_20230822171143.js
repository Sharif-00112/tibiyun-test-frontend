import React from 'react';
import { Container, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useAuth from '../../../hooks/useAuth';

const AdminPanel = () => {
    const { user } = useAuth();
    const [searchHistories, setSearchHistories] = useState([]);

    useEffect(() => {
        const url = `http://localhost:3010/searchResults`
        fetch(url, {

        })
        .then(res => res.json())
        .then(data => setSearchHistories(data))
    }, [user.email])
    // console.log(searchHistories);
    
    return (
        <Container>
            <Typography sx={{ fontWeight: 600, my:3 }} variant="h6" component="div">
                You have got {searchHistories.length} searches till now
            </Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 550 }} aria-label="Search History table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Time</TableCell>
                        <TableCell align="center">Searched by (User)</TableCell>
                        <TableCell align="center">Searched by (keywords)</TableCell>
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
                        <TableCell align="center">{row.userEmail}</TableCell>
                        <TableCell align="center">{row.bookingPlacementTime}</TableCell>
                        <TableCell align="center">{row.selectedDate}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default AdminPanel;