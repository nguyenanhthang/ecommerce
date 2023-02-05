import React from 'react';
import { children } from '../../types/ChildrenProp.type';
import { ContainerLayout, WrapperLayout } from './DefaultLayout.styled';
import Header from '../header/Header';
const DefaultLayout: React.FC<children> = ({ children }) => {
    return (
        <WrapperLayout>
            <Header />
            <ContainerLayout>{children}</ContainerLayout>
        </WrapperLayout>
    );
};

export default DefaultLayout;
