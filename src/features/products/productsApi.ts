import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { ProductsType } from "../../types/productsType";


export const productsApi = createApi({
    reducerPath: 'products',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }),
    endpoints: (builder) => ({
        getProducts: builder.query<ProductsType[], void>({
            query: () => 'products'
        })
    })
})

export const { useGetProductsQuery } = productsApi;