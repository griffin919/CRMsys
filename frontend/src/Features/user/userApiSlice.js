import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({ baseUrl: "" });
const USER_URL = "/api/user";
const OFFENDER_URL = "/api/record";

const userApiSlice = createApi({
  baseQuery,
  tagTypes: "User",
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${USER_URL}/login`,
        method: "POST",
        body: data,
      }),
    }),
    logout: builder.mutation({
      query: (data) => ({
        url: `${USER_URL}/logout`,
        method: "POST",
        body: data,
      }),
    }),
    addRecord: builder.mutation({
      query: (data) => {
        const formData = new FormData();
        console.log("Data from userApiSlice", data);

        // Helper function to handle appending form fields
        const appendField = (key, value) => {
          // If the value is an object, stringify it and append as a JSON string
          if (typeof value === "object" && value !== null) {
            formData.append(key, JSON.stringify(value));
          } else {
            // For non-object values, append them directly
            formData.append(key, value);
          }
        };

        // Append form fields
        for (const key in data) {
          if (data.hasOwnProperty(key) && key !== "photo") {
            appendField(key, data[key]);
          }
        }

        // Append file data
        if (data?.photo) {
          formData.append("photo", data.photo);
        }

        return {
          url: `${OFFENDER_URL}/add`,
          method: "POST",
          body: formData,
        };
      },
    }),
    getRecords: builder.query({
      query: () => ({
        url: `${OFFENDER_URL}`,
        method: "GET",
      }),
    }),
    updateRecord: builder.mutation({
      query: ({ id, data }) => {
        const formData = new FormData();

        console.log("data from userApiSlice", data, "id", id);

        // Helper function to handle appending form fields
        const appendField = (key, value) => {
          // If the value is an object, stringify it and append as a JSON string
          if (typeof value === "object" && value !== null) {
            formData.append(key, JSON.stringify(value));
          } else {
            // For non-object values, append them directly
            formData.append(key, value);
          }
        };

        // Append form fields
        for (const key in data) {
          if (data.hasOwnProperty(key) && key !== "photo") {
            appendField(key, data[key]);
          }
        }

        // Append file data
        if (data.photo) {
          formData.append("photo", data.photo);
        }

        return {
          url: `${OFFENDER_URL}/${id}`,
          method: "PUT",
          body: formData,
        };
      },
    }),
    deleteRecord: builder.mutation({
      query: (recordID) => {
        console.log(recordID);
        return {
          url: `${OFFENDER_URL}/${recordID}`,
          method: "DELETE",
        };
      },
    }),
  }),
});

export const {
  useLoginMutation,
  useUpdateRecordMutation,
  useDeleteRecordMutation,
  useGetRecordsQuery,
  useLogoutMutation,
  useAddRecordMutation,
} = userApiSlice;

export default userApiSlice;
