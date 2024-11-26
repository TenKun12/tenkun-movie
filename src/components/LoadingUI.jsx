import { Loader2 } from "lucide-react";
import React from "react";

const LoadingUI = () => {
  return (
    <div className="flex h-1/2  justify-center items-center">
      <Loader2 className="animate-spin text-amber-500 w-24 h-24 " />
    </div>
  );
};

export default LoadingUI;
