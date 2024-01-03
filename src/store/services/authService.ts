/* eslint-disable prettier/prettier */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IForgetPassword, ILogin, IRegister, ISocialLogin, ISocialRegister } from 'src/types/interfaces/Auth';

export const AUTH_API_REDUCER_KEY = 'authApi';

export const authApi = createApi({
    reducerPath: AUTH_API_REDUCER_KEY,
    baseQuery: fetchBaseQuery({
        baseUrl: `https://lilli-api-dev.agencypartnerinteractive.com/api/`,
    }),
    endpoints: (builder) => ({
        socialRegister: builder.mutation<any, { data: ISocialRegister }>({
            query: (data) => ({
                url: `auth/social/register`,
                method: 'POST',
                body: data 
            }),
        }),
        socialLogin: builder.mutation<any, { data: ISocialLogin }>({
            query: (data) => ({
                url: `auth/social/login`,
                method: 'POST',
                body: data 
            }),
        }),
        register: builder.mutation<any, IRegister>({
            query: (data) => ({
                url: `auth/register`,
                method: 'POST',
                body: data 
            }),
        }),
        login: builder.mutation<any, ILogin>({
            query: (data) => ({
                url: `auth/login`,
                method: 'POST',
                body: data
            }),
        }),
        forgotPassword: builder.mutation<any,  IForgetPassword>({
            query: (data) => ({
                url: `auth/forgot-password`,
                method: 'POST',
                body: data 
            }),
        }),
        uploadMedia: builder.mutation<any, any>({
            query: (data) => ({
                url: `media`,
                method: 'POST',
                body: data ,
                headers: { 'Content-Type': 'multipart/form-data' },
            }),
        }),
        getMedia: builder.query<any, void>({
            query: (id) => ({
                url: `media/${id}`,
                method: 'GET',
            }),
        }),
    }),
});
export const {
    useForgotPasswordMutation,
    useSocialRegisterMutation,
    useUploadMediaMutation,
    useSocialLoginMutation,
    useRegisterMutation,
    useLoginMutation,
    useGetMediaQuery
} = authApi;
