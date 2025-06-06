"use client"
import React, { useEffect, useState } from 'react'
import Card from './Card'
import useFetch from '@/utiles/useFetch'
import { useInView } from 'react-intersection-observer'

const AllTvShows = () => {
    const[old,setOld]=useState([])
    const[page,setPage]=useState(1)
    const {data}=useFetch(`/discover/tv?page=${page}`)
    const{ref,inView} =useInView();
   
    useEffect(()=>{
        if (data && inView) {
            setOld((prev)=>[...prev, ...data?.results]);
            
            setPage((prev)=>prev + 1);
          } 
        }, [inView, data]);
        
  return (
    <div className='grid grid-cols-2 gap-10 lg:grid lg:grid-cols-6 sm:grid sm:grid-cols-3'>
     {old?.map((result,i)=>(
        <Card key={i} data={result}/>
        
     )) }
    <button ref={ref}>loadmore</button>
    </div>
  )
}

export default AllTvShows
