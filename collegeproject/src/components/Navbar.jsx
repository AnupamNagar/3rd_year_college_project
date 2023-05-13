import React from 'react'
import {Link } from 'react-router-dom'

function Navbar() {
    

  return (
    <div className='w-full absolute flex flex-col items-center justify-between p-4 z-[100] md:flex-row space-y-4 '>
       
        <Link to='/'><h1 className='text-red-600 text-4xl font-bold cursor-pointer '> MOVIEFLIX</h1></Link>
   
    </div>
  )
}

export default Navbar
