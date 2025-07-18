import React from 'react'

const VideoPlayer = () => {
   const playlist = {
     list1: "https://www.youtube.com/embed/TdrL3QxjyVw?autoplay=1",
   };
    return (
      <div className="w-[763px] h-[509px] relative rounded-2xl overflow-hidden bg-gray-900">
        {/* Video placeholder - this creates a dark background that shows the interface */}
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={playlist.list1}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>

        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60"></div>

        {/* Viewer count */}
        <div className="absolute right-4 top-[20px] inline-flex justify-start items-center gap-[2.55px]">
          <div
            data-direction="Default"
            data-disabled="No"
            data-property-1="Eye"
            data-quality="Default"
            data-selected="No"
            className="w-4 h-4 relative overflow-hidden"
          >
            <div className="w-4 h-4 left-0 top-0 absolute overflow-hidden">
              <div className="w-3.5 h-2 left-[0.98px] top-[2.86px] absolute bg-white" />
            </div>
          </div>
          <div className="text-center justify-center text-white text-[10.18px] font-normal font-['Roboto']">
            120K
          </div>
        </div>

        {/* Video controls */}
        <div className="w-full pr-3 pb-1.5 left-0 bottom-0 absolute inline-flex flex-col justify-start items-start gap-1.5">
          {/* Progress bar */}
          <div className="w-full h-0.5 bg-white/25 flex flex-col justify-center items-start gap-2.5">
            <div className="w-60 h-[3px] bg-white/60" />
          </div>

          {/* Control buttons */}
          <div className="self-stretch inline-flex justify-between items-center w-full px-2">
            {/* Left controls */}
            <div className="flex justify-start items-center gap-2">
              <div className="w-9 h-9 relative overflow-hidden cursor-pointer hover:bg-white/10 rounded-full flex items-center justify-center">
                <div
                  data-property-1="Play"
                  className="w-7 h-7 relative overflow-hidden"
                >
                  <div className="w-2.5 h-3.5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white" />
                </div>
              </div>
              <div className="w-9 h-9 relative overflow-hidden cursor-pointer hover:bg-white/10 rounded-full flex items-center justify-center">
                <div
                  data-property-1="Next"
                  className="w-7 h-7 relative overflow-hidden"
                >
                  <div className="w-3 h-3 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white" />
                </div>
              </div>
              <div className="w-9 h-9 relative overflow-hidden cursor-pointer hover:bg-white/10 rounded-full flex items-center justify-center">
                <div
                  data-property-1="Volume"
                  className="w-6 h-6 relative overflow-hidden"
                >
                  <div className="w-4 h-4 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white" />
                </div>
              </div>
            </div>

            {/* Right controls */}
            <div className="flex justify-start items-center gap-2">
              <div className="w-9 h-9 relative overflow-hidden cursor-pointer hover:bg-white/10 rounded-full flex items-center justify-center">
                <div
                  data-property-1="CC"
                  className="w-6 h-6 relative overflow-hidden"
                >
                  <div className="w-4 h-3.5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white" />
                </div>
              </div>
              <div className="w-9 h-9 relative overflow-hidden cursor-pointer hover:bg-white/10 rounded-full flex items-center justify-center">
                <div
                  data-property-1="Settings"
                  className="w-6 h-6 relative overflow-hidden"
                >
                  <div className="w-4 h-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white" />
                </div>
              </div>
              <div className="w-9 h-9 relative overflow-hidden cursor-pointer hover:bg-white/10 rounded-full flex items-center justify-center bg-white/10">
                <div
                  data-property-1="Chat"
                  data-selected="Yes"
                  className="w-6 h-6 relative overflow-hidden"
                >
                  <div className="w-5 h-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white" />
                </div>
              </div>
              <div className="w-9 h-9 relative overflow-hidden cursor-pointer hover:bg-white/10 rounded-full flex items-center justify-center">
                <div
                  data-property-1="Fullscreen"
                  className="w-6 h-6 relative overflow-hidden"
                >
                  <div className="w-4 h-4 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default VideoPlayer