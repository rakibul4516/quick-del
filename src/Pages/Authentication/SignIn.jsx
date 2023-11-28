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
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import { Link } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';
import useAxiosPublic from '../../Axios/useAxiosPublic';
import Swal from 'sweetalert2';

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn() {
  const { signinUser,signinWithGoogle } = useAuth()
  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()
  const axiosPublic = useAxiosPublic()

  const handleRegister = (data) => {
    console.log(data)
    signinUser(data.email, data.password)
      .then(res => {
        if (res?.user?.email) {
          // updateUserProfile(data.name, data.photo)
          Swal.fire({
            icon: "success",
            title: "Sign Up Successfully",
          });
          navigate(location?.state ? location.state : '/');
        }
      })
      .catch(err => console.log(err))
  };



  //Handle google login
  const handleGoogleLogin = () => {
    console.log('hello world')
    signinWithGoogle()
      .then(res => {
        if(res?.user?.email){
          const userName = res?.user?.displayName;
          const image = res?.user?.photoURL;
          const email = res?.user?.email;
          const role = 'user'
          const userData = {image,userName,email,role}
          axiosPublic.post('/users',userData)
          .then(()=>{
            Swal.fire({
              icon: "success",
              title: "Sign Up Successfully",
            });
            navigate(location?.state ? location.state : '/');
          })
        }
      })
      .catch(err => {
        console.log(err)
      })
  }


  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            marginBottom:8,
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
    </ThemeProvider>
  );
}