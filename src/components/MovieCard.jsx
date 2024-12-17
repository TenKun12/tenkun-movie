import { Eye, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MovieCard = ({ detail, type = "movie" }) => {
  // console.log(detail);
  return (
    <Link
      href={`/${type}/${detail?.id}`}
      className=" aspect-[4/6] bg-white/40 relative group hover:scale-[1.03] transition-all hover:duration-0"
    >
      <Image
        src={`https://image.tmdb.org/t/p/w500${detail?.poster_path}`}
        width={500}
        alt="POSTER"
        height={500}
      />
      <div className="absolute bottom-0 opacity-0 group-hover:opacity-100 group-hover:duration-500 duration-0 bg-black/30 backdrop-blur-sm w-full p-2">
        <div className="pb-3 ">
          <div className="text-center">{detail?.original_title}</div>
          <div className="text-center text-yellow-400">
            {detail?.release_date?.toString().slice(0, 4)}
          </div>
        </div>
        <div className="flex justify-between items-center space-x-2">
          <div className="flex text-sm">
            <Star color="gold" size={18} />
            <div>{detail?.vote_average?.toString().slice(0, 3)}</div>
          </div>
          <div className="flex text-sm items-center space-x-2">
            <div>{detail?.popularity}</div>
            <Eye size={18} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
