import Banner from "@/components/Banner";
import DetailMovie from "@/components/DetailMovie";
import LoadingUI from "@/components/LoadingUI";
import { fetchFromApi } from "@/services/fetchFromAPi";
import React from "react";

const TvDetail = async ({ params }) => {
  const tvId = (await params).tvId;
  const movieDetail = await fetchFromApi(
    `tv/${tvId}?language=en-US&&append_to_response=credits`
  );
  // console.log({ movieDetail: movieDetail.name });
  //   console.log(movieDetail.credits.cast.slice(0, 10));
  return (
    <div className="w-full flex flex-col items-center">
      <Banner detail={movieDetail} />
      <DetailMovie cast={movieDetail?.credits?.cast?.slice(0, 10)} />
    </div>
  );
};

export default TvDetail;
