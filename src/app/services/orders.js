import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const ordersApi = createApi({
    reducerPath:"ordersApi",
    baseQuery: fetchBaseQuery({baseUrl:"https://dappweb-dbd08-default-rtdb.firebaseio.com/"}),
    endpoints:(builder)=>({
        postOrder:builder.mutation({
            query:({localId, order})=>({
                url:`/orders/${localId}.json`,
                method: "POST",
                body:order
            })
        })
        
    })
})


export const { } = ordersApi