import React from 'react';
import ProductsCart from './components/ProductCart/ProductsCart';
import { CardPageWrap, CardPageContainer } from './CartPage.styled';
import { BannerDetail } from 'pages/Detail/DetailePage.styled';
import BannerRelative from 'pages/Home/components/BannerRalative/BannerRelative';
import images from '../../assets/index';
import { Container } from '@mui/material';
import SearchCartPage from './components/SearchCart/SearchCartPage';

const CardPage = () => {
    return (
        <CardPageWrap>
            <BannerDetail>
                <BannerRelative
                    nameBanner='SIMPLE PRODUCT'
                    paramBanner='Home > Shop > Cart'
                    imageBanner={images.banner7}
                    width={100}
                    height={50}
                />
            </BannerDetail>
            <CardPageContainer>
                <ProductsCart />
                <SearchCartPage />
            </CardPageContainer>
        </CardPageWrap>
    );
};

export default CardPage;