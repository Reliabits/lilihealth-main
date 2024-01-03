/* eslint-disable prettier/prettier */
import { BaseQueryFn, FetchArgs, FetchBaseQueryError, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';

export const BASE_URL = 'https://lilli-api-dev.agencypartnerinteractive.com/api/';
const baseQuery = fetchBaseQuery({
    baseUrl: `${BASE_URL}`,
    prepareHeaders: (headers, { getState }) => {
        const user = (getState() as RootState).auth;
        console.log('user', user.token);
        if (user) {
            headers.set('Authorization', `Bearer ${user.token}`)
            headers.set('Content-Type', `application/json`)
        }
        return headers
    },
})

export const baseQueryWithHandling: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError
> = async (args, api, extraOptions) => {
    const result = await baseQuery(args, api, extraOptions)
    if (result.error && result.error.status === 401) {
        // TODO unauthorize
    }
    return result
}