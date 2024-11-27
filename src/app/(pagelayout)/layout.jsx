import LoadingUI from "@/components/LoadingUI";
import Navbar from "@/components/Navbar";
import React, { Suspense } from "react";

const pageLayout = ({ children }) => {
  return (
    <div className=" min-h-full lg:w-4/6  w-full">
      <Suspense fallback={<LoadingUI />}>{children}</Suspense>
    </div>
  );
};

export default pageLayout;
