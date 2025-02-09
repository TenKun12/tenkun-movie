import Banner from "@/components/Banner";
import DetailMovie from "@/components/DetailMovie";
import LoadingUI from "@/components/LoadingUI";
import VideoDetail from "@/components/VideoDetail";
import { fetchFromApi } from "@/services/fetchFromAPi";
import React from "react";

const MovieDetail = async ({ params }) => {
  const movieId = await params.movieId;
  // const movieDetail = await fetchFromApi(
  //   `movie/${movieId}?language=en-US&&append_to_response=credits,videos`
  // );
  // // const movieVideo = await fetchFromApi(`
  // //   movie/${movieId}/videos?language=en-US`);
  // console.log({ movieDetail });
  // // console.log(movieDetail.credits.cast.slice(0, 10));
  return (
    <div className="w-full flex flex-col items-center text-white">
      {/* <Banner detail={movieDetail} />
      <DetailMovie
        cast={movieDetail?.credits?.cast?.slice(0, 10)}
        movieDetail={movieDetail}
      /> */}
      {JSON.stringify({ movieId })}
    </div>
  );
};

export default MovieDetail;
