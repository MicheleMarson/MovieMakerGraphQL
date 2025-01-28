import React, { useContext } from 'react'
import Movie from '../components/Movie'
import { useQuery } from '@apollo/client';
import { allMoviesQuery } from '../queries/queries';
import { MoviesContext } from '../App';

const Movies = () => {
  const {movies, setMovies, setLoading, loading} = useContext(MoviesContext)
  const { error } = useQuery(allMoviesQuery, {
    onCompleted: (data) => {
      setMovies(data.movies)
      setLoading(false)
    }
  });

  console.log(movies);
  

  if (loading) return <p className='nan'>Loading...</p>;
  if (error) return <p className='nan'>Error: {error.message}</p>;
  if(movies.length === 0){
    setLoading(false)
    return <p className='nan'>No data...</p>;
  }

  return (
    <div className='container'>
      <div className="movieBox">
        {movies.map((movie) => (
          <Movie key={movie.name} name={movie.name} genre={movie.genre} year={movie.year} url={movie.url}/>
        ))}
      </div>
    </div>
  );
};

export default Movies