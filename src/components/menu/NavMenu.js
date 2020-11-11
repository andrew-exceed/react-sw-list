import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { NavLink } from "react-router-dom";

const NavMenu = () => {
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
                    <NavLink  to='/404'>404</NavLink>
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default NavMenu;