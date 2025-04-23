import React, { useEffect, useState } from 'react'
import './rowpost.css'
import axios from '../../axios'
import { imageUrl } from '../../constants/constants'

function RowPost(props) {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    axios.get(props.url).then(response => {
      console.log(response.data)
      setMovies(response.data.results)
    })
  }, [props.url])

  const handleMovie = (id) => {
    console.log(id)
  }

  return (
    <div className='row1'>
      <h2 className='t'>{props.title}</h2>
      <div className="posters">
        {movies.map((obj) => (
          <img
            onClick={() => handleMovie(obj.id)}
            key={obj.id}
            src={`${imageUrl + obj.backdrop_path}`}
            alt="poster"
            className={props.isSmall ? 'smallposter' : 'poster'}
          />
        ))}
      </div>
    </div>
  )
}

export default RowPost
