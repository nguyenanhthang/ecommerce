import Home from '../pages/Home/Home';
import Register from '../pages/Auth/register/Register';
import Login from '../pages/Auth/Login/Login';
import config from './../config/config';
import { Router } from '../types/Router.type';
import Profile from 'pages/Profile/Profile';
import DetailPage from 'pages/Detail/DetailPage';
import Product from 'pages/product/Product';
const PublishRouter: Array<Router> = [
    { path: config.routes.login, component: Login, layout: null },
    { path: config.routes.register, component: Register, layout: null }
];
const PrivateRouter: Array<Router> = [
    { path: config.routes.home, component: Home },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.detail, component: DetailPage },
    { path: config.routes.product, component: Product }
];
export { PrivateRouter, PublishRouter };
