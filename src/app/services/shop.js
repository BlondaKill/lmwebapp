import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const shopApi = createApi({
    reducerPath:"shopApi",
    baseQuery: fetchBaseQuery({baseUrl:"https://dappweb-dbd08-default-rtdb.firebaseio.com/"}),
    endpoints:(builder)=>({
        getProductsByCategory: builder.query({
            query:(category) => `/products.json?orderBy= "category"&equalTo = "${category}"`
        }),
        getCategories:builder.query({
            query: () => "/categories.json"
        })

    })
})


export const { useGetCategoriesQuery } = shopApi