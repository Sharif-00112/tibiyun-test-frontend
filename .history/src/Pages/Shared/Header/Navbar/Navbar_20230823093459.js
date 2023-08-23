import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../../hooks/useAuth';

const pages = [
  <HashLink 
      style={{ textDecoration:'none', color: 'inherit' }}
      to = '/#home'>
      <Button sx={{mx:0}} color="inherit">Home</Button>
  </HashLink>,
  <HashLink 
      style={{ textDecoration:'none', color: 'inherit' }}
      to = '/home#menu'>
      <Button sx={{mx:0}} color="inherit">Menu</Button>
  </HashLink>,
  <HashLink 
      style={{ textDecoration:'none', color: 'inherit' }}
      to = '/home#search'>
      <Button sx={{mx:0}} color="inherit">Search</Button>
  </HashLink>,
  <HashLink 
      style={{ textDecoration:'none', color: 'inherit' }}
      to = '/home#address'>
      <Button sx={{mx:0}} color="inherit">Address</Button>
  </HashLink>
  ];

const settings = [
  <Link 
      style={{ textDecoration:'none', color: 'inherit' }}
      to = '/profile'>
      <Button sx={{mx:0}} color="inherit">Profile</Button>
  </Link>,
  <Link 
      style={{ textDecoration:'none', color: 'inherit' }}
      to = '/dashboard'>
      <Button sx={{mx:0}} color="inherit">Dashboard</Button>
  </Link>,
  <Link 
      style={{ textDecoration:'none', color: 'inherit' }}
      to = '/settings'>
      <Button sx={{mx:0}} color="inherit">Settings</Button>
  </Link>,
  <Link 
      style={{ textDecoration:'none', color: 'inherit' }}
      to = '/admin'>
      <Button sx={{mx:0}} color="inherit">Admin</Button>
  </Link>
 ];

const Navbar = () => {
  const { user, admin, logout } = useAuth();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [notification, setNotification] = useState('');

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:3010');

    socket.onopen = () => {
      console.log('Connected to WebSocket server');
    };

    socket.onmessage = (event) => {
      const message = JSON.parse(event.data);

      if (message.type === 'newEntryNotification' && admin) {
        setNotification('New entry added!');
      }
    };

    socket.onclose = () => {
      console.log('Disconnected from WebSocket server');
    };

    return () => {
      socket.close();
    };
  }, [admin]);

  return (
    <AppBar position="static" sx={{ backgroundColor: '#E45865' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* ... Your logo and navigation links ... */}
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              // fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Tibiyun Eats
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              // fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Tibiyun Eats
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* login-logout toggle */}
          {
            user?.email ?
            <NavLink 
                style={{ textDecoration:'none', color:'white' }}
                to = '/login'>
                <Button sx={{ mx: 0 }} onClick={logout} color="inherit">Logout</Button>
                <NavLink 
                  style={{ textDecoration:'none', color:'white' }}
                  to = '/dashboard'>
                  <Button sx={{ mx:1 }} color="inherit">Dashboard</Button>
                </NavLink>
            </NavLink>
            :
            <NavLink 
                style={{ textDecoration:'none', color:'white' }}
                to = '/login'>
                <Button sx={{ mx:2 }} color="inherit">Login</Button>
            </NavLink>
          }

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt={user.email} src={user.photoURL} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{ 
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {admin && notification && (
            <Tooltip title={notification}>
              <IconButton sx={{ p: 0 }}>
                <NotificationsIcon />
              </IconButton>
            </Tooltip>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
