export const addDecimal = (num) => {
    return (Math.round(num * 100) / 100).toString();
};

export const updateCart = (state) => {
    // calculate items's price
    state.itemPrice = addDecimal(state.cartItems.reduce((acc, item) => acc + Number(item.price) * Number(item.qty), 0));

    // calculate shipping price (if order is over $100, shipping is free else 10$ for shipping)
    state.shippingPrice =  (addDecimal((Number(state.itemPrice) > 100) ? 0 : 10));

    // calculate tax price (18% of the item price)
    state.taxPrice = addDecimal(Number((0.18 * Number(state.itemPrice)).toFixed(2))); //toFixed(2) is used to round off the number to 2 decimal places.

    // calculate total price
    state.totalPrice = (Number(state.itemPrice) + Number(state.shippingPrice) + Number(state.taxPrice)).toFixed(2); // We are using Number to convert the string to a number such that everything is a number and formatted nicely.

    // Now we save the cart to the local storage.
    localStorage.setItem('cart', JSON.stringify(state));
};