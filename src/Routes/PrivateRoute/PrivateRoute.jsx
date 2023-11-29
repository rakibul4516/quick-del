import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import useAuth from '../../Hooks/useAuth';
const PrivateRoute = ({children}) => {
    const { users, loading } = useAuth()
    const location = useLocation()
    if (loading) {
        return <h1>loading............</h1>
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