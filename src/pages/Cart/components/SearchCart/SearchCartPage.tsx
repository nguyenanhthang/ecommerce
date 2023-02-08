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

type Props = {};

const SearchCartPage = (props: Props) => {
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
                    <SearchCartPageSubTotalCost>$ 169.50</SearchCartPageSubTotalCost>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                    <SearchCartPageTotalTotal>Total: </SearchCartPageTotalTotal>
                    <SearchCartPageTotalTotalCost>$ 169.50</SearchCartPageTotalTotalCost>
                </Box>
                <ButtonComponent text='Update Cart' color='#ffff' colorButton='black' />
            </SearchCartPageTotal>
        </SearchCartPageWrap>
    );
};

export default SearchCartPage;
