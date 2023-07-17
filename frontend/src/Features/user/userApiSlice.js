import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const baseQuery = fetchBaseQuery({baseUrl:''});
const USER_URL = '/api/user';
const OFFENDER_URL = '/api/offender';

 const userApiSlice = createApi({
    baseQuery,
    tagTypes: 'User',
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: `${USER_URL}/login`,
                method: 'POST',
                body: data,
            })
        }),
        logout: builder.mutation({
            query: (data) => ({
                url: `${USER_URL}/logout`,
                method: 'POST',
                body: data,
            })
        }),
        addRecord: builder.mutation({
            query: (data) => ({
                url: `${OFFENDER_URL}/add`,
                method: 'POST',
                body: data,
            })
        })
    })
})

export const {useLoginMutation, useLogoutMutation,useAddRecordMutation}= userApiSlice;
export default userApiSlice ;