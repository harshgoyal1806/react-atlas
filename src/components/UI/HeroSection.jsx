import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const HeroSection = () => {
  return (
    <main className="py-16">
      <div className="flex flex-col-reverse items-center justify-between max-w-6xl gap-10 px-6 mx-auto md:flex-row">
        <div className="w-full text-center md:text-center md:w-1/2">
          <h1 className="text-4xl font-medium leading-tight md:text-5xl">
            Explore the World, One <br /> Country at a Time
          </h1>
          <p className="mt-4 text-base text-gray-300">
            Discover the history, culture, and beauty of every nation. Sort,
            search, and filter through countries to find the details you need.
          </p>
          <div className="flex justify-center md:justify-center">
            <button
              type="button"
              className="flex items-center gap-2 px-6 py-1 mt-6 text-white transition-all border-2 border-white rounded-xl bg-[#202020] md:text-center"
            >
              Start Exploring <FaLongArrowAltRight />
            </button>
          </div>
        </div>

        <div className="w-full max-w-md md:w-1/2">
          <img
            src="/images/world.jpeg"
            alt="Globe illustration"
            className="object-cover w-full h-auto rounded-xl"
          />
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
