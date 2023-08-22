import { Box, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
    return (
        <Box
            sx={{
                backgroundColor: 'lightgray',
                position: 'fixed',
                bottom: 0,
                left: 0,
                width: '100%',
                padding: '8px',
                marginTop: '15px'
            }}
        >
            <Typography sx={{ my: 0, mt: 0, fontSize: 14, fontWeight: 400 }} variant="" component="div">
                Copyright 2023 | All Rights Reserved by <a style={{textDecoration: 'none'}} href="sharif-hossain.com">Md Sharif Hossain</a>
            </Typography>
        </Box>
    );
};

export default Footer;
