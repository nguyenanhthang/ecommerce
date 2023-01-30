import React from 'react';
import { children } from '../../types/ChildrenProp.type';
import './GlobalStyle.module.scss';

const GlobalStyle: React.FC<children> = ({ children }) => {
    return React.Children.only(children);
};

export default GlobalStyle;
