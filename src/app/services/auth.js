import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const authApi = createApi({
    reducerPath: "auth",
    baseQuery: fetchBaseQuery({baseUrl:"https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[AIzaSyCWP2teZtjU26YOvhF_Y-tRYRMtZLhC8cs]"})
})