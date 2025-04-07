
import React from 'react'
import Card from './Card';


const CardGrid = ({title, data,endpoint}) => {
  return (
    <div >
        <p>{title}</p>
       <div className='flex gap-4 overflow-scroll noscroll' >
            {
                data?.results?.map((result,i)=>(
                <Card key={i} data={result}endpoint={endpoint}/>
        ))
            }
       </div>
    </div>
  )
}

export default CardGrid
