const {buildSchema} = require("graphql")

const movieSchema = buildSchema(`
  type Query{
    #for adding movies
    movies: [Movie],
    movieByName(name: String!): [Movie]
  }  

  type Mutation{
    addMovie(name: String!, genre: String!, year: String!, url: String!): Movie
  }

  type Movie{
    name: String,
    genre: String,
    year: String,
    url: String
  }
`)

module.exports = movieSchema