"use client"
import React from 'react'

const Navbar = ({setActive}) => {
  return (
    <div className='flex justify-between p-4'>
     <div className='text-2xl font-bold'>
      <button > MovieFlex</button>
     </div>
     <div className='flex gap-x-4'>
        <button onClick={()=>{setActive("Movies")}}>Movies</button>
        <button onClick={()=>{setActive("Tv shows")}}>TV shows</button>
        <div> <label htmlFor="search">🔍</label></div>
     </div>
    </div>
  )
}

export default Navbar
