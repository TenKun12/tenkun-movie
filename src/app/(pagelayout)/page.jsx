import LoadingUI from "@/components/LoadingUI";
import MovieCard from "@/components/MovieCard";
import MovieListSection from "@/components/MovieListSection";
import { fetchFromApi } from "@/services/fetchFromAPi";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export default async function Home() {
  const movieTrending = await fetchFromApi(
    "trending/movie/day?language=en-US'"
  );
  // const movieTrending = [
  //   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 23,
  //   24, 25, 26, 27, 32, 53, 44,
  // ];
  return (
    <div className="text-white mt-5 mb-10 ">
      <div className="flex justify-between py-2">
        <div className="font-bold text-base">TRENDING TODAY</div>
        <div className="flex space-x-5">
          <Link href={"#"} className="text-yellow-400 underline">
            Today
          </Link>
          <Link href={"/trending/thisweek"} className="hover:underline">
            This Week
          </Link>
        </div>
      </div>
      <MovieListSection movie={movieTrending} />
    </div>
  );
}
