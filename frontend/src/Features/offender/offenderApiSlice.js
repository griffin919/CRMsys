// import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

// const OFFENDER_URL = '/offender';
// const baseQuery = fetchBaseQuery({baseUrl:'/api'});

// const offenderRecordApiSlice = createApi({
//     baseQuery,
//     tagType: 'Offender',
//     endpoints: (builder) => ({
//         addRecord: builder.mutation({
//             query: (data) => ({
//                 url: `${OFFENDER_URL}/add`,
//                 method: 'POST',
//                 body: data,
//             })
//         }),
//     })
// })

// export const {useAddRecordMutation} = offenderRecordApiSlice;
// export default offenderRecordApiSlice;