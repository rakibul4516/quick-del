import { AppBar, Avatar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from '@mui/material';
import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import useAuth from '../../Hooks/useAuth';
import { Link } from 'react-router-dom';
import NotificationsIcon from '@mui/icons-material/Notifications';
import useUsers from '../../Hooks/useUsers';


function Navbar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const { users, signoutUser } = useAuth()
    const { data } = useUsers()
    console.log(data)
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


    //Handle logout
    const handleLogout = () => {
        signoutUser()
            .then(res => {
                console.log(res)
            })
    }



    // dashboard routes
    const routesByRole = {
        user: '/dashboard/parcelbooking',
        admin: '/dashboard/statistics',
        deliverymen: '/dashboard/mydeliverylist',
    };

    const userRoutes = data ? data?.map(user => {
        const role = user?.role;
        const route = routesByRole[role];

        return (
            <Link key={user?._id} to={route}>
                <h2 className=''>Dashboard</h2>
            </Link>
        );
    }) : <Link to='dashboard'>
        <h2 className=''>Dashboard</h2>
    </Link>;


    return (
        <AppBar sx={{ maxWidth: 1240, backgroundColor: "#e9ece3" }} position="static">
            <Container >
                <Toolbar disableGutters>
                    <img src="https://i.ibb.co/BNKXvSk/image-removebg-preview-7.png" alt="logo" className='h-20 w-20 p-3 max-lg:hidden ' />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'black',
                            textDecoration: 'none',
                        }}
                    >
                        QuickDel
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
                            <MenuItem sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', gap: 2, }} onClick={handleCloseNavMenu}>
                                <Link to='/'>
                                    <Typography textAlign="center">Home</Typography>
                                </Link>

                                {userRoutes}
                                <Link to='/'>
                                    <Typography textAlign="center">Contact</Typography>
                                </Link>
                            </MenuItem>
                        </Menu>
                    </Box>
                    <img src="https://i.ibb.co/BNKXvSk/image-removebg-preview-7.png" alt="logo" className='h-20 w-20 p-3 lg:hidden' />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'black',
                            textDecoration: 'none',
                        }}
                    >
                        QuickDel
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'end', justifyItems: 'center', marginRight: "20px" } }}>
                        <Link to='/'>
                            <Button
                                sx={{ my: 2, color: 'black', display: 'block' }}
                            >
                                Home
                            </Button>
                        </Link>
                        <Button
                            sx={{ my: 2, color: 'black', display: 'block' }}
                        >
                            {userRoutes}
                        </Button>
                        <Button
                            sx={{ my: 2, color: 'black', display: 'block' }}
                        >
                            Contact
                        </Button>
                        <Button
                            sx={{ my: 2, color: 'black', display: 'block' }}
                        >
                            <NotificationsIcon />
                        </Button>
                    </Box>

                    {
                        users ? <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt="Profile image" src={users?.photoURL} />
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
                                <MenuItem sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', gap: 2, }} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{users.displayName}</Typography>
                                    {userRoutes}
                                    <Typography onClick={handleLogout} textAlign="center">Logout</Typography>
                                </MenuItem>
                            </Menu>
                        </Box> : <Link to="login"><Button variant="contained">Login</Button></Link>

                    }
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Navbar;