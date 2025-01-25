import {useMutation } from '@apollo/client'
import React, { useContext, useState } from 'react'
import {addMovie, allMoviesQuery} from '../queries/queries';
import { MoviesContext } from '../App';


const AddMovie = () => {
  // Form state for capturing input values
  const { setMovies } = useContext(MoviesContext);

  const [addMovieMutation, {loading}] = useMutation(addMovie, {
    onCompleted: (data) => {
      setMovies(prev => [...prev, data.addMovie])
    }
  })

  const submitMovie = async (e) => {
    e.preventDefault()
    const name = e.target.name.value;
    const genre = e.target.genre.value;
    const year = e.target.year.value;
    const url = e.target.url.value;

    const urlData = url ? url : "https://shorturl.at/EaobT"

    try {
      const response = await addMovieMutation({
        variables:{
          name, genre, year, url: urlData
        },
        refetchQueries: [{query: allMoviesQuery}]
      })
    } catch (error) {
      throw new Error("Error adding movie")
    }
  }
  
  return (
    <div className="addMovie" id="form">
      <form onSubmit={submitMovie}>
        <label>Name</label>
        <input name='name' type="text" required placeholder='Add name...'/>
        <label>Genre</label>
        <input name='genre' type="text" required placeholder='Add genre...'/>
        <label>Year</label>
        <input name='year' type="text" placeholder='Add year...'/>
        <label>Add image URL</label>
        <input name='url' type="text" placeholder='Add url...'/>
        <button type="submit" disabled={loading}>
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  )
}

export default AddMovie