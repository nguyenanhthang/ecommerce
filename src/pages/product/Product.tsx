import SideBar from 'layouts/SideBar/SideBar';
import React, { useEffect, useMemo, useState } from 'react';
import Footer from '../../layouts/Footer/Footer';
import {
    ProductBanner,
    ProductContainer,
    ProductContent,
    ProductTool,
    ProductWrapper,
    GridProduct
} from './Product.styled';
import Products from './components/Product/Products';
import BannerRelative from 'pages/Home/components/BannerRalative/BannerRelative';
import images from 'assets';
import Tool from './components/Tool/Tool';
import { ProductPagination } from './components/Product/Products.styled';
import { Pagination } from '@mui/material';
import { useProduct } from 'Hook/useProduct';
import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import config from 'config/config';

const Product = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const filter = queryString.parse(location.search);
    const getProducts: any = useProduct(filter);
    const [currentPage, setCurrentPage] = useState(1);
    const count = getProducts?.data?.data?.last_page;
    const handleChange = (event: any, value: number) => {
        setCurrentPage(value);
        navigate({ pathname: config.routes.product, search: queryString.stringify({ page: value }) });
    };
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
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
                <GridProduct container>
                    <SideBar />
                    <ProductContent>
                        <ProductTool>
                            <Tool />
                        </ProductTool>
                        <Products getProducts={getProducts} />
                    </ProductContent>
                </GridProduct>
            </ProductContainer>
            <ProductPagination>
                <Pagination
                    count={count}
                    page={currentPage}
                    onChange={handleChange}
                    variant='outlined'
                    shape='rounded'
                />
            </ProductPagination>
            <Footer />
        </ProductWrapper>
    );
};

export default Product;
