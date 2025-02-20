import React from 'react'
import { trash } from '../assets/images';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../slices/cartSlice';


const CartComponent = ({item}) => {
  const dispatch = useDispatch();

  const removeItemHandler = () => {
    dispatch(removeFromCart(item));
  }

  return (
    <div className='flex justify-between w-full p-4 mb-4 rounded-lg font-montserrat hover:shadow-inner insert-shadow-sm'>
      <div className='flex gap-4'>  
        <div className="1/8">
          <img className='w-40' src={item.images[0]} alt={`Image of ${item.name}`} />
        </div>
        
        <div className=''>
          <h3>{item.name}</h3>
          <p className=''>Rate: <span className='text-coral-red'>$ {item.price}</span></p>
          <p>Size: {item.size}</p>
          <p>Quantity: {item.qty}</p>
          <p>{item.countInStock}</p>
          <p>Price: <span className='text-coral-red'>$ {(Number(item.price) * Number(item.qty).toFixed(2))}</span></p>
        </div>
      </div>
      
      <div className='flex items-center'>
        <button onClick={() => removeItemHandler()} className=''>
          <img width={24} src={trash} alt="remove from cart button" />
        </button>
      </div>
    </div>
  )
}

export default CartComponent