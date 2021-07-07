import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';

import useStyles from './styles';

const Cart = ({cart}) => {
    const classes = useStyles();

    const isEmpty = !cart.line_items.length;

    const EmptyCart = () => (
        <Typography variant="subtitle1">You have no items in your shopping cart yet, start by adding some!</Typography>
    );

    const FilledCart = () => (
        <>
            <Grid container spacing={3} >
                {cart.line_items.map((item) => (
                    <Grid item xs={12} sm={4} key={item.id} >
                        <div>{item.name}</div>
                    </Grid> 
                ))}
            </Grid>
        </>
    );

    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant="h3" >Your Shopping Cart</Typography>
            {isEmpty ? <EmptyCart /> : <FilledCart />}
        </Container>
    )
}

export default Cart;
