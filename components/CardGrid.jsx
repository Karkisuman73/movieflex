"use client";
import React, { useEffect, useState } from 'react'
import Card from './Card';
import useFetch from '@/utiles/useFetch';

const CardGrid = ({title, data}) => {
  return (
    <div >
        <p>{title}</p>
       <div className='flex gap-4 overflow-scroll noscroll' >
            {
                data?.results?.map((result,i)=>(
                <Card key={i} data={result}/>
        ))
            }
       </div>
    </div>
  )
}

export default CardGrid
