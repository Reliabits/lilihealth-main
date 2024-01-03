/* eslint-disable prettier/prettier */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ILearn } from 'src/types/interfaces/Learn';

export const LEARN_API_REDUCER_KEY = 'learnApi';

export const learnApi = createApi({
    reducerPath: LEARN_API_REDUCER_KEY,
    baseQuery: fetchBaseQuery({
        baseUrl: `https://uat.lillyhealth.agencypartnerinteractive.com/`,
    }),
    endpoints: (builder) => ({
        learnList: builder.query<ILearn[], void>({
            query: () => ({
                url: `wp-json/rest-api/v1/posts`,
                method: 'GET',
            }),
        }),
    }),
});
export const {
    useLearnListQuery,
} = learnApi;
