"use client";
import React from "react";
import Lottie from "lottie-react";
import minibot from "../public/minibot.json";
import { TypeAnimation } from "react-type-animation";

const LottieAnimation = () => {
  return (
    <div className="flex flex-col items-center mx-auto relative -top-10">
      <div className=" relative before:block before:left-0 before:right-0 before:bg-[#9b9a9a] before:rounded-xl before:absolute before:mx-auto before:top-[30%] before:w-[50%] before:h-[50%]">
        <Lottie animationData={minibot} className="h-30" />
      </div>

      {/* <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          "Determine which IT role fits you",
          2000, // wait 1s before replacing "Mice" with "Hamsters"
          "Discover the personalised roadmaps",
          2000,
          "Focus on a career that makes you happy",
          3000,
          "The choice is up to you",
          1000,
        ]}
        wrapper="span"
        speed={35}
        className={"text-purple-800 text-base md:text-2xl font-bold w-100"}
        repeat={Infinity}
      /> */}
    </div>
  );
};

export default LottieAnimation;
