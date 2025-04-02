"use client"
import { image_url } from '@/public/images'
import useFetch from '@/utiles/useFetch'
import Image from 'next/image'
import React from 'react'

const DetailsPage = ({movie,Id}) => {
    const{data}=useFetch(`/${movie}/${Id}`)
    console.log(data)
  return (
   <div className=''>
     <div className='w-screen h-screen fixed opacity-30 -z-50'>
    < Image src={`${image_url}${data?.backdrop_path}`} className='w-full h-full ' alt='background' width={500} height={500}/>
    </div>
   <div className='flex justify-center items-center gap-4 '>
        <div className='w-80 h-auto '>
            <div className='w-80 h-100 border-2 rounded-2xl overflow-hidden'>
                < Image src={`${image_url}${data?.poster_path}`} className='w-80 h-100' alt='photo' width={500} height={500}/>
            </div>
           <div className='text-3xl font-bold flex justify-center'>
           {data?.original_title}
           </div>
    
        </div>
       <div>
            <div className='border-1 rounded-2xl p-3 overflow-hidden w-[40vw]'>
                <p className='text-4xl font-bold'>Overview</p>
                {data?.overview}
            </div>
            <div >
           <p>Status: {data?.status} Released Date: {data?.release_date} Runtime: {data?.runtime}</p>
        </div>
       </div>
        

   </div>
    {JSON.stringify(data)}
    <div>
        
    </div>
    
   </div>
    
  )
}

export default DetailsPage
