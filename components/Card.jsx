import { image_url } from '@/public/images'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Card = ({data}) => {
    console.log(data)
  return (
   <Link href={`${data?.media_type==="movie"?"movie":"tv"}/${data?.id}`}>
     <div className='w-80 h-auto  '>
          <div className='w-50 overflow-hidden aspect-[2/3]'>
            <Image className="object-cover w-full" src={`${image_url}${data.poster_path}`} alt='poster' width={500} height={500}/>
          </div>
          <p>{data?.title || data?.name}</p>
  
          <div className='flex justify-between'>
              <div>2023</div>
              <div>❤</div>
          </div>
     </div>
   </Link>
  )
}

export default Card
