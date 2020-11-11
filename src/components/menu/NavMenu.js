import React from 'react';
import AppBar from '@material-ui/core/AppBar';
// import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { NavLink } from "react-router-dom";
// import Link from '@material-ui/core/Link';

// const useStyles = makeStyles((theme) => ({
//     root: {
//         flexGrow: 1,
//     },
//     menuButton: {
//         marginRight: theme.spacing(2),
//     },
//     title: {
//         flexGrow: 1,
//     },
// }));

const NavMenu = () => {
    // const classes = useStyles();
    return (
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start"  color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        <NavLink  exact={true} to='/'>Home</NavLink>
                    </Typography>
                    <Typography variant="h6" noWrap>
                        ||
                    </Typography>
                    <Typography variant="h6" noWrap>
                        <NavLink  to='/123'>123</NavLink>
                    </Typography>
                </Toolbar>
            </AppBar>
    );
}

export default NavMenu;