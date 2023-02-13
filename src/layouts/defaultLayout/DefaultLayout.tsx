import React from 'react';
import { children } from '../../types/ChildrenProp.type';
import { ContainerLayout, WrapperLayout } from './DefaultLayout.styled';
import Header from '../header/Header';
import HeaderMobile from 'layouts/Mobile/HeaderMobile/HeaderMobile';
import useMediaQuery from '@mui/material/useMediaQuery';

const DefaultLayout: React.FC<children> = ({ children }) => {
    const matches = useMediaQuery('(max-width:650px)');
    return (
        <WrapperLayout>
            {matches ? <HeaderMobile /> : <Header />}
            <ContainerLayout>{children}</ContainerLayout>
        </WrapperLayout>
    );
};

export default DefaultLayout;
