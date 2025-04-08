"use client"
import Card from '@/components/Card';
import useFetch from '@/utiles/useFetch'
import React, { useState } from 'react'
import { useSearchParams } from 'next/navigation';

const page = () => {
    const searchParams = useSearchParams();
    const query = searchParams.get("query");
    
    const{data}=useFetch(query?`/search/multi?query=${query}`:null)
   
  return (
    <div className='grid grid-cols-2 gap-10 lg:grid lg:grid-cols-6 sm:grid sm:grid-cols-3'>
     {
        data?.results?.map((result,i)=>(
            < Card key={i} data={result}/>
        ))
     }
    </div>
  )
}

export default page
