// import DiscoveryDropdown from "@/components/DiscoveryDropdown";
// import MovieListSection from "@/components/MovieListSection";
// import { fetchFromApi } from "@/services/fetchFromAPi";
// import React from "react";

// const Movies = async ({ searchParams }) => {
//   const discoveryType = (await searchParams).discovery || "popular";
//   const movieList = await fetchFromApi(
//     `movie/${discoveryType}?language=en-US&page=1`
//   );

//   return (
//     <div className="text-white">
//       <div className="flex items-center p-2 space-x-3">
//         <div>Discover Movie</div>
//         <DiscoveryDropdown />
//       </div>
//       <MovieListSection movie={movieList} />
//     </div>
//   );
// };

// export default Movies;
import { redirect } from "next/navigation";
import React from "react";

const page = async () => {
  redirect("/movies/pages/1");

  return <div>page</div>;
};

export default page;
