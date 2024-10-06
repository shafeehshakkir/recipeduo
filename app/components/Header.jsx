import React from 'react'
import Image from 'next/image';


function Header() {
  return (
    <div className='flex bg-red-700 p-10'>
      <h1 className='text-3xl font-semibold text-white'>Recipeduo🍗</h1>
      <h2 className='text-3xl font-semibold text-yellow-500'>Get Cooking!</h2>
    </div>
  )
}

export default Header