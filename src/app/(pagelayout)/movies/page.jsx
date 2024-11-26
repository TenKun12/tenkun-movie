import MovieListSection from "@/components/MovieListSection";
import { fetchFromApi } from "@/services/fetchFromAPi";
import React from "react";

const Movies = async () => {
  const movieList = await fetchFromApi(`movie/popular?language=en-US&page=1`);
  console.log(movieList);
  return (
    <div className="text-white">
      <div>Discover Movie Popular</div>
      <MovieListSection movie={movieList} />
      <div>hello</div>
    </div>
  );
};

export default Movies;
