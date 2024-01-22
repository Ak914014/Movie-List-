import { Component } from "react";
import MovieCard from "./Moviecard";
function MovieList(props) {
  const { movies, addStars, minStars, favItem, addCart, cartCount } = props;
  return (
    <>
      {movies.map((movie) => (
        <MovieCard
          movies={movie}
          addStars={addStars}
          minStars={minStars}
          favItem={favItem}
          addCart={addCart}
          cartCount={cartCount}
          key={movie.id}
        />
      ))}
    </>
  );
}

export default MovieList;
