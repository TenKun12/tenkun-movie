import { formatDate, getYear, toHourMinutes } from "@/services/converter";
import { Calendar, Clock, PlusSquare } from "lucide-react";
import Image from "next/image";
import React from "react";

const Banner = ({ detail }) => {
  return (
    <div
      style={{
        backgroundPosition: "center",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${detail?.backdrop_path}) `,
      }}
      className={`h-[30rem] bg-cover flex justify-center items-center  overflow-hidden `}
    >
      {/* <Image
        src={`https://image.tmdb.org/t/p/w500${detail?.backdrop_path}`}
        width={1000}
        className="w-full  relative"
        height={1000}
        alt="poster"
      /> */}
      <div className="h-full bg-black/80 w-full flex justify-center text-white/70">
        <div className="  w-4/6 h-full  flex items-center ">
          {/* s */}
          <Image
            src={`https://image.tmdb.org/t/p/w500${detail?.poster_path}`}
            width={10000}
            className="w-auto h-full p-5"
            height={10000}
            alt="poster"
          />
          <div className="space-y-5">
            <div className="flex items-end space-x-5">
              <div className="text-4xl font-bold text-white">
                {detail?.original_title}
              </div>
              <div className="text-xl font-semibold text-white/70">
                {getYear(detail?.release_date)}
              </div>
            </div>
            <div className="flex space-x-5 items-center">
              <div className="flex space-x-1">
                <Calendar color="yellow" />

                <div>{formatDate(detail?.release_date)}</div>
              </div>
              <div className="">*</div>
              <div className="flex space-x-1">
                <Clock />
                <div>{toHourMinutes(detail?.runtime)}</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="flex">
                <div>Score : </div>
                <div> {detail?.vote_average * 10}%</div>
              </div>
              <button className="flex hover:bg-white/15 px-3 rounded-md border border-white/50 py-2 items-center space-x-2">
                <PlusSquare size={18} />
                <div>Watch List</div>
              </button>
            </div>
            <div className="text-white/60 italic text-sm font-light">
              {detail?.tagline}
            </div>
            <div className="space-y-2">
              <div className="font-bold text-xl text-white py-1">Overview</div>
              <div className="text-base text-white/80">{detail?.overview}</div>
              <div className="flex space-x-3">
                {detail?.genres?.map((item) => (
                  <button
                    key={item.id}
                    className="bg-white/15 hover:bg-white/25 rounded-md text-sm font-bold px-2 py-1"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
