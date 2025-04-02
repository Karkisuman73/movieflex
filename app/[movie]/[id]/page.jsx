import React from 'react'
import DetailsPage from './DetailsPage'

const MovieId = async({params}) => {
const{movie,id}=await params
  return (
    <DetailsPage movie={movie} Id={id}/>
  )
}

export default MovieId
