import axios, { AxiosInstance, AxiosHeaders, AxiosError } from 'axios';

class Request {
    instance: AxiosInstance;
    private access_token: string;
    constructor() {
        this.access_token = localStorage.getItem('token') || '';
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
            (response: any) => {
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
