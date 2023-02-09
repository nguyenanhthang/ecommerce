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
import { Grid, Box } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { CartButtonWrap } from './ProductsCart.styled';
import ButtonComponent from 'components/Button/ButtonComponent';
import { useNavigate } from 'react-router-dom';
import config from 'config/config';
import { RootState } from '../../../../app/store';
import { useAppSelector, useAppDispatch } from '../../../../app/hooks';
import { addCart, deleteCart, destroyCart } from 'features/Product/ProductSlice';
import images from '../../../../assets/index';
type Props = {
    dataCart: any;
};
const ProductsCart: React.FC<Props> = ({ dataCart }) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
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
            {dataCart.length !== 0 ? (
                dataCart.map((product: any) => {
                    return (
                        <Grid container sx={{ m: 0 }}>
                            <Grid item xs={6}>
                                <ItemProduct>
                                    <Images image={`http://hieu.fresher.ameladev.click/${product?.product_image}`} />
                                    <ProductItem>
                                        <ProductCartName>{product?.product_name}</ProductCartName>
                                        <ProductCartCost>{product?.productPrice}</ProductCartCost>
                                    </ProductItem>
                                </ItemProduct>
                            </Grid>
                            <Grid item xs={2.5}>
                                <ItemProduct>
                                    <ProductCartSizeButtonNode>
                                        <ProductCartButton
                                            sx={{ left: '55%' }}
                                            onClick={() =>
                                                dispatch(
                                                    addCart({
                                                        id: product.id,
                                                        product_name: product.product_name,
                                                        product_image: product.product_image,
                                                        quantity: +1,
                                                        productPrice: product?.productPrice,
                                                        totalPrice: product?.productPrice
                                                    })
                                                )
                                            }
                                        >
                                            +
                                        </ProductCartButton>
                                        <ProductCartCount>{product?.quantity}</ProductCartCount>
                                        <ProductCartButton onClick={() => dispatch(deleteCart(product.id))}>
                                            -
                                        </ProductCartButton>
                                    </ProductCartSizeButtonNode>
                                </ItemProduct>
                            </Grid>
                            <Grid item xs={2.5}>
                                <ItemProduct>{product?.totalPrice}</ItemProduct>
                            </Grid>
                            <Grid item xs={1}>
                                <ItemProduct>
                                    <DeleteForeverIcon
                                        onClick={() => dispatch(destroyCart(product.id))}
                                        sx={{ cursor: 'pointer' }}
                                    />
                                </ItemProduct>
                            </Grid>
                        </Grid>
                    );
                })
            ) : (
                <Box>
                    <img style={{ width: '50%', height: '50%' }} src={images.noProduct} alt='img' />
                </Box>
            )}
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
