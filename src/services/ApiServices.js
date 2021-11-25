import axios from 'axios';
import http from "../http-common";

const instance = axios.create({
    baseURL: http.WS_BASE_URL,
});

instance.interceptors.request.use(async (http) => {
    const token = localStorage.getItem('token');
    http.headers.Authorization = (token ? token : '');
    http.headers.ContentType = 'application/json';
    return http;
});

export const login = async (username, password) => (
    await instance.post('/auth/login', {username, password})
);

export const getAllSingles = async () => (
    await instance.get('/singles/allsingles')
);