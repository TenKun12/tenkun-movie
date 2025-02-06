import Banner from "@/components/Banner";
import DetailMovie from "@/components/DetailMovie";
import LoadingUI from "@/components/LoadingUI";
import { fetchFromApi } from "@/services/fetchFromAPi";
import React from "react";

const MovieDetail = async ({ params }) => {
  const { movieId } = await params;
  const movieDetail = await fetchFromApi(
    `movie/${movieId}?language=en-US&&append_to_response=credits`
  );
  console.log(movieDetail.credits.cast.slice(0, 10));
  return (
    <div className="w-full flex flex-col items-center">
      <Banner detail={movieDetail} />
      <DetailMovie cast={movieDetail?.credits?.cast?.slice(0, 10)} />
    </div>
  );
};

export default MovieDetail;
