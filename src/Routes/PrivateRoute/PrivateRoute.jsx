import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import useAuth from '../../Hooks/useAuth';
import Lottie from 'lottie-react';
import loadingdata from '../../../public/loadingdata.json'
const PrivateRoute = ({children}) => {
    const { users, loading } = useAuth()
    const location = useLocation()
    if (loading) {
        return <Lottie className="h-80vh h-[80vh] w-10/12 mx-auto" animationData={loadingdata} loop={true} />
    }
    if (users) {
        return children;
    }
    return (
        <div>
            <Navigate state={location.pathname} to='/login'></Navigate>
        </div>
    )
};

PrivateRoute.propTypes = {
    children: PropTypes.node,
};


export default PrivateRoute;