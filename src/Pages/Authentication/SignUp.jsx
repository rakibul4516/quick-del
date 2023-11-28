import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import { Input, MenuItem, Select } from '@mui/material';
import axios from 'axios';
import useAxiosPublic from '../../Axios/useAxiosPublic';
import { useState } from 'react';


// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignUp() {
    const axiosPublic = useAxiosPublic()
    const { signupUser, updateUserProfile } = useAuth()
    const { register, handleSubmit } = useForm()
    const navigate = useNavigate()
    const [userType, setUserType] = useState('user');

    console.log(userType)

    const IMGBB_KEY = import.meta.env.VITE_IMGBB_KEY
    const handleRegister = (data) => {
        const userName = data.firstName + ' ' + data.lastName
        const email = data.email;
        const role = userType
        const number = data.number;
        console.log(userName)

        //Image Upload to imgbb server
        const imageFile = data.image[0];
        const formData = new FormData();
        formData.append('image', imageFile, imageFile?.name);

        axios.post(`https://api.imgbb.com/1/upload?key=${IMGBB_KEY}`, formData)
            .then(response => {
                console.log(response.data.data.url)

                const image = response.data.data.url
                const userData = { image, userName, email, role, number }
                //Sign Up users
                signupUser(data.email, data.password)
                    .then(res => {
                        if (res?.user?.email) {
                            console.log(res)
                            updateUserProfile(userName, image)
                                .then(res => {
                                    console.log(res)
                                    navigate('/')
                                })
                                .catch(err => {
                                    console.log(err)
                                })
                            axiosPublic.post('/users', userData)
                                .then(res => {
                                    if (res?.data?.insertedId) {
                                        console.log(res.data)
                                    }
                                })
                        }
                    })
                    .catch(err => console.log(err))
            })
            .catch(error => {
                console.log(error)
            });

    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs" color="">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit(handleRegister)} sx={{ mt: 3 }}>
                        <Button sx={{ display: 'flex', justifyContent: 'center', py: 5, my: 3 }} component="label" variant="contained" startIcon={<CloudUploadIcon />}>
                            <Input name="image" {...register('image')} type="file" />
                        </Button>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                    {...register('firstName')}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="family-name"
                                    {...register('lastName')}
                                />
                            </Grid>
                            <Grid item >
                                <Select
                                    value={userType}
                                    onChange={(e) => setUserType(e.target.value)}
                                    sx={{ m: 1, width: 450, mt: 3 }}
                                    labelId="label"
                                >
                                    <MenuItem value="user">Normal User</MenuItem>
                                    <MenuItem value="deliverymen">Delivery Men</MenuItem>
                                </Select>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="number"
                                    label="Phone Number"
                                    name="number"
                                    {...register('number')}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    {...register('email')}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                    {...register('password')}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link to="/login" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}