import { apiSlice } from "./apiSlice";
import { USERS_URL } from "../backendConstants";

// here we are using the apiSlice since there are endpoints which are dealing with asynchronous request.
export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/login`,
                method: 'POST',
                body: data,
            }),
        }),
        register: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}`,
                method: 'POST',
                body: data,
            }),
        }),
        logout: builder.mutation({
            query: () => ({
                url: `${USERS_URL}/logout`,
                method:'POST',
            }),
        })
    }),
});


export const { useLoginMutation, useRegisterMutation, useLogoutMutation } = usersApiSlice;
// There is a certain convention used for exporting the query i.e. prefix the query with "use" and then the name of the query or mutation followed by "Query" or "mutation".
