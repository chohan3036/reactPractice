import axios from 'axios'
import { useState, useEffect } from 'react'

// ResponseValue는 임의로 지은이름
export interface MoivesResponse {
  Search: Movie[]
  totalResults: string
  Response: string
}

export interface Movie {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

export default function App() {
  const [movies, setMovies] = useState<Movie[]>([])

  // useEffect(실행할함수, 의존성배열)
  useEffect(() => {
    async function fetchMovies() {
      const { data } = await axios.get(
        'https://omdbapi.com?apikey=7035c60c&s=spider'
      )
      // const movies = data.Search
      setMovies(data.Search)
    }
    fetchMovies()
  }, [])

  return (
    <>
      <ul>
        {movies.map(movie => {
          return (
            <li key={movie.imdbID}>
              <span>{movie.Title}</span>
              <img
                src={movie.Poster}
                alt={movie.Title}
                width={100}></img>
            </li>
          )
        })}
      </ul>
    </>
  )
}
