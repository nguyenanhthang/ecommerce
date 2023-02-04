import request from '../utils/request';
import { FormStateType, User } from '../types/Users.type';
import config from '../config/config';
export const login = async (data: any) => {
    const url = config.routes.login;
    const res = await request.post(url, data);
    if (res.data.authorisation.token) {
        localStorage.setItem('user', res.data.authorisation.token);
    }
    return res;
};
export const registerAuth = async (data: any) => {
    const url = config.routes.register;
    const res = await request.post(url, data);
    return res;
};
export const getUser = async () => {
    const url = config.routes.profile;
    const res = await request.get<User>(url);
    return res;
};
