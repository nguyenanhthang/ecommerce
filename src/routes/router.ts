import Home from '../pages/Home/Home';
import Register from '../pages/Auth/register/Register';
import Login from '../pages/Auth/Login/Login';
import config from './../config/config';
const PublishRouter: any[] = [
    { path: config.routes.login, component: Login, layout: null },
    { path: config.routes.register, component: Register, layout: null },
    { path: config.routes.home, component: Home }
];
const PrivateRouter: [] = [];
export { PrivateRouter, PublishRouter };
