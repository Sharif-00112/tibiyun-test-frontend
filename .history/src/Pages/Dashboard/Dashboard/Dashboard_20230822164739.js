import React from 'react';
import { Button, Container, Typography } from '@mui/material';
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
// import { Link } from 'react-router-dom';
// import useAuth from '../../../../hooks/useAuth';

const Dashboard = () => {
    const { user } = useAuth();
    const [searchHistories, setSearchHistories] = useState([]);

    useEffect(() => {
        const url = `http://localhost:3010/selfSearchResults?email=${user.email}`
        fetch(url, {

        })
        .then(res => res.json())
        .then(data => setSearchHistories(data))
    }, [user.email])
    return (
        <Container>
            <Typography sx={{ fontWeight: 600, my:3 }} variant="h6" component="div">
                You have searched {searchHistories.length} times till now
            </Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 550 }} aria-label="Search History table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Time</TableCell>
                        {/* <TableCell align="center">Service</TableCell> */}
                        <TableCell align="center">Searched by</TableCell>
                        <TableCell align="center">Search Result (Items)</TableCell>
                        {/* <TableCell align="center">Appointment Slot</TableCell>
                        <TableCell align="center">Status</TableCell>
                        <TableCell align="right">Action </TableCell> */}
                        {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
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
                        {/* <TableCell align="center">'Upcoming'</TableCell> */}
                        <TableCell align="center">{row.bookingPlacementTime}</TableCell>
                        <TableCell align="center">{row.selectedDate}</TableCell>
                        {/* <TableCell align="center">{row.preferredTime}</TableCell>
                        <TableCell align="center">{row.status}</TableCell>
                        <TableCell align="right"><Button>Cancel</Button></TableCell> */}
                        {/* <TableCell align="right">{row.payment ? 
                            'Paid' :
                            <Link to={`payment/${row._id}`}><Button>Pay</Button></Link>
                        }</TableCell> */}
                        {/* <TableCell align="right">{row.protein}</TableCell> */}
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default Dashboard;