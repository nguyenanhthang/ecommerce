import {
    ItemProduct,
    ProductCartTitle,
    ProductsCartWrap,
    ProductCartSizeButtonNode,
    ProductCartButton,
    ProductCartCount,
    Images,
    ProductItem,
    ProductCartName,
    ProductCartCost
} from './ProductsCart.styled';
import * as React from 'react';
import { Grid } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { CartButtonWrap } from './ProductsCart.styled';
import ButtonComponent from 'components/Button/ButtonComponent';
type Props = {};
const ProductsCart = (props: Props) => {
    let [count, setCount] = React.useState(1);

    function incrementCount() {
        count = count + 1;
        setCount(count);
    }
    function decrementCount() {
        count = count - 1;
        setCount(count);
    }
    return (
        <ProductsCartWrap>
            <Grid container sx={{ m: 0, marginBottom: '30px' }}>
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
                    <ItemProduct>
                        <Images image='static/images/avatar/1.jpg' />
                        <ProductItem>
                            <ProductCartName>asdasd</ProductCartName>
                            <ProductCartCost>sdadsa</ProductCartCost>
                        </ProductItem>
                    </ItemProduct>
                </Grid>
                <Grid item xs={2.5}>
                    <ItemProduct>
                        <ProductCartSizeButtonNode>
                            <ProductCartButton sx={{ left: '55%' }} onClick={incrementCount}>
                                +
                            </ProductCartButton>
                            <ProductCartCount>{count}</ProductCartCount>
                            <ProductCartButton onClick={decrementCount}>-</ProductCartButton>
                        </ProductCartSizeButtonNode>
                    </ItemProduct>
                </Grid>
                <Grid item xs={2.5}>
                    <ItemProduct>{43}</ItemProduct>
                </Grid>
                <Grid item xs={1}>
                    <ItemProduct>
                        <DeleteForeverIcon sx={{ cursor: 'pointer' }} />
                    </ItemProduct>
                </Grid>
            </Grid>
            <Grid container sx={{ m: 0 }}>
                <Grid item xs={6}>
                    <ItemProduct>
                        <Images image='' />
                        <ProductItem>
                            <ProductCartName>asdasd</ProductCartName>
                            <ProductCartCost>sdadsa</ProductCartCost>
                        </ProductItem>
                    </ItemProduct>
                </Grid>
                <Grid item xs={2.5}>
                    <ItemProduct>
                        <ProductCartSizeButtonNode>
                            <ProductCartButton sx={{ left: '55%' }} onClick={incrementCount}>
                                +
                            </ProductCartButton>
                            <ProductCartCount>{count}</ProductCartCount>
                            <ProductCartButton onClick={decrementCount}>-</ProductCartButton>
                        </ProductCartSizeButtonNode>
                    </ItemProduct>
                </Grid>
                <Grid item xs={2.5}>
                    <ItemProduct>{43}</ItemProduct>
                </Grid>
                <Grid item xs={1}>
                    <ItemProduct>
                        <DeleteForeverIcon sx={{ cursor: 'pointer' }} />
                    </ItemProduct>
                </Grid>
            </Grid>
            <Grid container sx={{ m: 0 }}>
                <Grid item xs={6}>
                    <ItemProduct>
                        <Images image='' />
                        <ProductItem>
                            <ProductCartName>asdasd</ProductCartName>
                            <ProductCartCost>sdadsa</ProductCartCost>
                        </ProductItem>
                    </ItemProduct>
                </Grid>
                <Grid item xs={2.5}>
                    <ItemProduct>
                        <ProductCartSizeButtonNode>
                            <ProductCartButton sx={{ left: '55%' }} onClick={incrementCount}>
                                +
                            </ProductCartButton>
                            <ProductCartCount>{count}</ProductCartCount>
                            <ProductCartButton onClick={decrementCount}>-</ProductCartButton>
                        </ProductCartSizeButtonNode>
                    </ItemProduct>
                </Grid>
                <Grid item xs={2.5}>
                    <ItemProduct>{43}</ItemProduct>
                </Grid>
                <Grid item xs={1}>
                    <ItemProduct>
                        <DeleteForeverIcon sx={{ cursor: 'pointer' }} />
                    </ItemProduct>
                </Grid>
            </Grid>
            <CartButtonWrap>
                <Grid item xs={4}>
                    <ButtonComponent text='Continue Shopping' color='#ffff' colorButton='green' />
                </Grid>
                <Grid item xs={4}>
                    <ButtonComponent text='Update Cart' color='#ffff' colorButton='black' />
                </Grid>
            </CartButtonWrap>
        </ProductsCartWrap>
    );
};

export default ProductsCart;
