import DiscoveryDropdown from "@/components/DiscoveryDropdown";
import MovieListSection from "@/components/MovieListSection";
import PaginationNumber from "@/components/PaginationNumber";
import { fetchFromApi } from "@/services/fetchFromAPi";
import React from "react";

const MoviesPage = async ({ searchParams, params }) => {
  const discoveryType = (await searchParams).discovery || "popular";
  const page = (await params).page;
  const movieList = await fetchFromApi(
    `movie/${discoveryType}?language=en-US&page=${page}`
  );

  return (
    <div className="text-white">
      <div className="flex items-center p-2 space-x-3">
        <div>Discover Movie</div>
        <DiscoveryDropdown />
      </div>
      <MovieListSection movie={movieList} />

      <PaginationNumber currentPage={page} />
    </div>
  );
};

export default MoviesPage;
