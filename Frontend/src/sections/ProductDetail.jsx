import React from 'react'
import star from '../assets/icons/star.svg'

const ProductDetail = ({product}) => {
    const reviews = product.reviews;
  return (
    <section className='container mx-auto px-4 py-16 sm:py-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16'>
            <div className='w-full '>
                <img src={product.images[1]} alt='product' className='w-full rounded-md p-3 outline outline-gray-200 ' />
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
                            <div className='flex flex-col gap-2.5 w-full mb-4' key={review.name}>
                                <h2 className='font-montserrat font-semibold text-black'>{review.name}</h2>

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
