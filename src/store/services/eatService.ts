/* eslint-disable no-param-reassign */
/* eslint-disable prettier/prettier */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import IFoodMenu from 'src/types/interfaces/Eat';
import { baseQueryWithHandling } from './BaseQuery';

export const EAT_API_REDUCER_KEY = 'eatApi';

export const eatApi = createApi({
    reducerPath: EAT_API_REDUCER_KEY,
    baseQuery: baseQueryWithHandling,
    endpoints: (builder) => ({
        foodMenu: builder.query<{ data: IFoodMenu[] }, any | void>({
            query: () => ({
                url: `app-menus`,
                method: 'GET',
            }),
        }),
        foodCategory: builder.query<{ data: IFoodMenu }, any | void>({
            query: () => ({
                url: `food/app-menu/categories`,
                method: 'GET',
            }),
            transformResponse: (response: any) => {
                const dd = response.data as IFoodMenu;
                dd.categories?.forEach((item) => {
                    item.selected = false;
                    item.subCategories.forEach((child) => { child.selected = false; child.foods.forEach(food => { food.selected = false; food.quantity = 1 }) }
                    )
                })
                return { data: dd };
            }

        }),
    }),
});
export const {
    useFoodMenuQuery,
    useFoodCategoryQuery
} = eatApi;
