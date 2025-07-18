


import React, { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

const MainLiveView = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [currentImage, setCurrentImage] = useState(0);
  const audioRef = useRef(null);

  const images = [
    "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&h=600&fit=crop"
  ];

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
      }, 10000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, images.length]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((e) => console.log("Playback failed:", e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
      <div className="relative bg-black rounded-lg overflow-hidden shadow-2xl">
        {/* Visual Display */}
        <div className="relative aspect-video bg-gray-900">
          <img
            src={images[currentImage]}
            alt="Music visualization"
            className="w-full h-full object-cover transition-opacity duration-1000"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

          {/* Center Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onClick={togglePlay}
              className="bg-white/20 hover:bg-white/30 rounded-full p-6 transition-all duration-300 backdrop-blur-sm border border-white/20"
            >
              {isPlaying ? (
                <Pause className="w-12 h-12 text-white" />
              ) : (
                <Play className="w-12 h-12 text-white ml-1" />
              )}
            </button>
          </div>

          {/* Live Badge */}
          <div className="absolute top-4 left-4">
            {isPlaying && (
              <div className="flex items-center space-x-2 bg-red-600 px-3 py-1 rounded-full">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span className="text-white text-sm font-medium">LIVE</span>
              </div>
            )}
          </div>
        </div>

        {/* Controls */}
        <div className="bg-gray-900 p-4 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
          {/* Left Controls */}
          <div className="flex items-center space-x-4">
            <button
              onClick={togglePlay}
              className="text-white hover:text-gray-300 transition-colors"
            >
              {isPlaying ? (
                <Pause className="w-6 h-6" />
              ) : (
                <Play className="w-6 h-6" />
              )}
            </button>

            <div className="flex items-center space-x-2">
              <button
                onClick={toggleMute}
                className="text-white hover:text-gray-300 transition-colors"
              >
                {isMuted ? (
                  <VolumeX className="w-5 h-5" />
                ) : (
                  <Volume2 className="w-5 h-5" />
                )}
              </button>

              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={volume}
                onChange={handleVolumeChange}
                className="w-24 h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer slider"
              />
            </div>
          </div>

          {/* Center Info */}
          <div className="text-center">
            <div className="text-white text-sm font-medium">Radio Stream</div>
            <div className="text-gray-400 text-xs">Live Audio</div>
          </div>

          {/* Right Info */}
          <div className="text-right">
            {isPlaying && (
              <div className="text-green-400 text-xs">● Playing</div>
            )}
          </div>
        </div>

        {/* Audio Element */}
        <audio
          ref={audioRef}
          preload="none"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onError={(e) => console.log("Audio error:", e)}
        >
          <source src="https://s5.radio.co/s36cb4e958/listen" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>

        {/* Custom CSS for slider */}
        <style>{`
          .slider::-webkit-slider-thumb {
            appearance: none;
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: #ffffff;
            cursor: pointer;
          }
          .slider::-moz-range-thumb {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: #ffffff;
            cursor: pointer;
            border: none;
          }
        `}</style>
      </div>
    </div>
  );
};

export default MainLiveView;
