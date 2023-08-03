import React, { useRef, useEffect, useState } from "react";
import video from "../assets/stories.mp4";

const Video = () => {
  const videoRef = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      setIsIntersecting(entry.isIntersecting);
    });

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isIntersecting) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [isIntersecting]);

  return (
    <div className="container-fluid mx-auto mb-10 sm:mb-0 flex flex-col md:flex-row items-center h-screen">
    <div className="flex items-center justify-center md:h-screen md:w-1/2  w-full">
      <div className="relative w-full h-auto md:h-screen">
        <video
          ref={videoRef}
          src={video}
          autoPlay
          controls
          className="w-full  h-auto md:h-screen object-cover object-center z-10 inset-0"
          
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>


      <div className="w-full md:w-1/2 p-5 md:p-10 py-5">
        <h6 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">
          <span className="text-[#EF3A37] flex items-center">
            <span className="text-4xl md:text-5xl lg:text-7xl  md:h-14 md:w-14 ">
              [{" "}
            </span>
            <span className="text-[#000000]  py-2  font-medium text-center mt-5 text-2xl md:text-2xl px-3">
              Create Compelling Success Stories With Us
            </span>{" "}
            <span className="text-4xl md:text-5xl lg:text-7xl  md:h-14 md:w-14 text-[#EF3A37] ">
              {" "}
              ]{" "}
            </span>
          </span>
        </h6>

        <h6 className="text-lg md:text-2xl mb-6 font-medium md:text-start text-center  text-[#000000]">
          We’ve created this agency with the sole purpose of providing every
          brand with its rightful position and recognition in the market.
        </h6>
        <p className="text-base md:text-xl mb-6 text-[#777777] text-center md:text-left">
          A carefully chosen team of talented professionals, each acquiring a
          knack for giving their best along with a vigorous creative intellect,
          works actively behind each project assigned to present the best
          outcomes for you and, ultimately, for us.
        </p>
        <button className=" text-center md:text-left text-[#EF3A37] text-lg  transition duration-300 ease-in-out transform hover:text-[#EF3A37]  hover:scale-105 w-full md:w-auto font-bold">
          Get To Know Us
        </button>
      </div>
    </div>
  );
};

export default Video;
