import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const baseQuery = fetchBaseQuery({baseUrl:''});
const USER_URL = 'api/user';

export const userApiSlice = createApi({
    baseQuery,
    tagTypes: 'User',
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: `${USER_URL}/login`,
                method: 'POST',
                body: data,
            })
        })
    })
})

export const {useLoginMutation}= userApiSlice;
