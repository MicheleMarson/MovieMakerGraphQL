import React from 'react'

const Movie = ({name, genre, year, url}) => {
  return (
    <div className='card'>
          <h2>{name}({year?year:"N/A"})</h2>
        <div className='data'>
          <p>{genre}</p>
        
        <img src={url} alt={name} width={200} height={200}/>
        </div>
    </div>
  )
}

export default Movie