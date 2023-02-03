import React from 'react';
import { children } from '../../types/ChildrenProp.type';
import { ContainerLayout, WrapperLayout } from './DefaultLayout.styled';
import Header from '../header/Header';
import Footer from '../footer/Footer';
const DefaultLayout: React.FC<children> = ({ children }) => {
    return (
        <WrapperLayout>
            <Header />
            <ContainerLayout>{children}</ContainerLayout>
            <Footer />
        </WrapperLayout>
    );
};

export default DefaultLayout;
