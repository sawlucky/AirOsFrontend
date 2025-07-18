import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-[#122] overflow-x-hidden">
      <Navbar />

      <div className="w-full max-h-[627.8px] overflow-hidden relative">
        {/* KKSF FM AM part */}
        <div className="flex flex-col items-center justify-center text-center gap-[4.529px] mt-20 mx-4 mb-10 lg:items-start lg:text-left lg:w-[250px] lg:mx-[110px] lg:mt-[150px]">
          <div className="text-[#FFF] text-[32px] sm:text-[40.22px] font-[Nunito Sans] font-[400] leading-normal">
            KKSF
          </div>

          <div className="text-white text-6xl sm:text-8xl font-normal font-ralewaydots">
            103:7
          </div>

          <div className="inline-flex justify-center items-center gap-[20px] sm:gap-[29.59px]">
            <div className="text-[#eab557] text-[22px] sm:text-[26.74px] font-semibold font-['Inter'] cursor-pointer">
              FM
            </div>
            <div className="text-[#d5d2c6] text-[22px] sm:text-[27.20px] font-semibold font-['Inter'] cursor-pointer">
              AM
            </div>
          </div>
        </div>

        {/* Radio image for small screens */}
        <div className="block lg:hidden relative w-full px-4">
          <img
            className="w-full h-auto mx-auto"
            src="./images/FullRadioImage.png"
            alt="radioBackground"
            loading="lazy"
          />
        </div>

        {/* Frequency Tuner - desktop only */}
        <div className="hidden lg:block w-[700px] h-[100px] flex flex-col relative bg-white">
          <div className="w-full h-[1px] mt-2 bg-black outline-[0.37px] outline-offset-[-0.18px] outline-black"></div>
          <div className="w-[700px] h-[1px] mt-3 bg-[#eab557] outline-[0.37px] outline-offset-[-0.18px] outline-[#eab557]"></div>
          <div className="w-[700px] h-[1px] mt-1 bg-[#eab557] outline-[0.37px] outline-offset-[-0.18px] outline-[#eab557]"></div>
          <div className="w-[700px] h-[1px] mt-7 bg-black outline-[0.37px] outline-offset-[-0.18px] outline-black"></div>
          <div className="w-[700px] h-[1px] mt-6 bg-black outline-[0.37px] outline-offset-[-0.18px] outline-black"></div>
          <div className="w-1.5 absolute h-full left-[70%] bg-[#f7d795] border-[0.19px] border-[#f7d795]" />
        </div>

        {/* Listen Online - desktop only */}
        <div className="hidden lg:block bg-[#FECC30] relative p-4 w-full">
          <div className="relative w-full max-w-xs mx-auto md:ml-8 lg:ml-16 pb-6 flex flex-col p-4 justify-start">
            <span className="text-black text-3xl md:text-4xl lg:text-5xl font-bold font-['Roboto'] tracking-wider md:tracking-widest">
              Listen
            </span>
            <span className="text-neutral-700 text-3xl md:text-4xl lg:text-5xl font-bold font-['Roboto'] tracking-wider md:tracking-[2.60px]">
              Online
            </span>
            <div className="w-3 h-3 relative ml-[200px] md:right-8 lg:right-12 bg-neutral-700 rounded-full" />
          </div>
        </div>

        {/* Radio image for desktop */}
        <div className="absolute w-full h-auto top-[2%] left-[25%] hidden lg:block">
          <div className="relative top-[20%] left-0">
            <img
              className="w-[1200px] h-auto"
              src="./images/FullRadioImage.png"
              alt="radioBackground"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
