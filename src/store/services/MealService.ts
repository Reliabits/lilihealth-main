/* eslint-disable no-param-reassign */
/* eslint-disable prettier/prettier */
import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithHandling } from './BaseQuery';

export const MEAL_API_REDUCER_KEY = 'mealApi';

export const mealApi = createApi({
    reducerPath: MEAL_API_REDUCER_KEY,
    baseQuery: baseQueryWithHandling,
    endpoints: (builder) => ({
        saveMeal: builder.mutation<any, any>({
            query: (data) => ({
                url: `saved-meals`,
                method: 'POST',
                body: data
            }),
        }),
    }),
});
export const {
    useSaveMealMutation
} = mealApi;
