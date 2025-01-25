const Movie = require("../models/model")

const resolver = {
  movies: () => {
    //for finding all movies
    return Movie.find({})
  },

  movieByName: ({name}) => {
    // Find movies with names containing the substring
    return Movie.find({ name: { $regex: name, $options: "i" } });
  },

  addMovie: ({name, genre, year, url}) => {
    try {
      let movie = new Movie({ //creates object for mongodb 
        name, genre, year, url
      })
      movie.save() //save it on db
  
      return movie
    } catch (error) {
      console.error("Error adding movie:", error);  // Log error
      throw new Error("Error adding movie");  // Throw error with message
    }
  }
}

module.exports = resolver