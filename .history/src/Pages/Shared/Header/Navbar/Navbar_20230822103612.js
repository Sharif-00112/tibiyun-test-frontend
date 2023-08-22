import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb'; 
import { Link } from 'react-router-dom';
// import useAuth from '../../../hooks/useAuth';
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
      to = '/home#services'>
      <Button sx={{mx:0}} color="inherit">Services</Button>
  </HashLink>,
  <HashLink 
      style={{ textDecoration:'none', color: 'inherit' }}
      to = '/home#appointment'>
      <Button sx={{mx:0}} color="inherit">Appointment</Button>
  </HashLink>,
  <HashLink 
      style={{ textDecoration:'none', color: 'inherit' }}
      to = '/home#contact'>
      <Button sx={{mx:0}} color="inherit">Contact</Button>
  </HashLink>,
  <HashLink 
    style={{ textDecoration:'none', color: 'inherit' }}
    to = '/home#FAQ'>
    <Button sx={{mx:0}} color="inherit">FAQ</Button>
  </HashLink>,  
  // <Link 
  //     style={{ textDecoration:'none', color: 'inherit' }}
  //     to = '/about'>
  //     <Button sx={{mx:0}} color="inherit">About</Button>
  // </Link>
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
  </Link>
 ];


const Navbar = () => {
    const { user, logout } = useAuth();

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
  
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
  
    return (
      <AppBar position="static" sx={{ backgroundColor: '#00B5B5' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
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
              GetEasy
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
              GetEasy
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
          </Toolbar>
        </Container>
      </AppBar>
    );
};

export default Navbar;