import React from 'react'
import MovieAdd from '../component/MovieAdd';
import MovieCard from "../component/MovieCard";

function MovieList({movies, search}) {
  return (
    <div
      style={{
        marginTop: "90px",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        marginRight: "30px",
        marginLeft: "30px",
      }}
    >
      {movies
        .filter((val) => val?.name?.toLowerCase().includes(search.toLowerCase()))
        .map((el,i) => (
          <MovieCard key={i} movie={el} />
        ))}
         
       
       
    </div>
  );
}

export default MovieList