import React from 'react';
import { Box } from '@mui/material';
import {
    CheckoutCartPageWrap,
    CheckoutCartPageTotal,
    CheckoutCartPageTotalTitle,
    CheckoutCartPageSubTotal,
    CheckoutCartPageSubTotalCost,
    CheckoutCartPageTotalTotal,
    CheckoutCartPageTotalTotalCost
} from './CheckoutCartPage.styled';
import SearchComponent from '../../../../components/Search/SearchComponent';
import ButtonComponent from '../../../../components/Button/ButtonComponent';
import { useAppSelector } from '../../../../app/hooks';
import { RootState } from '../../../../app/store';

type Props = {};

const SearchCartPage = (props: Props) => {
    const dataTotalAmount = useAppSelector((state: RootState) => state.product.totalAmount);
    const product = useAppSelector((state: RootState) => state.product.CartProduct);
    return (
        <CheckoutCartPageWrap lg={4} md={4}>
            <CheckoutCartPageTotal>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <CheckoutCartPageTotalTitle>Product</CheckoutCartPageTotalTitle>
                    <CheckoutCartPageTotalTitle>Total</CheckoutCartPageTotalTitle>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    {product.map((el: any) => {
                        return (
                            <>
                                <CheckoutCartPageSubTotal>{el.product_name}: </CheckoutCartPageSubTotal>
                                <CheckoutCartPageSubTotalCost>$ {el.totalPrice}</CheckoutCartPageSubTotalCost>
                            </>
                        );
                    })}
                </Box>
                <CheckoutCartPageTotalTitle>CART TOTAL</CheckoutCartPageTotalTitle>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <CheckoutCartPageSubTotal>Subtotal: </CheckoutCartPageSubTotal>
                    <CheckoutCartPageSubTotalCost>$ {dataTotalAmount}</CheckoutCartPageSubTotalCost>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                    <CheckoutCartPageTotalTotal>Total: </CheckoutCartPageTotalTotal>
                    <CheckoutCartPageTotalTotalCost>$ {dataTotalAmount}</CheckoutCartPageTotalTotalCost>
                </Box>
                <ButtonComponent text='Pay' color='#ffff' colorButton='black' />
            </CheckoutCartPageTotal>
        </CheckoutCartPageWrap>
    );
};

export default SearchCartPage;
