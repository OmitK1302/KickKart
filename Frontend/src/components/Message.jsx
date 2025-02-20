import React from 'react'

const Message = ({color, value}) => { 
  return (
    <div className='px-4 py-16'>
      {color === 'blue' ? (
        <div className='w-full py-8 px-4 bg-blue-100 border-blue-600 border-2 rounded-md'>
          <p className='text-[#1f3181] font-mono'>{value}</p>
        </div>
      ) : (
        <div className='w-full py-8 px-4 bg-red-200 border-red-600 border-2 rounded-md'>
          <p className='text-red-600 font-mono'>{value}</p>
        </div>
      )}
      
    </div>
  )
}

export default Message