import axios from 'axios'
import { useState } from 'react'
import Button from '../../components/Button'
import { Link, Outlet } from 'react-router'

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
  const [searchText, setSearchText] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  async function fetchMovies() {
    if (searchText.trim().length < 3) return
    setIsLoading(true) // 영화 검색 시작하면 서버 가기 직전에 로딩 true
    // await new Promise(resolve => setTimeout(resolve, 2000)) // 서버에 가기 전에 뜸 주기(로딩 확인하려고)
    const { data } = await axios.get(
      `https://omdbapi.com?apikey=7035c60c&s=${searchText}`
    )
    // const movies = data.Search
    setMovies(data.Search)
    setIsLoading(false) // 갔다오면 false
  }

  return (
    <>
      <div>
        <input
          type="text"
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
          onKeyDown={e => {
            if (e.nativeEvent.isComposing) return // 한글일 때 1번만 요청
            if (e.key === 'Enter') fetchMovies()
          }}></input>
        <Button
          loading={isLoading}
          onClick={() => fetchMovies()}>
          검색
        </Button>
      </div>
      <ul className="flex flex-wrap gap-5">
        {movies.map(movie => {
          return (
            <li
              key={movie.imdbID}
              className="w-[100px] cursor-pointer">
              <Link to={`/movies/${movie.imdbID}`}>
                <span className="block truncate">{movie.Title}</span>
                <img
                  src={movie.Poster}
                  alt={movie.Title}
                  width={100}
                />
              </Link>
            </li>
          )
        })}
      </ul>
      <Outlet></Outlet>
    </>
  )
}
