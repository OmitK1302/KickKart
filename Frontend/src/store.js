import {configureStore} from '@reduxjs/toolkit'; // Import configureStore from redux toolkit to create a store.
import { apiSlice } from './slices/apiSlice';


// A store is an object that holds the application's state tree.
// An application's state tree is a representation of the application's state.
// There should only be a single store in the application.
const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer, // Add the reducer that is used by the API slice to the store
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(apiSlice.middleware), // Add the middleware (i.e. the API slice middleware) to the store. 
    devTools: true, // Enable the Redux DevTools extension.
});

export default store;


// This file contains the logic for creating a store using the configureStore function from redux toolkit.