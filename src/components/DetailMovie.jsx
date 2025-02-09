import Image from "next/image";
import React from "react";
import VideoDetail from "./VideoDetail";

const DetailMovie = ({ cast, movieDetail }) => {
  return (
    <div className="w-4/6 mt-5 text-white">
      <div>
        <div className="text-lg font-semibold">CAST</div>
        <div className="flex flex-shrink-0 space-x-10 overflow-auto">
          {cast?.map((item) => (
            <div key={item.id} className="flex-none py-2">
              <Image
                src={`https://image.tmdb.org/t/p/original${item.profile_path}`}
                width={150}
                height={150}
                alt="cast"
              />
              <div>{item.name}</div>
            </div>
          ))}
        </div>
      </div>
      <VideoDetail VideoDetail={movieDetail?.videos} />
    </div>
  );
};

export default DetailMovie;
