import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useForm } from 'react-hook-form';
import useAuth from '../../../../Hooks/useAuth';
import useAxiosPublic from '../../../../Axios/useAxiosPublic';
const ParcelBooking = () => {
    const axiosPublic = useAxiosPublic()
    const { users } = useAuth()
    const { register, handleSubmit } = useForm()

    //Auto generate date
    const currentDate = new Date();

    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();

    const padWithZero = (num) => {
        return num.toString().padStart(2, '0');
    };
    const bookingDate = `${year}-${padWithZero(month)}-${padWithZero(day)}`;

    //Handel form data
    const handleBookingForm = (event) => {
        const totalPrice = parseInt(event.parcelWeight) * 50

        const parcelData = {
            senderName: event.senderName,
            deliveryAddress: event.deliveryAddress,
            deliveryDate: event.deliveryDate,
            email: event.email,
            latitude: parseFloat(event.latitude),
            longitude: parseFloat(event.longitude),
            parcelType: event.parcelType,
            parcelWeight: parseInt(event.parcelWeight),
            phoneNumber: parseInt(event.phoneNumber),
            price: totalPrice,
            receiverName: event.receiverName,
            receiverNumber: parseInt(event.receiverNumber),
            status: 'pending',
            bookingDate:bookingDate,
        }
        console.log(parcelData)
        axiosPublic.post('/parcels', parcelData)
            .then(res => {
                console.log(res.data)
            }).catch(err => {
                console.log(err)
            })

    }
    return (
        <Container component="main" maxWidth="lg">
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
                    Booking
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit(handleBookingForm)} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                defaultValue={users?.displayName}
                                name="senderName"
                                required
                                fullWidth
                                id="sendername"
                                label="Sender Name"
                                {...register('senderName')}
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                defaultValue={users?.email}
                                required
                                fullWidth
                                id="email"
                                label="email"
                                name="email"
                                {...register('email')}
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                name="phoneNumber"
                                required
                                fullWidth
                                id="phoneNumber"
                                label="Phone Number"
                                {...register('phoneNumber')}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="parcelType"
                                label="Parcel Type"
                                name="parcelType"
                                {...register('parcelType')}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField type='number'
                                name="parcelWeight"
                                fullWidth
                                id="parcelWeight"
                                label="Parcel Weight"
                                {...register('parcelWeight')}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="receiverName"
                                label="Receiver Name"
                                name="receiverName"
                                {...register('receiverName')}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                name="receiverNumber"
                                required
                                fullWidth
                                id="receiverNumber"
                                label="Receiver's Number"
                                {...register('receiverNumber')}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="deliveryAddress"
                                label="Delivery Address"
                                name="deliveryAddress"
                                {...register('deliveryAddress')}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                type='date'
                                name="deliveryDate"
                                required
                                fullWidth
                                id="deliveryDate"
                                {...register('deliveryDate')}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="latitude"
                                label="Delivery Address Latitude"
                                name="latitude"
                                {...register('latitude')}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                name="longitude"
                                required
                                fullWidth
                                id="longitude"
                                label="Delivery Address longitude"
                                {...register('longitude')}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                defaultValue={"For 1 kg Price is 50Tk"}
                                fullWidth
                                id="price"
                                label="Total Price"
                                name="price"
                                {...register('price')}
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Booking
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default ParcelBooking;