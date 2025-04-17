import React from 'react'
import SearchPage from './SearchPage'

const SearchLandingPage = async(params) => {
  const search = await params
  const {query} = await search.searchParams
  console.log(query)
  return (
    <>
    {query && <SearchPage query={query}/>}</>
  )
}

export default SearchLandingPage
