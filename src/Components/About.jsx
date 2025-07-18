import React from "react";
import aboutUs from "../assets/aboutUs.png";
import { Link } from "react-router-dom";

const About = ({ id }) => {
  return (
    <div
      id={id}
      className="w-full h-auto min-h-[350px] p-4 sm:p-6 md:p-12 bg-[#112222] flex flex-col justify-center items-center gap-6 sm:gap-10 md:gap-16"
    >
      <div className="w-full max-w-4xl flex flex-col md:flex-row justify-start items-center gap-6 sm:gap-10 md:gap-16">
        <img
          className="w-full md:w-1/2 rounded-lg object-cover max-h-[260px] sm:max-h-[320px] md:max-h-[355px]"
          src={aboutUs}
          alt="About us"
        />
        <div className="w-full md:w-1/2 flex flex-col justify-start items-start gap-4 sm:gap-6 md:gap-9">
          <div className="w-full flex flex-col justify-start items-start gap-3 sm:gap-4">
            <div className="inline-flex justify-start items-center gap-4 sm:gap-6">
              <div className="w-8 sm:w-14 h-0 border-t-4 border-[#fecc30]" />
              <div className="opacity-70 text-white text-base sm:text-lg font-normal font-['Nunito Sans'] leading-relaxed tracking-wide">
                About us
              </div>
            </div>
            <div className="text-white text-xl sm:text-2xl lg:text-3xl font-bold font-['Nunito Sans'] leading-snug sm:leading-10">
              Connecting Cultures, One Song at a Time.
            </div>
          </div>

          <div className="w-full flex flex-col justify-start items-start gap-3 sm:gap-4">
            <div className="text-white text-sm sm:text-base md:text-lg opacity-70 font-normal font-['Nunito Sans'] leading-loose tracking-normal sm:tracking-wide">
              We are Vancouver's first multicultural internet radio station,
              dedicated to bringing communities together through the power of
              music. Founded in Vancouver, BC, Canada, our station is a bridge
              for the global diaspora, helping people reconnect with their
              cultural heritage, no matter where they are.
            </div>
            <div className="text-white text-sm sm:text-base md:text-lg opacity-70 font-normal font-['Nunito Sans'] leading-loose tracking-tight">
              🎵 24/7 Live Music | 🌍 Global Community | 🎙 Engaging Talk
            </div>
          </div>

          <div
            data-property="Default"
            className="w-fit min-w-[120px] sm:min-w-[150px] md:w-[180px] h-[42px] sm:h-[45px] px-4 sm:px-6 py-2 sm:py-3 bg-[#f2eee9] rounded-full border-2 sm:border-3 border-[#e8e4e1] inline-flex justify-center items-center gap-2 cursor-pointer mt-2"
          >
            <Link to="/about">
              <button className="text-black text-xs sm:text-sm md:text-base font-semibold font-['Inter'] leading-tight">
                About Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;