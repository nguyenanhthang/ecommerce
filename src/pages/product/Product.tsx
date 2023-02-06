import SideBar from 'layouts/siseBar/SideBar';
import React from 'react';
import Footer from '../../layouts/footer/Footer';
import { ProductBanner, ProductContainer, ProductContent, ProductTool, ProductWrapper } from './Product.styled';
import Products from './components/Product/Products';
import BannerRelative from 'pages/Home/components/BannerRalative/BannerRelative';
import images from 'assets';
import Tool from './components/Tool/Tool';
import { ProductPagination } from './components/Product/Products.styled';
import { Pagination } from '@mui/material';

type Props = {};

const Product = (props: Props) => {
    return (
        <ProductWrapper>
            <ProductBanner>
                <BannerRelative
                    nameBanner='SIMPLE PRODUCT'
                    paramBanner='Home > Product'
                    imageBanner={images.banner7}
                    width={100}
                    height={50}
                />
            </ProductBanner>
            <ProductContainer>
                <SideBar />
                <ProductContent>
                    <ProductTool>
                        <Tool />
                    </ProductTool>
                    <Products />
                </ProductContent>
            </ProductContainer>
            <ProductPagination>
                <Pagination count={10} variant='outlined' shape='rounded' />
            </ProductPagination>
            <Footer />
        </ProductWrapper>
    );
};

export default Product;
