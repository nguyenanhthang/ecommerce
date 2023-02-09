import React from 'react';
import { Box } from '@mui/material';
import {
    SearchCartPageWrap,
    SearchCartPageHeader,
    SearchCartPageTitle,
    SearchCartPageSearch,
    SearchCartPageTotal,
    SearchCartPageTotalTitle,
    SearchCartPageSubTotal,
    SearchCartPageSubTotalCost,
    SearchCartPageTotalTotal,
    SearchCartPageTotalTotalCost
} from './SearchCartPage.styled';
import SearchComponent from '../../../../components/Search/SearchComponent';
import ButtonComponent from '../../../../components/Button/ButtonComponent';
import { useAppSelector } from '../../../../app/hooks';
import { RootState } from '../../../../app/store';

type Props = {};

const SearchCartPage = (props: Props) => {
    const dataTotalAmount = useAppSelector((state: RootState) => state.product.totalAmount);
    return (
        <SearchCartPageWrap>
            <SearchCartPageHeader>
                <SearchCartPageTitle>DISCOUNT CODES</SearchCartPageTitle>
            </SearchCartPageHeader>
            <SearchCartPageSearch>
                <SearchComponent />
            </SearchCartPageSearch>
            <SearchCartPageTotal>
                <SearchCartPageTotalTitle>CART TOTAL</SearchCartPageTotalTitle>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <SearchCartPageSubTotal>Subtotal: </SearchCartPageSubTotal>
                    <SearchCartPageSubTotalCost>$ {dataTotalAmount}</SearchCartPageSubTotalCost>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                    <SearchCartPageTotalTotal>Total: </SearchCartPageTotalTotal>
                    <SearchCartPageTotalTotalCost>$ {dataTotalAmount}</SearchCartPageTotalTotalCost>
                </Box>
                <ButtonComponent text='Update Cart' color='#ffff' colorButton='black' />
            </SearchCartPageTotal>
        </SearchCartPageWrap>
    );
};

export default SearchCartPage;
