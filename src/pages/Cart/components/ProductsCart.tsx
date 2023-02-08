import { ItemProduct, ProductCartTitle, ProductsCartWrap } from './ProductsCart.styled';
import * as React from 'react';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
type Props = {};
const ProductsCart = (props: Props) => {
    return (
        <ProductsCartWrap>
            <Grid container sx={{ m: 0 }}>
                <Grid item xs={6}>
                    <ProductCartTitle>Product</ProductCartTitle>
                </Grid>
                <Grid item xs={2.5}>
                    <ProductCartTitle>QUANTITY</ProductCartTitle>
                </Grid>
                <Grid item xs={2.5}>
                    <ProductCartTitle>TOTAL</ProductCartTitle>
                </Grid>
                <Grid item xs={1}>
                    <ProductCartTitle>Action</ProductCartTitle>
                </Grid>
            </Grid>
            <Grid container sx={{ m: 0 }}>
                <Grid item xs={6}>
                    <ItemProduct></ItemProduct>
                </Grid>
                <Grid item xs={2.5}>
                    <ItemProduct></ItemProduct>
                </Grid>
                <Grid item xs={2.5}>
                    <ItemProduct></ItemProduct>
                </Grid>
                <Grid item xs={1}>
                    <ItemProduct>X</ItemProduct>
                </Grid>
            </Grid>
        </ProductsCartWrap>
    );
};

export default ProductsCart;
