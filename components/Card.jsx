import { image_url, images } from '@/public/images'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import{motion} from "framer-motion"

const Card = ({data, endpoint,index}) => {
 

  const variants={
    hidden:{opacity:0},
    visible:{opacity:1},
  }

  return (
   <Link href={data?.media_type==="person"&& "/"||`/${endpoint?endpoint:data?.media_type==="movie"?"movie":"tv"}/${data?.id}`}>
     <div className='w-50 h-auto  '>
          <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{
            delay:(index%21)*0.15,
            ease:"easeInOut",
            duration:0.5,
          }}
          
          className='w-50 overflow-hidden aspect-[2/3]'>
            <Image className="object-cover w-full" src={data?.poster_path?`${image_url}${data?.poster_path}`: images.noimage } alt='No image found' width={500} height={500}/>
          </motion.div>
         <div className="flex justify-center m-1.5">
            <p>{data?.title || data?.name}</p>
    
         </div>
          {/* <div className='flex justify-between'>
              <div>2023</div>
              <div>❤</div>
          </div> */}
     </div>
   </Link>
  )
}

export default Card
