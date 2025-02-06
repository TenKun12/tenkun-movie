import Image from "next/image";
import React from "react";

const TestPage = () => {
  const aspectRatio = 114 / 775;
  return (
    <div className=" w-full items-center justify-center flex">
      <Image
        src={
          "https://img.komikstation.co/data/3274915438af6ca74b36e96293ed3487/5/2_afac1c814840d9feeb0783d9095bf042.jpg"
        }
        width={1141}
        height={7751}
        // className="w-1/2"
        alt="img"
      />
    </div>
  );
};

export default TestPage;
