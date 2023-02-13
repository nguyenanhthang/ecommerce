import React from 'react';
import FormCheckout from './Components/FormCheckout/FormCheckout';
import { CheckOutWrapper, CheckoutWrap } from './Checkout.styled';
import SearchCartPage from './Components/SearchCart/CheckoutCartPage';
import { BannerDetail } from '../Detail/DetailePage.styled';
import BannerRelative from 'pages/Home/components/BannerRalative/BannerRelative';
import images from '../../assets/index';
import Footer from 'layouts/Footer/Footer';
import { Container } from '@mui/material';

type Props = {};

const CheckoutPage = (props: Props) => {
    return (
        <CheckOutWrapper>
            <BannerDetail>
                <BannerRelative
                    nameBanner='SIMPLE PRODUCT'
                    paramBanner='Home > Shop > Checkout'
                    imageBanner={images.banner7}
                    width={100}
                    height={50}
                />
            </BannerDetail>
            <Container>
                <CheckoutWrap container spacing={1}>
                    <FormCheckout />
                    <SearchCartPage />
                </CheckoutWrap>
            </Container>
            <Footer />
        </CheckOutWrapper>
    );
};

export default CheckoutPage;
