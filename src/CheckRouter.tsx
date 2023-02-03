import React from 'react';
import { Navigate } from 'react-router-dom';
import { children } from './types/ChildrenProp.type';
import config from './config/config';

const CheckRouter: React.FC<children> = ({ children }) => {
    return localStorage.getItem('user') ? React.Children.only(children) : <Navigate to={config.routes.login} />;
};
export default CheckRouter;
