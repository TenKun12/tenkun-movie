import LoadingUI from "@/components/LoadingUI";
import Navbar from "@/components/Navbar";
import React, { Suspense } from "react";

const MovieDetailLayout = ({ children }) => {
  return (
    <div className=" min-h-full flex flex-col w-full items-center">
      <div className=" w-4/6 bg-blue-400  "></div>
      <Suspense fallback={<LoadingUI />}>{children}</Suspense>
    </div>
  );
};

export default MovieDetailLayout;
