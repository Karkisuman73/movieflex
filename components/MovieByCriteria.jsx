"use client"
import React from 'react'
import CardGrid from './CardGrid'
import useFetch from '@/utiles/useFetch'
import { useParams } from 'next/navigation'

const MovieByCriteria = () => {
  

    const {data, loading,error}= useFetch("/trending/movie/week")
    const {data:tvData, loading:tvLoading,error:tvError}= useFetch("/trending/tv/week")
    const {data:toprated, }= useFetch("/movie/top_rated")
    // const { data:recomended } = useFetch("/movie/recommendations");


  return (
    <div>
      <CardGrid title={"Movies"} data={data} endpoint={"movie"}/>
      <CardGrid title={"TV Shows"} data={tvData} endpoint={"tv"}/>
      <CardGrid title={"Top Rated"} data={toprated} endpoint={"movie"}/>
      {/* <CardGrid title={"Recomended"} data={recomended}/> */}
    </div>
  )
}

export default MovieByCriteria
