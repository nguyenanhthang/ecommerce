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
    return (
        <CheckoutCartPageWrap>
            <CheckoutCartPageTotal>
                <CheckoutCartPageTotalTitle>CART TOTAL</CheckoutCartPageTotalTitle>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <CheckoutCartPageSubTotal>Subtotal: </CheckoutCartPageSubTotal>
                    <CheckoutCartPageSubTotalCost>$ {dataTotalAmount}</CheckoutCartPageSubTotalCost>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                    <CheckoutCartPageTotalTotal>Total: </CheckoutCartPageTotalTotal>
                    <CheckoutCartPageTotalTotalCost>$ {dataTotalAmount}</CheckoutCartPageTotalTotalCost>
                </Box>
                <ButtonComponent text='Update Cart' color='#ffff' colorButton='black' />
            </CheckoutCartPageTotal>
        </CheckoutCartPageWrap>
    );
};

export default SearchCartPage;
