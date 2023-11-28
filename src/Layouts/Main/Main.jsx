import { Outlet } from "react-router";
import Navbar from "../../Shared/Navbar/Navbar";
import { Grid } from "@mui/material";
import { auto } from "@popperjs/core";
import Footer from "../../Shared/Footer/Footer";

const Main = () => {
    return (
        <Grid sx={{maxWidth:1240,mx:auto}}>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </Grid>
    );
};

export default Main;