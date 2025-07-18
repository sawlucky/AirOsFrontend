

import React from "react";
import { creators } from "../utils/ListenCreator";

const FilmStars = () => {
  return (
    <div className="bg-[#122] flex items-end justify-end px-4 sm:px-8 md:px-16">
      <div className="my-10 w-full max-w-full overflow-hidden">
        <div className="marquee-animation w-full inline-flex animate-marquee">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 md:gap-12 lg:gap-16">
            {creators.map((start, index) => (
              <div
                key={index}
                className={`${
                  ["Listen", "Your", "Best", "Creator"].includes(start.name)
                    ? "bg-[#122] text-[#FECC30] font-space font-medium leading-[98px] flex items-center"
                    : "bg-[#FECC30] text-black cursor-pointer"
                } rounded-[14.5px] w-full max-w-sm overflow-hidden px-4 py-3`}
              >
                <div className="flex justify-between items-start">
                  <div className="flex flex-col">
                    <div className="text-base sm:text-lg font-bold">
                      {start.name}
                    </div>
                    {start.since && (
                      <div className="text-xs sm:text-sm opacity-80">{start.since}</div>
                    )}
                  </div>
                  {![ "Listen", "Your", "Best", "Creator" ].includes(start.name) && (
                    <img
                      src="./images/samantha.png"
                      alt={start.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
          }
          .marquee-animation {
            display: inline-flex;
            animation: marquee 15s linear infinite;
            white-space: nowrap;
          }
         
        `}
      </style>
    </div>
  );
};

export default FilmStars;