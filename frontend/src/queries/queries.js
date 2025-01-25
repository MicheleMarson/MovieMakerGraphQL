import { gql } from "@apollo/client";

export const allMoviesQuery = gql`
  query {
    movies {
      name
      genre
      year
      url
    }
  }
`;

export const movieByName = gql`
  query MovieByName($name: String!){
    movieByName(name: $name) {
      name
      genre
      year
      url
    }
  }
`;

export const addMovie = gql`
  mutation AddMovie($name: String!, $genre: String!, $year: String!, $url: String!){
    addMovie(name: $name, genre: $genre, year: $year, url: $url){
      name
      genre
      year
      url
    }
  }
`