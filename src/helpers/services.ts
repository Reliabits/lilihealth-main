/* eslint-disable no-unused-vars */
/* eslint-disable no-else-return */
/* eslint-disable prettier/prettier */

// TODO: Have to remove this code, not in use

import axios from 'axios';
import { API_BASE_URL } from 'react-native-dotenv';
import { ILearn } from 'src/types/interfaces/Learn';

import Utils from 'src/utils/Utils';

async function getStoredData() {
    const values: any = await Utils.getLocalStorageData(['@access_token']);
    if (values[0][1] != null) {
        return JSON.parse(values[0][1])?.token ? JSON.parse(values[0][1])?.token : null;
    }
}
const client = axios.create({
    baseURL: 'https://lilli-api-dev.agencypartnerinteractive.com',
});

const API_URL = 'http://uat.lillyhealth.agencypartnerinteractive.com/';

client.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.message === 'Network Error') {
            return Promise.reject(error);
        } else if (!error.response) {
            return Promise.reject(error.response);
        } else if (error.response.status === 401) {
            return Promise.reject(error.response);
        }
        return Promise.reject(error.response);
    }
);

client.interceptors.request.use(
    async (configuration) => {
        const originalConfig = configuration;
        try {
            const token = await getStoredData();

            // Set auth header
            if (token) {
                originalConfig.headers.Authorization = `Bearer ${token}`;
            }
            return originalConfig;
        } catch (_) {
            return originalConfig;
        }
    },
    (err) => Promise.reject(err)
);

// enum API_ENDPOINTS {
//     LOGIN = '/api/auth/login',
//     SIGNUP = '/api/auth/register',
//     SOCIAL_SIGNUP = '/api/auth/social/register',
//     SOCIAL_LOGIN = '/api/auth/social/login',
//     UPLOAD_MEDIA_FILE = '/api/media',
//     GET_MEDIA_FILE = '/api/media/',
//     FORGOT_PASSWORD = '/api/auth/forgot-password'
// };

// export const signup = (data: any) => client.post(API_ENDPOINTS.SIGNUP, data);
// export const login = (data: any) => client.post(API_ENDPOINTS.LOGIN, data);
// export const socialSignup = (data: any) => client.post(API_ENDPOINTS.SOCIAL_SIGNUP, data);
// export const socialLogin = (data: any) => client.post(API_ENDPOINTS.SOCIAL_LOGIN, data);
// export const uploadFile = (data: any) => client.post(API_ENDPOINTS.UPLOAD_MEDIA_FILE, data, {
//     headers: { 'Content-Type': 'multipart/form-data' },
// });
// export const forgotPassword = (data: any) => client.post(API_ENDPOINTS.FORGOT_PASSWORD, data);
// export const getFile = (id: any) => client.get(API_ENDPOINTS.UPLOAD_MEDIA_FILE + id);
// export const getLearnList = () => axios.get<ILearn[]>(`${API_URL}wp-json/rest-api/v1/posts`);