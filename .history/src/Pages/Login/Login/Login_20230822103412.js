import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { Button, Container } from '@mui/material';
import Typography from '@mui/material/Typography';
// import loginImg from '../../../assets/images/webp images/login.webp';
import TextField from '@mui/material/TextField';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { useTitle } from '../../../hooks/useTitle';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
// import Navigation from '../../Shared/Navigation/Navigation';
// import MiniFooter from '../../Shared/Footer/MiniFooter';
// import ImageModal from '../../Shared/ImageModal/ImageModal';
 
const Login = () => {
    const [loginData, setLoginData] = useState({})

    //destructuring hooks
    // const { customLogin, signInUsingGoogle, signInUsingFacebook, user, error, handleLoginSubmitBtn, handleEmailChange, handlePasswordChange, logout } = useAuth();
    const { customLogin, user, error, isLoading, signInUsingGoogle } = useAuth();
    // console.log(user.photoURL);

    useTitle("Login|GetEasy");

    //redirect after login
    let location = useLocation();
    const navigate = useNavigate();

    const handleOnChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field, value);
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
  
    const handleLoginSubmit = e => {
        e.preventDefault();
        customLogin( loginData.email, loginData.password, location, navigate);
        // alert('Login Clicked!');
        // alert(error);s
    }

    return (
        <div className="">
            {/* <Navigation></Navigation> */}
            {/* <ImageModal></ImageModal> */}
            <Container sx={{ my:5 }}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid sx={{ mt:5 }} xs={12} md={6}>
                            <Typography sx={{ my:2, fontSize: 25, fontWeight: 600 }} style={{color: '#E45865'}} variant="h4" component="div">
                                User Login
                            </Typography>
                            
                            {/* error  */}
                            {error && <Alert severity="error">{error}</Alert>}
                            
                            { (!isLoading && !user.email) && <form onSubmit={ handleLoginSubmit }>
                                <TextField 
                                    sx={{ width:'75%', m:1 }}
                                    required
                                    id="standard-basic"
                                    name='email' 
                                    onChange={handleOnChange}
                                    label="Your Email" 
                                    variant="standard" />
                                <br /> 
                                <TextField 
                                    sx={{ width:'75%', m:1 }}
                                    required
                                    id="standard-basic" 
                                    name='password'
                                    onChange={handleOnChange}
                                    label="Your Password" 
                                    type="password"
                                    variant="standard" />
                                <br />
                                <Button type='submit' sx={{ width:'50%',m:3 }} variant="contained" style={{backgroundColor: '#E45865'}}>
                                    Login
                                </Button>
                                <br />
                                Or
                                <br />
                                <Button onClick={()=> signInUsingGoogle(location, navigate)} type='' sx={{ width:'75%',m:3 }} variant="contained" style={{backgroundColor: 'red'}}>
                                    Login with GOOGLE
                                </Button>
                                <br />
                                <NavLink 
                                    // style={{ textDecoration:'none'}} 
                                    to='/register'>
                                    <Button sx={{ color: 'black' }}>
                                        New user? Please Register here
                                    </Button>
                                </NavLink>
                            </form>}

                            {/* success alert  */}
                            {user?.email && <Alert severity="success">Login succeeded for email: {user.email}, Name: {user.displayName}</Alert>}
                            
                            {/* Spinner  */}
                            {isLoading && <CircularProgress />}

                        </Grid>
                        {/* <Grid xs={12} md={6}>
                            <img style={{ width:'80%' }} src={loginImg} alt="" />
                        </Grid> */}
                    </Grid>
                </Box>
            </Container>
            {/* <MiniFooter></MiniFooter> */}
        </div>
    );
};

export default Login;