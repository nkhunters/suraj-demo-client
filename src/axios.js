import axios from 'axios';
export const SITE_BASE_URL = "http://mydemohosting.s3-website.ap-south-1.amazonaws.com/"

const instance = axios.create({
    baseURL: 'http://13.232.103.20/api/'
});

instance.interceptors.request.use(

    config => {
        const token = sessionStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    err => {
        Promise.reject(err);
    }
);

export default instance;