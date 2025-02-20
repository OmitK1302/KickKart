import { createSlice } from '@reduxjs/toolkit'; // Import createSlice from redux toolkit to create a slice.
import { updateCart } from '../utils/cartUtils';

const initialState = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : {cartItems: []}; // The initial state of the cart slice. If there is a cart in the local storage, then use that as the initial state. Otherwise, use an empty object.



// A slice is a collection of reducer functions and actions for a specific feature in the application.
const cartSlice = createSlice({
    name: 'cart', // The name of the slice.
    initialState, // The initial state of the slice. In this case, it is an empty object.
    reducers: {
        // any reducer function will be defined here. It will take the current state and an action as arguments and return a new state.
        addToCart: (state, action) => {
            // Add to cart functionality.
            const item = action.payload; // Get the item from the action payload. The payload is the data that is passed when the action is dispatched or called.
            console.log(item);
            
            const existItem = state.cartItems.find((x) => x._id === item._id);

            if(existItem){
                state.cartItems = state.cartItems.map((x) => x._id === existItem._id ? item : x);
            }
            else{
                state.cartItems = [...state.cartItems, item];
            }

            // // calculate items's price
            // state.itemPrice = addDecimal(state.cartItems.reduce((acc, item) => acc + Number(item.price) * Number(item.qty), 0));

            // // calculate shipping price (if order is over $100, shipping is free else 10$ for shipping)
            // state.shippingPrice = addDecimal(Number(state.itemPrice) > 100 ? 0 : 10);

            // // calculate tax price (18% of the item price)
            // state.taxPrice = addDecimal(Number((0.18 * Number(state.itemPrice)).toFixed(2))); //toFixed(2) is used to round off the number to 2 decimal places.

            // // calculate total price
            // state.totalPrice = (Number(state.itemPrice) + Number(state.shippingPrice) + Number(state.taxPrice)).toFixed(2); // We are using Number to convert the string to a number such that everything is a number and formatted nicely.
        
            // // Now we save the cart to the local storage.
            // localStorage.setItem('cart', JSON.stringify(state));
            
            return updateCart(state); // Call the updateCart function to update the cart state. All the above calculations are moved to utils/cartUtils.js file to keep the code clean.
        },

        removeFromCart: (state, action) => {
            const item = action.payload;
            state.cartItems = state.cartItems.filter((x) => x._id != item._id);
            return updateCart(state);
        },
    }, // The reducers contains the functionalities of the current slice. In this case it will contain functionalities like adding to cart, removing to cart etc.
});

export const {addToCart, removeFromCart} = cartSlice.actions; // Export the actions from the slice.
export default cartSlice.reducer; // Export the reducers from the slice.