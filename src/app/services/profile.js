import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const profileApi = createApi({
    reducerPath:"profileApi",
    baseQuery: fetchBaseQuery({baseUrl:"https://dappweb-dbd08-default-rtdb.firebaseio.com/"}),
    tagTypes:["userImage"],
    tagTypes:["userAddress"],
    endpoints:(builder)=>({
        putImage: builder.mutation({
            query:({image, localId}) => ({
                url: `/profile/${localId}.json`,
                method:"PUT",
                body:{image}
            }),
            invalidatesTags:["userImage"],
            invalidatesTags:["userAddress"]
        }),
        getImage: builder.query({
            query:(localId) => `/profile/${localId}.json`,
            providesTags:["userImage"],
            providesTags:["userAddress"]
        }),
        putUserLocation:builder.mutation({
            query:({localId, locationFormatted}) => ({
                url: `/userLocation/${localId}.json`,
                method: "PUT",
                body:locationFormatted
            })
        }),
        getUserLocation:builder.query({
            query:(localId) => `/userLocation/${localId}.json`
        })
    })
})


export const { usePutImageMutation, 
                useGetImageQuery, 
                usePutUserLocationMutation,
                useGetUserLocationQuery
            } = profileApi