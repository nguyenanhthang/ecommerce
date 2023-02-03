// import axios, { AxiosError } from 'axios';
// import { FormStateType } from '../types/Users.type';
// const request = axios.create({
//     baseURL: process.env.REACT_APP_BASE_URL
// });
// request.interceptors.request.use(
//     function (config) {
//         // Do something before request is sent
//         return config;
//     },
//     function (error) {
//         // Do something with request error
//         return Promise.reject(error);
//     }
// );

// // Add a response interceptor
// request.interceptors.response.use(
//     function (response) {
//         // Any status code that lie within the range of 2xx cause this function to trigger
//         // Do something with response data
//         return response;
//     },
//     function (error) {
//         // Any status codes that falls outside the range of 2xx cause this function to trigger
//         // Do something with response error
//         return Promise.reject(error);
//     }
// );
// export default request;

import axios, { AxiosInstance, AxiosHeaders, AxiosError } from 'axios';


class Request {
    instance: AxiosInstance;
    private access_token: string;
    constructor() {
        this.access_token = localStorage.getItem('user') || '';
        this.instance = axios.create({
            baseURL: process.env.REACT_APP_BASE_URL,
            timeout: 10000,
            headers: {
                'Content-Type': 'application/json',
                Authorization: ''
            }
        });
        this.instance.interceptors.request.use(
            (config) => {
                if (this.access_token && config.headers) {
                    (config.headers as AxiosHeaders).set('Authorization', `Bearer ${this.access_token}`);
                }
                return config;
            },
            function (error) {
                return Promise.reject(error);
            }
        );
        this.instance.interceptors.response.use(
            (response) => {
                return response;
            },
            function (error) {
                return Promise.reject(error);
            }
        );
    }
}

const request = new Request().instance;
export default request;
// export function isAxiosError(error: unknown): error is AxiosError {
//     return axios.isAxiosError(error);
// }
