import Home from '../pages/Home/Home';
import Register from '../pages/Auth/register/Register';
import Login from '../pages/Auth/Login/Login';
import config from './../config/config';
import { Router } from '../types/Router.type';
const PublishRouter: Array<Router> = [
    { path: config.routes.login, component: Login, layout: null },
    { path: config.routes.register, component: Register, layout: null }
];
const PrivateRouter: Array<Router> = [{ path: config.routes.home, component: Home }];
export { PrivateRouter, PublishRouter };
