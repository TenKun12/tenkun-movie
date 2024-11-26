import MovieListSection from "@/components/MovieListSection";
import React from "react";

const Movies = () => {
  const movies = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 23,
    24, 25, 26, 27, 32, 53, 44,
  ];
  return (
    <div>
      <MovieListSection movie={movies} />
    </div>
  );
};

export default Movies;
