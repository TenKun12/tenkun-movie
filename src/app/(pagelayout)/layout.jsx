import LoadingUI from "@/components/LoadingUI";
import Navbar from "@/components/Navbar";
import React, { Suspense } from "react";

const pageLayout = ({ children }) => {
  return (
    <div className=" min-h-full w-4/6 ">
      <Suspense fallback={<LoadingUI />}>{children}</Suspense>
    </div>
  );
};

export default pageLayout;
