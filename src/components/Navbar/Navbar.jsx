import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { classExpression } from '@babel/types';

import logo from '../../assets/commerce.png';

const Navbar = () => {
    return (
        <>
            <AppBar position="fixed" className={classExpression.appBar} color="inherit" >
                <Toolbar>
                    <Typography variant="h6" className={classes.title} color="inherit" >
                        <img src={logo} alt="Commerce.js" height="25px" className={classes.image} />
                        Company name
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.button}>
                        <IconButton  aria-label="Show cart items" color="inherit" >
                            <Badge badgeContent={2} color="secondary" >
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;
