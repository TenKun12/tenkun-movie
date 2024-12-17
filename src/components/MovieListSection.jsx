import React from "react";
import MovieCard from "./MovieCard";

const MovieListSection = ({ movie, type }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 p-1">
      {movie?.results?.map((item) => (
        <MovieCard type={type} key={item.id} detail={item} />
      ))}
    </div>
  );
};

export default MovieListSection;
