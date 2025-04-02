import React from 'react'
import CardGrid from './CardGrid'
import useFetch from '@/utiles/useFetch'

const MovieByCriteria = () => {

    const {data, loading,error}= useFetch("/trending/movie/week")
    const {data:tvData, loading:tvLoading,error:tvError}= useFetch("/trending/tv/week")
    const {data:toprated, }= useFetch("/movie/top_rated")

  return (
    <div>
      <CardGrid title={"Movies"} data={data}/>
      <CardGrid title={"TV Shows"} data={tvData}/>
      <CardGrid title={"Top Rated"} data={toprated}/>
    </div>
  )
}

export default MovieByCriteria
