import React from 'react'
import star from '../assets/icons/star.svg'

const ProductDetail = ({product}) => {
    const reviews = product.reviews;
  return (
    <section className='container mx-auto px-4 py-16 sm:py-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            <div className='w-full outline outline-gray-200 rounded-md'>
                <img src={product.images[1]} alt='product' className='w-full rounded-md p-3' />
            </div>
            <div>
                <h2 className='text-2xl font-mono font-semibold text-[#bdbfbf]'>{product.brand}</h2>
                <h2 className='text-2xl font-semibold font-montserrat'>{product.name}</h2>
                <h3 className='text-xl font-semibold text-gray-500'><span className='text-coral-red'>Category: </span> {product.category}</h3>
                <p className='mt-4 font-semibold leading-normal font-montserrat text-coral-red text-2xl'>{product.price}</p>
                <p className='text-lg font-medium mt-4'>{product.description}</p>

                <div className='flex flex-col lg:flex-row gap-2.5 mt-4'>
                    <button className='bg-gray-200 hover:bg-gray-300 hover:shadow-xl text-black font-semibold py-4 px-4 mt-4 w-full lg:w-1/4 rounded-md'>Add to Cart</button>
                    <button className='bg-coral-red hover:bg-[#ff402a] hover:shadow-xl text-white font-semibold py-4 px-4 mt-4 w-full lg:w-1/4 rounded-md'>Buy Now</button>
                </div>

                <div className="flex gap-2.5 mt-12">
                    <h2 className='text-2xl font-semibold font-montserrat'>Rating: </h2>
                    <img className="object-contain" src={star} alt="rating" width={24} height={24} />
                    <p className="font-montserrat text-xl leading-normal text-slate-gray">{product.rating}</p>
                </div>

                <div className='mt-8 bg-[#f5f6ff] p-4 rounded-md'>
                    <h2 className='text-2xl font-semibold font-montserrat'>Reviews: </h2>
                    <div className='flex flex-col gap-2.5 mt-4 pl-4'>

                        {reviews.map(review => (
                            <div className='flex flex-col gap-2.5 w-full mb-4'>
                                <h2 className='font-montserrat font-semibold text-black'>{review.user}</h2>

                                <p className='text-lg font-medium'>
                                    {review.comment}
                                </p>

                                <div className='flex gap-2'>
                                    <img className="object-contain" src={star} alt="rating" width={24} height={24} />
                                    <p className="font-montserrat text-xl leading-normal text-slate-gray">{review.rating}</p>
                                </div> 
                                
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProductDetail


// {
//     "_id": 1,
//     "name": "Nike Air Zoom Pegasus 39",
//     "description": "A lightweight, responsive running shoe designed for speed and comfort. Perfect for athletes and fitness enthusiasts who train on pavement.",
//     "price": "$ 129.99",
//     "currency": "USD",
//     "category": "Running",
//     "brand": "Nike",
//     "sizes": ["6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5"],
//     "colors": ["Black/Volt", "Blue Lagoon/Photon Dust", "Photon Dust/Black/Volt"],
//     "stock": 100,
//     "rating": 4.8,
//     "reviews": [
//       {
//         "user": "RunningMan123",
//         "rating": 5,
//         "comment": "These shoes are amazing! They're so light and comfortable, and they make me feel like I can run forever."
//       },
//       {
//         "user": "FitnessJane",
//         "rating": 4.5,
//         "comment": "Great shoes for running, but the sizing seems to run a bit small."
//       }
//     ],
//     "images": [
//       "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8bb6250a-af23-4b73-bf8c-ded532982e12/NIKE+AIR+ZOOM+PEGASUS+39+4E.png",
//       "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f6e3c5bc-0fa7-4537-928e-f4d17d94c926/NIKE+AIR+ZOOM+PEGASUS+39+4E.png",
//       "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7053c29c-2ec3-415c-80fb-f37954f13a4d/NIKE+AIR+ZOOM+PEGASUS+39+4E.png"
//     ]
//   },