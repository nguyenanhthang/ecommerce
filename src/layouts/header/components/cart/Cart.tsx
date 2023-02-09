import React from 'react';
import CardCart from './components/CardCart';
import { ButtonCard, HeaderCartList, HeaderCartListItem, HeaderCartListWrap, HeaderCartTitle } from './Card.styled';
import ButtonComponent from '../../../../components/Button/ButtonComponent';
import { Box, Typography } from '@mui/material';
import { useAppSelector } from '../../../../app/hooks';
import images from '../../../../assets/index';
import { useNavigate } from 'react-router-dom';
import config from 'config/config';

const Cart = () => {
    const dataCart = useAppSelector((state: any) => state.product.CartProduct);
    const dataTotalAmount = useAppSelector((state: any) => state.product.totalAmount);
    const navigate = useNavigate();
    return (
        <HeaderCartListWrap>
            <HeaderCartTitle>List Cart</HeaderCartTitle>
            <HeaderCartList>
                {dataCart?.length !== 0 ? (
                    dataCart?.map((product: any) => {
                        return (
                            <HeaderCartListItem>
                                <CardCart dataCart={product} />
                            </HeaderCartListItem>
                        );
                    })
                ) : (
                    <Box>
                        <img style={{ width: '50%', height: '50%' }} src={images.noProduct} alt='img' />
                    </Box>
                )}
            </HeaderCartList>
            <ButtonCard>
                <Typography sx={{ fontSize: '0.9rem', fontWeight: 600, color: 'red' }} variant='caption'>
                    ToTal Cost: {dataTotalAmount}$
                </Typography>
                <ButtonComponent
                    onClick={() => navigate(config.routes.cartPage)}
                    text='xem gio hang'
                    width={20}
                    height={100}
                    colorButton='#2e7c94'
                    color='#ffff'
                />
            </ButtonCard>
        </HeaderCartListWrap>
    );
};

export default Cart;
