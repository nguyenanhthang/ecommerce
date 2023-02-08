import React from 'react';
import ProductsCart from './components/ProductsCart';
import { CardPageWrap } from './CardPage.styled';
import { BannerDetail } from 'pages/Detail/DetailePage.styled';
import BannerRelative from 'pages/Home/components/BannerRalative/BannerRelative';
import images from '../../assets/index';
import { Container } from '@mui/material';

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
            <Container>
                <ProductsCart />
            </Container>
        </CardPageWrap>
    );
};

export default CardPage;
