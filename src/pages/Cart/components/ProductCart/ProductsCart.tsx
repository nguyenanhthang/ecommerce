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
import Grid from '@mui/material/Unstable_Grid2';
import { Box } from '@mui/material';
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
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [show, setShow] = React.useState(false);
    const addProduct = (product: any) => {
        dispatch(
            addCart({
                id: product.id,
                product_name: product.product_name,
                product_image: product.product_image,
                quantity: +1,
                productPrice: product?.productPrice,
                totalPrice: product?.productPrice
            })
        ) && setShow(false);
    };
    return (
        <ProductsCartWrap lg={9} md={9} sm={12} xs={12}>
            <Grid sx={{ m: 0, marginBottom: '30px', display: 'flex' }}>
                <Grid lg={6} xs={5} sm={4}>
                    <ProductCartTitle>Product</ProductCartTitle>
                </Grid>
                <Grid lg={2.5} xs={3} sm={3}>
                    <ProductCartTitle>QUANTITY</ProductCartTitle>
                </Grid>
                <Grid lg={2.5} xs={3} sm={3}>
                    <ProductCartTitle>TOTAL</ProductCartTitle>
                </Grid>
                <Grid lg={1} xs={1} sm={2}>
                    <ProductCartTitle>Action</ProductCartTitle>
                </Grid>
            </Grid>
            {dataCart.length !== 0 ? (
                dataCart.map((product: any) => {
                    console.log(product);
                    return (
                        <Grid sx={{ m: 0, display: 'flex' }}>
                            <Grid lg={6} xs={4}>
                                <ItemProduct>
                                    <Images image={`http://hieu.fresher.ameladev.click/${product?.product_image}`} />
                                    <ProductItem>
                                        <ProductCartName>{product?.product_name}</ProductCartName>
                                        <ProductCartCost>{product?.productPrice}</ProductCartCost>
                                    </ProductItem>
                                </ItemProduct>
                            </Grid>
                            <Grid lg={2.5} xs={3}>
                                <ItemProduct>
                                    <ProductCartSizeButtonNode>
                                        <ProductCartButton sx={{ left: '55%' }} onClick={() => addProduct(product)}>
                                            +
                                        </ProductCartButton>
                                        <ProductCartCount>{product?.quantity}</ProductCartCount>
                                        <ProductCartButton
                                            disabled={show}
                                            onClick={() =>
                                                product?.quantity === 1
                                                    ? setShow(true)
                                                    : dispatch(deleteCart(product.id))
                                            }
                                        >
                                            -
                                        </ProductCartButton>
                                    </ProductCartSizeButtonNode>
                                </ItemProduct>
                            </Grid>
                            <Grid lg={2.5} xs={3}>
                                <ItemProduct>{product?.totalPrice}</ItemProduct>
                            </Grid>
                            <Grid lg={1} xs={2}>
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
                <Grid xs={4}>
                    <ButtonComponent
                        onClick={() => navigate(config.routes.product)}
                        text='Continue Shopping'
                        color='#ffff'
                        colorButton='green'
                    />
                </Grid>
            </CartButtonWrap>
        </ProductsCartWrap>
    );
};

export default ProductsCart;
