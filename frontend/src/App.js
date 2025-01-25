import React, { createContext, useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Movies from './containers/Movies'
import AddMovie from './components/AddMovie'

export const MoviesContext = createContext()

const App = () => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)

  return (
    <MoviesContext.Provider value={{movies, setMovies, loading, setLoading}}>
      <Header/>
      <Movies/>
      <AddMovie/>
      <Footer/>
    </MoviesContext.Provider>
  )
}

export default App