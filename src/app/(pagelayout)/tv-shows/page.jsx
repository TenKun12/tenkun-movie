import DiscoveryDropdown from "@/components/DiscoveryDropdown";
import MovieListSection from "@/components/MovieListSection";
import PaginationNumber from "@/components/PaginationNumber";
import { fetchFromApi } from "@/services/fetchFromAPi";
import React from "react";

const TVShows = async ({ searchParams }) => {
  const discoveryType = (await searchParams).discovery || "popular";

  const movieList = await fetchFromApi(
    `tv/${discoveryType}?language=en-US&page=1`
  );
  // console.log(movieList);
  return (
    <div className="text-white">
      <div className="flex items-center p-2 space-x-3">
        <div>Discover Movie</div>
        <DiscoveryDropdown />
      </div>
      <MovieListSection type={"tv"} movie={movieList} />
      <PaginationNumber currentPage={3} />
      <div>hello</div>
    </div>
  );
};

export default TVShows;
