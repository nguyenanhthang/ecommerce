import React from 'react';
import ProductsCart from './components/ProductCart/ProductsCart';
import { CardPageWrap, CardPageContainer } from './CartPage.styled';
import { BannerDetail } from 'pages/Detail/DetailePage.styled';
import BannerRelative from 'pages/Home/components/BannerRalative/BannerRelative';
import images from '../../assets/index';
import SearchCartPage from './components/SearchCart/SearchCartPage';
import { useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';
import { useEffect } from 'react';

const CardPage = () => {
    const dataCart = useAppSelector((state: RootState) => state.product.CartProduct);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
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
            <CardPageContainer container>
                <ProductsCart dataCart={dataCart} />
                <SearchCartPage />
            </CardPageContainer>
        </CardPageWrap>
    );
};

export default CardPage;
