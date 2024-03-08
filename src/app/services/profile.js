import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const profileApi = createApi({
    reducerPath:"profileApi",
    baseQuery: fetchBaseQuery({baseUrl:"https://dappweb-dbd08-default-rtdb.firebaseio.com/"}),
    endpoints:(builder)=>({
        postProfile: builder.mutation({
            query:(image) => ({
                url: "/profile.json",
                method:"PUT",
                body:image
            })
        })

    })
})


export const {  } = shopApi