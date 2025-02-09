"use client";
import React from "react";

const VideoDetail = ({ VideoDetail }) => {
  const videoList = VideoDetail?.results;
  console.log({ videoList });
  return (
    <div className=" w-full justify-center items-center py-5">
      <div className="text-lg font-semibold text-amber-500">
        TRAILER AND SUGGESTED VIDEO
      </div>
      <div className="w-full justify-center items-center flex p-2">
        {/* <ReactPlayer
          controls
          url={`https://www.youtube.com/watch?v=F1dvX9Vs0ns`}
        /> */}
        <iframe
          className="w-full max-w-2xl aspect-video"
          src={`https://www.youtube.com/embed/${videoList?.[0]?.key}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      hello
      <div className="flex overflow-auto gap-5">
        {videoList?.slice(1, videoList.length).map((item, index) => (
          // <div key={item?.key}>key</div>
          <iframe
            key={item?.key}
            className="w-full max-w-2xl aspect-video"
            src={`https://www.youtube.com/embed/${item?.key}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ))}
      </div>
    </div>
  );
};

export default VideoDetail;
