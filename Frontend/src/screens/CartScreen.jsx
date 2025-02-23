import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'; // useDispatch is a hook that returns a reference to the dispatch function from the Redux store. a dispactch function is used to call an action. and useSelector is a hook that allows you to extract data from the Redux store state.
import Message from '../components/Message';
import Nav from '../components/Nav';
import { Footer } from '../sections';
import CartComponent from '../components/cartComponent';


const CartScreen = () => {
    const dispatch = useDispatch(); // useDispatch is a hook that returns a reference to the dispatch function from the Redux store. a dispactch function is used to call an action.
    const navigate = useNavigate(); // useNavigate is a hook that returns a navigate function that can be used to navigate to different routes in the application.
    
    
    const cart = useSelector((state) => state.cart); // useSelector is a hook that allows you to extract data from the Redux store state.
    const { cartItems } = cart; // Destructure the cartItems from the cart state.
    
    const totalItems = cartItems.reduce((acc, item) => acc + Number(item.qty), 0);
    console.log(cart);
    return (
        <>
            <Nav />

            <div className='sm:padding py-24 flex xl:flex-row flex-col gap-4 w-full'>
                <div className='py-16 sm:py-8 mt-4 border-2 shadow-inner rounded-md xl:w-1/2'>
                    <h1 className='px-4 text-2xl sm:text-4xl font-montserrat'>Shopping Cart: </h1>

                    {cartItems.length === 0 ? (
                        
                        <div className='padding'>
                            <Message color="blue" value="Cart is empty. Add items to cart" />
                    </div>
                    ) : (
                        <>
                            <section className="flex flex-col gap-4 px-16 py-8">
                                {cartItems.map((item) => {
                                    return (
                                        <div className='border-b-2 ' key={item.product}>
                                            <CartComponent item={item} />
                                        </div>
                                    );
                                })}
                            </section>
                        </>
                    )}
                </div>

                {cartItems.length > 0 && (
                    <div className='px-16 pt-4 py-16 sm:py-8 mt-4 border-2 shadow-xl xl:w-1/2'>
                        <h1 className='text-2xl sm:text-3xl font-bold'>Sub Total ({totalItems} items):</h1>
                        <div className='px-8 pt-2 pb-8 text-xl'>
                            <div className='flex justify-between'>
                                <p>Items Price: </p>
                                <p className='text-coral-red'>$ {cart.itemPrice}</p>
                            </div>
                            <div className='flex justify-between'>
                                <p>Shipping Price: </p>
                                <p className='text-coral-red'>$ {cart.shippingPrice}</p>
                            </div>
                            <div className='flex justify-between'>
                                <p>Tax Price: </p>
                                <p className='text-coral-red'>$ {cart.taxPrice}</p>
                            </div>
                            <div className='flex justify-between text-2xl font-bold sm:text-3xl'>
                                <p className=''>Items Price: </p>
                                <p className='text-coral-red'>$ {cart.totalPrice}</p>
                            </div>
                            
                            {/* <p>Total Items: {cartItems.reduce((acc, item) => acc + Number(item.qty), 0)}</p>
                            <p>Items Price: <span className='text-coral-red'>$ {cart.itemPrice}</span></p>
                            <p>Shipping Price (): <span className='text-coral-red'>$ {cart.shippingPrice}</span></p>
                            <p>Tax Price (18%): <span className='text-coral-red'> $ {cart.taxPrice}</span></p>
                            <p className='text-2xl font-bold sm:text-3xl'>Total Price: <span className='text-coral-red'> $ {cart.totalPrice}</span></p> */}
                        </div>
                    </div>
                )}
                
            </div>


            <section className='bg-black padding'>
                <Footer />
            </section>
        </>
    );
}

export default CartScreen