import MovieListSection from "@/components/MovieListSection";
import { fetchFromApi } from "@/services/fetchFromAPi";
import React from "react";

const TVShows = async () => {
  const movieList = await fetchFromApi(`tv/popular?language=en-US&page=1`);
  // console.log(movieList);
  return (
    <div className="text-white">
      <div className="bg-blue-50 p-5">Discover Movie Popular</div>
      <MovieListSection type={"tv"} movie={movieList} />
      <div>hello</div>
    </div>
  );
};

export default TVShows;
