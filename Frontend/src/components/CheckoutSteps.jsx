import React from 'react'
import { Link } from 'react-router-dom'

const CheckoutSteps = ({step1, step2, step3, step4}) => {
  return (
    <div className='w-full mt-20 sm:mt-9 flex justify-center gap-2 sm:gap-5 font-montserrat'>
        <div>
            {step1 ? (
                <Link to={'/login'}>
                    <button className='text-[#ff6452] font-bold'>Sign in</button>
                </Link>
            ) : (
                <button className='text-[#a6a7aa]' disabled>
                    sign in
                </button>
            )}
        </div>

        <div>
            <p className={`${step2 ? "text-[#ff6452]" : "text-[#a6a7aa]"}`}>{">>"}</p>
        </div>


        <div>
            {step2 ? (
                <Link to={'/shipping'}>
                    <button className='text-[#ff6452] font-bold'>Shipping</button>
                </Link>
            ) : (
                <button className='text-[#a6a7aa]' disabled>
                    Shipping
                </button>
            )}
        </div>

        <div>
            <p className={`${step3 ? "text-[#ff6452]" : "text-[#a6a7aa]"}`}>{">>"}</p>
        </div>


        <div>
            {step3 ? (
                <Link to={'/payment'}>
                    <button className='text-[#ff6452] font-bold'>Payment</button>
                </Link>
            ) : (
                <button className='text-[#a6a7aa]' disabled>
                    Payment
                </button>
            )}
        </div>

        <div>
            <p className={`${step4 ? "text-[#ff6452]" : "text-[#a6a7aa]"}`}>{">>"}</p>
        </div>


        <div>
            {step4 ? (
                <Link to={'/placeorder'}>
                     <button className='text-[#ff6452] font-bold'>Place Order</button>
                </Link>
            ) : (
                <button className='text-[#a6a7aa]' disabled>
                    Place Order
                </button>
            )}
        </div>
    </div>
    
    
  )
}

export default CheckoutSteps