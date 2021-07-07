import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { classExpression } from '@babel/types';

const Navbar = () => {
    return (
        <>
            <AppBar position="fixed" className={classExpression.appBar} color="inherit" >
                <Toolbar>
                    <Typography variant="h6" className={classes.title} color="inherit" >
                        <img src={} alt="Commerce.js" height="25px" className={classes.image} />
                        Company name
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;
