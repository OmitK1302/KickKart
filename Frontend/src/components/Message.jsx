import React from 'react'

const Message = ({value}) => {
  return (
    <div className='w-full py-8 px-4 bg-red-200 border-red-600 border-2 rounded-md'>
        <p className='text-red-600 font-mono'>{value}</p>
    </div>
  )
}

export default Message