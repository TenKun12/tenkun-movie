import React from "react";
import MovieCard from "./MovieCard";

const MovieListSection = ({ movie }) => {
  return (
    <div className="grid grid-cols-5 gap-3">
      {movie?.results.map((item) => (
        <MovieCard key={item.id} detail={item} />
      ))}
    </div>
  );
};

export default MovieListSection;
