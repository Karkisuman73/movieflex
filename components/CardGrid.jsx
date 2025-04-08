
import React from 'react'
import Card from './Card';
import Skeleton from './Skeleton';


const CardGrid = ({title, data,endpoint,loading,error}) => {
  return (
    <div >
        <p>{title}</p>
       <div className='flex gap-4 overflow-scroll noscroll' >
            {
              error?<p>Error</p>:loading?
              Array(8).fill().map((n,i)=>(
                <Skeleton className='w-50 aspect-[2/3]' key={i}/>
              ))
              :  data?.results?.map((result,i)=>(
                <Card key={i} index={i} data={result}endpoint={endpoint}/>
        ))
            }
       </div>
    </div>
  )
}

export default CardGrid
