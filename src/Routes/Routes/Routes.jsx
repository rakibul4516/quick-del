import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main/Main";
import SignUp from "../../Pages/Authentication/SignUp";
import SignIn from "../../Pages/Authentication/SignIn";
import Deshboard from "../../Layouts/Deshboard/Deshboard";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Home from "../../Pages/MainPages/Home/Home";
import MyProfile from "../../Pages/DashboardPages/UsersDashboardPages/MyProfile/MyProfile";
import ParcelBooking from "../../Pages/DashboardPages/UsersDashboardPages/ParcelBooking/ParcelBooking";
import MyParcel from "../../Pages/DashboardPages/UsersDashboardPages/MyParcel/MyParcel"
import AllDeliveryMen from "../../Pages/DashboardPages/AdminDashboardPages/AllDeliveryMen/AllDeliveryMen";
import AllParcels from "../../Pages/DashboardPages/AdminDashboardPages/AllParcels/AllParcels";
import AllUsers from "../../Pages/DashboardPages/AdminDashboardPages/AllUsers/AllUsers";
import MyDeliveryList from "../../Pages/DashboardPages/DeliverymenDeshboardPages/MyDeliveryList/MyDeliveryList";
import MyReviews from "../../Pages/DashboardPages/DeliverymenDeshboardPages/MyReviews/MyReviews";
import UpdateParcel from "../../Pages/DashboardPages/UsersDashboardPages/MyParcel/UpdateParcel";
import Payment from "../../Pages/DashboardPages/UsersDashboardPages/MyParcel/Payment/Payment";
import Statistics from '../../Pages/DashboardPages/AdminDashboardPages/Statistics/Statistics'
// import PaymentSuccess from "../../Pages/DashboardPages/UsersDashboardPages/MyParcel/Payment/PaymentSuccess";



const Routes = createBrowserRouter([
    {
        path:'/',
        element: <Main/>,
        children:[
            {
                path:'/',
                element:<Home/>,
            },
            {
                path:'register',
                element: <SignUp/>
            },
            {
                path:'login',
                element: <SignIn/>
            },
        ]
    },
    {

        path:'/dashboard',
        element: <PrivateRoute><Deshboard/></PrivateRoute>,
        children:[
            {
                path:'parcelbooking',
                element: <PrivateRoute><ParcelBooking/></PrivateRoute>
            },
            {
                path:'myparcel',
                element: <PrivateRoute><MyParcel/></PrivateRoute>
            },
            {
                path:'updateparcel/:id',
                element: <PrivateRoute><UpdateParcel/></PrivateRoute>,
                loader:({params}) =>fetch(`http://localhost:5000/api/v1/parcels/${params.id}`)
            },
            {
                path:'payment/:id',
                element: <PrivateRoute><Payment/></PrivateRoute>,
                loader:({params}) =>fetch(`http://localhost:5000/api/v1/parcels/${params.id}`)
            },
            // {
            //     path:'/',
            //     element: <PrivateRoute><PaymentSuccess/></PrivateRoute>,
            // },
            {
                path:'myprofile',
                element: <PrivateRoute><MyProfile/></PrivateRoute>
            },
            {
                path:'allusers',
                element: <PrivateRoute><AllUsers/></PrivateRoute>,
                // loader: () =>fetch('http://localhost:5000/api/v1/countusers')
            },
            {
                path:'allparcels',
                element: <PrivateRoute><AllParcels/></PrivateRoute>
            },
            {
                path:'alldeliverymen',
                element: <PrivateRoute><AllDeliveryMen/></PrivateRoute>
            },
            {
                path:'statistics',
                element: <PrivateRoute><Statistics/></PrivateRoute>
            },
            {
                path:'mydeliverylist',
                element: <PrivateRoute><MyDeliveryList/></PrivateRoute>
            },
            {
                path:'myreviews',
                element: <PrivateRoute><MyReviews/></PrivateRoute>
            },
        ]
    }
])

export default Routes;