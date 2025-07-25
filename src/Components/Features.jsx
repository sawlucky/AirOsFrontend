import React, { useState, useEffect, useRef } from "react";
import features from "../svgs/FeaturesSvgs";
import { Bars, AudioBars, LineBar } from "../svgs/AboutUsSvgs";
import { Play, Pause } from "lucide-react";

const Features = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const stickyRef = useRef(null);
  const placeholderRef = useRef(null);
  const audioRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (stickyRef.current && placeholderRef.current) {
        const stickyOffset = stickyRef.current.offsetTop;
        const scrollPosition = window.scrollY;
        const isDesktop = window.innerWidth >= 768;

        if (isDesktop && scrollPosition > stickyOffset + 100) {
          setIsSticky(true);
          placeholderRef.current.style.height = `${stickyRef.current.offsetHeight}px`;
        } else {
          setIsSticky(false);
          placeholderRef.current.style.height = "0px";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <div className="w-full bg-[#122] relative md:py-12 px-4 sm:px-8">
      {/* Placeholder to avoid jump */}
      <div ref={placeholderRef} className="h-0 transition-all duration-300" />

      {/* Sticky Audio Player */}
      <div
        ref={stickyRef}
        className={`w-full flex justify-center items-center py-5 ${
          isSticky
            ? "fixed top-0 left-0 right-0 z-50 bg-[#122]/90 backdrop-blur-sm transition-all duration-300"
            : "relative"
        }`}
      >
        <div className="w-full max-w-xl px-6 sm:px-8 py-4 bg-gradient-to-r from-white/40 to-white/25 rounded-2xl shadow-lg backdrop-blur-md flex items-center gap-5">
          {/* <Bars /> */}
          <div className="flex gap-[3px] items-end h-6">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`w-1 bg-black rounded-sm animate-bar`}
                style={{
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: `1s`,
                  animationIterationCount: "infinite",
                }}
              />
            ))}
          </div>

          <div className="flex items-center gap-5 flex-1 min-w-0">
            <div className="w-14 h-14 rounded-lg overflow-hidden shrink-0">
              <img
                src="./images/song.png"
                alt="Now playing"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="min-w-0">
              <div className="text-black font-semibold text-base truncate">
                POP!
              </div>
              <div className="text-black font-medium text-base truncate">
                {/* SHAH LUCKY */}
              </div>
            </div>
          </div>
          <AudioBars />

          <button
            onClick={togglePlay}
            className="bg-black text-white p-2 rounded-full shadow-md"
          >
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </button>

          {/* ✅ Hidden Audio Tag */}
          <audio
            ref={audioRef}
            src="https://s5.radio.co/s36cb4e958/listen" 
            preload="auto"
            type="audio/mpeg"
          />
          {/* <source
              src="https://s5.radio.co/s36cb4e958/listen"
              type="audio/mpeg"
            /> */}
          {/* </audio> */}
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-8 sm:pt-16">
        <div className="text-center mb-10">
          <p className="text-white opacity-70 font-nunito flex items-center justify-center">
            <span className="w-6 h-0.5 mx-2 border border-[#eab557]" />
            Showcasing Our Diverse Diaspora
          </p>
          <h2 className="text-white text-3xl sm:text-4xl font-bold mt-4 font-['Nunito Sans']">
            Your Home
            <span className="text-[#1DB954] ml-2">Away From Home</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-2 sm:px-0">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/10 hover:bg-white/20 transition p-6 rounded-2xl flex flex-col items-start h-full"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-white text-xl font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-white opacity-70 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="absolute right-0 bottom-[55%] hidden lg:block">
          <LineBar />
        </div>
        <div className="absolute w-[200px] h-[200px] right-0 bottom-[40%] bg-[#fecc30] rounded-full blur-[100px] hidden md:block" />
      </div>
    </div>
  );
};

export default Features;
