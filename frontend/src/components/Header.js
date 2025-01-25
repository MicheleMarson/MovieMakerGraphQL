import { useLazyQuery, useQuery } from '@apollo/client'
import React, { useContext, useState } from 'react'
import { HashLink as Link } from 'react-router-hash-link' 
import { allMoviesQuery, movieByName } from '../queries/queries'
import { MoviesContext } from '../App'

const Header = () => {
  const [searchMovie, setSearchMovie] = useState("")
  const {movies, setMovies, setLoading} = useContext(MoviesContext)
  
  const [fetchMovie] = useLazyQuery(movieByName, {
    onCompleted: (data) => {
      setMovies(data.movieByName)
      setLoading(false)
    },
    skip: !searchMovie
  })

  const handleSearch = (e) => {
    e.preventDefault()
    if(searchMovie.length !== 0){
      setLoading(true)
      fetchMovie({variables: {name: searchMovie}})
    }
    console.log(movies);
  }

  return (
    <div className='topnav'>
      <a className='logo' href='/'>Movie Maker</a>
      <div className='search-container'>
        <form onSubmit={(e) => handleSearch(e)}>
          <Link smooth to='#form'>Add movies</Link>
          <input value={searchMovie} onChange={(e) => setSearchMovie(e.target.value)} type='text' placeholder='Search...'/>
          <button type='submit'>
            <i className='fa fa-search'></i>
          </button>
        </form> 
      </div>
    </div>
  )
}

export default Header