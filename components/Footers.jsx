import Link from 'next/link'
import React from 'react'
import{FaFacebook,FaInstagram, FaXTwitter } from "react-icons/fa6"

const Footers = () => {
  return (
    <div className=' p-10 mt-5'>
        <div className='flex align-middle justify-center gap-5 m-5'>
            <div><button className='cursor-pointer'>Terms of Use</button></div>
            <div><button className='cursor-pointer'>Privacy-Policy</button></div>
            <div><button className='cursor-pointer'>About</button></div>
            <div><button className='cursor-pointer'>FAQ</button></div>
        </div>
    <div className='flex items-center justify-center'>
    MovieFlex is your ultimate destination for discovering the latest movies and TV shows. Browse, search, and enjoy content across genres, all in one place.
    </div>
    <div className='flex justify-center gap-5 p-2'>
     <Link target='_blank' href={"https://www.facebook.com"}><div> <FaFacebook size={30}/></div></Link>
     <Link target='_blank' href={"https://www.instagram.com"}><div> <FaInstagram size={30}/></div></Link>
      <Link target='_blank' href={"https://x.com"}><div><FaXTwitter size={30}/></div></Link>
    </div>
    </div>
  )
}

export default Footers
