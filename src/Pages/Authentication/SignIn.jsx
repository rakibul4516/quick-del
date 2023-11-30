import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import GoogleIcon from '@mui/icons-material/Google';
import useAxiosPublic from '../../Axios/useAxiosPublic';
import Swal from 'sweetalert2';
import Lottie from 'lottie-react';
import regiserpage from '../../../public/registerpage.json'
import { Link, useLocation } from 'react-router-dom';


export default function SignIn() {
  const { signinUser, signinWithGoogle } = useAuth()
  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()
  const axiosPublic = useAxiosPublic()
  const location = useLocation();
  const handleRegister = (data) => {
    console.log(data)
    signinUser(data.email, data.password)
      .then(res => {
        if (res?.user?.email) {
          // updateUserProfile(data.name, data.photo)
          Swal.fire({
            icon: "success",
            title: "Sign In Successfully",
          });
          console.log(location.state)
          navigate(location?.state ? location.state : '/');
        }
      })
      .catch(err => console.log(err))
  };



  //Handle google login
  const handleGoogleLogin = () => {
    signinWithGoogle()
      .then(res => {
        if (res?.user?.email) {
          const userName = res?.user?.displayName;
          const image = res?.user?.photoURL;
          const email = res?.user?.email;
          const role = 'user'
          const userData = { image, userName, email, role }
          axiosPublic.post('/users', userData)
            .then(() => {
              Swal.fire({
                icon: "success",
                title: "Sign Up Successfully",
              });
              navigate(location?.state ? location.state : '/');
            })
        }
      })
  }


  return (
    <Grid justifyContent="center" alignItems="center" sx={{ backgroundColor: '#fffcf7' }} container>
      {/* <Grid item xs={12} md={6}>
        <Container className="w-full mx-auto">
          <Lottie className="h-[100vh] w-full mx-auto" animationData={regiserpage} loop={true} />
        </Container>
      </Grid> */}
      <Grid item xs={12} md={6}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              marginBottom: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" onSubmit={handleSubmit(handleRegister)} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                {...register('email')}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                {...register('password')}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Button variant="outlined" onClick={handleGoogleLogin} startIcon={<GoogleIcon />}>
                Google
              </Button>
              <Grid container>
                <Grid item>
                  <Link to="/register" variant="body2">
                    Don't have an account? Sign Up
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </Grid>
    </Grid>
  );
}