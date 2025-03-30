import {apiSlice} from './apiSlice';
import { ORDERS_URL } from '../backendConstants';


export const orderApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createOrder: builder.mutation({
            query: (order) => ({
                url: ORDERS_URL,
                method: 'POST',
                body: {...order},
            }),
        }),
    }),
});


export const {useCreateOrderMutation} = orderApiSlice;
// This will create a hook that we can use in our components to call the createOrder mutation.