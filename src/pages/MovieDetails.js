import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const MovieDetails = () => {
    const location=useLocation()
   const movie=location.state
  return (
    <div>
        <h1>{movie.name}</h1>
        <img src={movie.posterurl} alt="" />
        <p>{movie.description}</p>
    </div>
  )
}

export default MovieDetails