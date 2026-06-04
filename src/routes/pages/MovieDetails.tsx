import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router'
import Modal from '@/components/Modal'

export interface Movie {
  Title: string
  Year: string
  Rated: string
  Released: string
  Runtime: string
  Genre: string
  Director: string
  Writer: string
  Actors: string
  Plot: string
  Language: string
  Country: string
  Awards: string
  Poster: string
  Ratings: Rating[]
  Metascore: string
  imdbRating: string
  imdbVotes: string
  imdbID: string
  Type: string
  DVD: string
  BoxOffice: string
  Production: string
  Website: string
  Response: string
}
export interface Rating {
  Source: string
  Value: string
}

export default function MovieDetails() {
  const { movieId } = useParams()
  const [movie, setMovie] = useState<Movie | null>(null)
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchMoive() {
      const { data } = await axios.get(
        `https://omdbapi.com?apikey=7035c60c&i=${movieId}`
      )
      setMovie(data)
    }
    fetchMoive()
  }, [])

  return (
    <Modal onClose={() => navigate(-1)}>
      <button
        className="absolute top-5 right-5 flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-[50%] bg-gray-300"
        onClick={() => navigate(-1)}>
        닫기
      </button>
      {movie && (
        <>
          <h1>{movie.Title}</h1>
          <img
            src={`https://img.omdbapi.com?apikey=7035c60c&i=${movieId}&h=300`}
            alt={movie.Title}></img>
          <p>{movie.Actors}</p>
          <p>{movie.Plot}</p>
          <ul>
            {movie.Ratings.map(rating => {
              return (
                <li key={rating.Source}>
                  {rating.Source} : {rating.Value}
                </li>
              )
            })}
          </ul>
        </>
      )}
    </Modal>
  )
}
