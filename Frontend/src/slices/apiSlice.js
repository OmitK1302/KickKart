// This file contains the logic for creating an API object using the createAPI function from redux toolkit query.
// createAPI is a function that creates an API object.
// fetchBaseQuery is a function that creates a base query object.
// A base query object is an object that contains the base query logic for the API.

import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'; // Import createAPI and fetchBaseQuery from redux toolkit query.
import {BASE_URL} from '../backendConstants'; // Import the BASE_URL constant from the constants file.


const baseQuery = fetchBaseQuery({baseUrl: BASE_URL}); // Create a base query object using the fetchBaseQuery function and pass the BASE_URL as a prop.
 
export const apiSlice = createApi({
    baseQuery: baseQuery, // Pass the base query object as a prop.
    tagTypes: ['Product', 'Order', 'User'], //This is an array of tag types that are used to define the types of data that the API can fetch.
    endpoints: (builder) => ({}), // This is an object that contains the endpoints for the API. An endpoint is a function that fetches data from the server.

    // We can inject the endpoints here but we will do that in seperate files to keep the code clean.
});


// This file is the parent slice file for the other slices that we will create such as the productSlice, orderSlice, and userSlice.