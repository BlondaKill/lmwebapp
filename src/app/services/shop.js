import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const shopApi = createApi({
    reducerPath:"shopApi",
    baseQuery: fetchBaseQuery({baseUrl:"https://dappweb-dbd08-default-rtdb.firebaseio.com/"}),
    endpoints:(builder)=>({
        getProducts: builder.query({
            query:() => "/products.json"
        }),
        getCategories:builder.query({
            query: () => "/categories.json"
        })

    })
})


export const {useGetProductsQuery, useGetCategoriesQuery} = shopApi