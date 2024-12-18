import useDebounce from "@/hooks/useDebounce";
import { getYear } from "@/services/converter";
import { fetchFromApi } from "@/services/fetchFromAPi";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const SearchMovie = () => {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [moviePlaceholder, setMoviePlaceholder] = useState([]);
  const [search, setSearch] = useState();
  const searchDebounce = useDebounce(search, 200);

  useEffect(() => {
    const searchApi = async () => {
      try {
        if (searchDebounce) {
          const res = await fetchFromApi(
            `search/multi?query=${searchDebounce}&include_adult=true&language=en-US&page=1`
          );
          setMoviePlaceholder(
            res?.results
              ?.filter(
                (item) =>
                  item.media_type === "tv" || item.media_type === "movie"
              )
              ?.slice(0, 5)
          );
        }
      } catch (error) {
        console.log({ error });
      }
    };
    searchApi();
  }, [searchDebounce]);
  console.log(moviePlaceholder);

  const handleSearch = async () => {
    console.log(search);
  };
  return (
    <div
      className={`w-full lg:w-1/2  ${
        isInputFocused ? "fixed right-0 left-0 px-5" : "relative"
      }`}
    >
      <div className="flex text-white  w-full  items-center relative z-50 ">
        <input
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          onFocus={() => {
            setIsInputFocused(true);
          }}
          // onBlur={() => {
          //   setIsInputFocused(false);
          // }}
          onKeyDown={(e) => {
            if (e.key == "Enter") {
              handleSearch();
            }
          }}
          type="text"
          className={`w-full group-focus:border-blue-400 bg-black border-r-0${
            isInputFocused ? "bg-black" : "bg-transparent"
          }  border border-white/30 rounded-l-full px-5 py-2 focus:border-blue-500 outline-none hover:outline-none`}
        />
        <button
          onClick={handleSearch}
          className="border group-focus:border-blue-400 group border-white/30 p-2.5 rounded-r-full  px-5"
        >
          <Search size={20} color="white" />
        </button>
      </div>
      {isInputFocused && (
        <>
          <div className="absolute w-full space-y-5 bg-black/80 p-2 rounded-md z-50">
            {moviePlaceholder?.map((item) => (
              <div key={item?.id}>
                <Link
                  onClick={() => {
                    setIsInputFocused(false);
                  }}
                  className=""
                  href={`${
                    item?.media_type === "tv"
                      ? `/tv/${item?.id}`
                      : `/movie/${item?.id}`
                  }`}
                >
                  <div className=" w-full h-24 flex">
                    <div className="aspect-[4/6] h-full ">
                      <Image
                        className="h-full w-full"
                        src={`https://image.tmdb.org/t/p/w500${item?.poster_path}`}
                        width={200}
                        height={200}
                        alt="poster"
                      />
                    </div>
                    <div className="text-white p-3 flex flex-col w-full">
                      <div>{item?.original_title || item?.name}</div>
                      <div className="text-amber-500">
                        {getYear(
                          item?.release_date || item?.first_air_date || 0
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div
            onClick={() => {
              setIsInputFocused(false);
            }}
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-10"
          >
            {/* <div className="text-white text-lg bg-white/10 p-4 rounded-md">
            This is an overlay
            </div> */}
          </div>
        </>
      )}
    </div>
  );
};

export default SearchMovie;
