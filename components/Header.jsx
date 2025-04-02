import { images } from '@/public/images'
import Image from 'next/image'
import React from 'react'
import Search from './Search'

const Header = () => {
  return (
    <div className='relative'>
    <div className='image-div '>
      <Image className='w-full h-full opacity-60' src={images.bg} alt='Bg' width={500} height={500}/>
    <div className='absolute top-[50%] left-[50%] translate-x-[-50%]'>
    <Search/>
    </div>
    </div>

    </div>
  )
}

export default Header
