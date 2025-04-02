import React from 'react'
import MovieId from './[id]/page'

const MediaType = async({params}) => {
 const {movie}=await params
    return (
   <MovieId movie={movie}/>
    )
}

export default MediaType
