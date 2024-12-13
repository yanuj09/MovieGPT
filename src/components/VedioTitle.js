import React from "react";

const VideoTitle = (props) => {
  const { title, overview } = props;

  return (
    <div className="w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className=" text-xl md:text-6xl  font-bold">{title}</h1>
      <p className=" hidden md:inline-block text-lg py-6 w-1/4">{overview}</p>
      <div className="my-4 md:my-0">
        <button className="bg-white py-1 md:py-4 px-2 md:px-12 text-black text-xl rounded-lg hover:bg-opacity-60 ">
          ▶ Play
        </button>

        <button className="hidden md:inline-block bg-gray-700 p-4 px-12 mx-2 text-white text-xl rounded-lg opacity-[0.9] ">
          ⓘ moreinfo
        </button> 
      </div>
    </div>
  );
};

export default VideoTitle;
