"use client"
import Header from '@/components/Header'
import MovieByCriteria from '@/components/MovieByCriteria'
import Navbar from '@/components/Navbar'
import React, { useState } from 'react'

 function Home() { 
  const [active,setActive]= useState(null);


  return (
    <div>
       {/* <Navbar setActive={setActive}/> */}
      <Header/>
      <MovieByCriteria/>

    </div>
  )
}
export default Home