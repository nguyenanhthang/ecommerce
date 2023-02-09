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
import { useNavigate } from 'react-router-dom';
import config from 'config/config';
type Props = {
    dataCart: any;
};
const ProductsCart: React.FC<Props> = ({ dataCart }) => {
    let [count, setCount] = React.useState(1);
    const navigate = useNavigate();
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
            {dataCart?.map((product: any) => {
                return (
                    <Grid container sx={{ m: 0 }}>
                        <Grid item xs={6}>
                            <ItemProduct>
                                <Images image={`http://hieu.fresher.ameladev.click/${product?.product_image}`} />
                                <ProductItem>
                                    <ProductCartName>{product?.product_name}</ProductCartName>
                                    <ProductCartCost>{product?.attribute_product[0]?.pivot.price}</ProductCartCost>
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
                            <ItemProduct>{product?.attribute_product[0]?.pivot.price}</ItemProduct>
                        </Grid>
                        <Grid item xs={1}>
                            <ItemProduct>
                                <DeleteForeverIcon sx={{ cursor: 'pointer' }} />
                            </ItemProduct>
                        </Grid>
                    </Grid>
                );
            })}
            <CartButtonWrap>
                <Grid item xs={4}>
                    <ButtonComponent
                        onClick={() => navigate(config.routes.product)}
                        text='Continue Shopping'
                        color='#ffff'
                        colorButton='green'
                    />
                </Grid>
                <Grid item xs={4}>
                    <ButtonComponent text='Update Cart' color='#ffff' colorButton='black' />
                </Grid>
            </CartButtonWrap>
        </ProductsCartWrap>
    );
};

export default ProductsCart;
