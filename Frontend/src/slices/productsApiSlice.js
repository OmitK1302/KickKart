import { apiSlice } from "./apiSlice";
import { PRODUCTS_URL } from "../backendConstants";

// here we are using the apiSlice since there are endpoints which are dealing with asynchronous request.
export const productsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => ({
                url: PRODUCTS_URL,
            }),
            keepUnusedDataFor: 5,
        }),
        getProductsDetails: builder.query({
            query: (productId) => ({
                url: `${PRODUCTS_URL}/${productId}`,
            }),
            keepUnusedDataFor: 5,
        })
    }),
});


export const {useGetProductsQuery, useGetProductsDetailsQuery} = productsApiSlice;
// There is a certain convention used for exporting the query i.e. prefix the query with "use" and then the name of the query followed by "Query".
