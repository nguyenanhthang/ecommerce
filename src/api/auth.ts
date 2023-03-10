import request from '../utils/request';
import config from '../config/config';
export const login = async (data: any) => {
    const url = config.routes.login;
    const res = await request.post(url, data);
    if (res.data.authorisation.token) {
        localStorage.setItem('token', res.data.authorisation.token);
    }
    return res;
};
export const registerAuth = async (data: any) => {
    const bearer_token = `Bearer ${localStorage.getItem('token')}`;
    try {
        const Header = {
            headers: {
                Authorization: bearer_token
            }
        };
        const url = config.routes.register;
        const res = await request.post(url, data, Header);
        return res;
    } catch (err: any) {
        // here display a message to the user or something else
        console.error(err.message);
    }
};
export const getUser = async () => {
    const bearer_token = `Bearer ${localStorage.getItem('token')}`;
    try {
        const config = {
            headers: {
                Authorization: bearer_token
            }
        };
        const res = await request.get('/profile', config); // <== Here we use await keywords to get the result of the Promise, check internet if it's blurry for you
        return res?.data; // Maybe do some work on res.data to get the expected format
    } catch (err: any) {
        // here display a message to the user or something else
        console.error(err.message);
    }
};
export const updateUser = async (id: number | string, data: any) => {
    const bearer_token = `Bearer ${localStorage.getItem('token')}`;
    const res = await request.post(`/edit-profile/${id}`, data, {
        headers: {
            'Content-Type': ' multipart/form-data',
            Authorization: bearer_token
        }
    });
    return res?.data;
};
export const logoutUser = async () => {
    const bearer_token = `Bearer ${localStorage.getItem('token')}`;
    try {
        const config = {
            headers: {
                Authorization: bearer_token
            }
        };
        const res = await request.get('/logout', config); // <== Here we use await keywords to get the result of the Promise, check internet if it's blurry for you
        return res?.data; // Maybe do some work on res.data to get the expected format
    } catch (err: any) {
        // here display a message to the user or something else
        console.error(err.message);
    }
};
