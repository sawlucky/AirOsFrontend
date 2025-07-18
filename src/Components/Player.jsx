import React, { useEffect, useRef, useState } from "react";
import Daku from "../assets/Daku-Lofi.mp3";
import {
  CirclePlay,
  CirclePause,
  ChevronLeft,
  ChevronRight,
  Volume1,
  Volume2,
} from "lucide-react";
const Player = () => {
  const audioElem = useRef();
  const progressBar = useRef();
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const onTimeUpdate = () => {
    if (audioElem.current) setCurrentTime(audioElem.current.currentTime);
  };

  const [isPlaying, setIsplaying] = useState(false);
  const [currentVolume, setCurrentVolume] = useState(1);
  const togglePlaying = () => {
    setIsplaying(!isPlaying);
  };
  const formatTime = (time) => {
    if (time || !isNaN(time)) {
      const minute = Math.floor(time / 60);
      const second = Math.floor(time % 60);
      return `{${minute}:${second < 10 ? "0" + second : second}}`;
    }
    return "0:00";
  };
  const handleIncreasingVolume = () => {
    if (audioElem.current) {
      const newVolume = Math.min(currentVolume + 0.1, 1);
      audioElem.current.volume = newVolume;
      setCurrentVolume(newVolume);
    }
  };
  const handleDecreasingVolume = () => {
    if (audioElem.current) {
      const newVolume = Math.max(currentVolume - 0.1, 0);
      audioElem.current.volume = newVolume;
      setCurrentVolume(newVolume);
    }
  };
  useEffect(() => {
    if (isPlaying) {
      audioElem.current.play();
    } else {
      audioElem.current.pause();
    }
  }, [isPlaying]);
  const onLoadedMetadata = () => {
    if (audioElem.current) {
      setDuration(audioElem.current.duration);
      setCurrentVolume(audioElem.current.volume);
      console.log(audioElem.current.volume);
    }
  };
  const handleProgressChange = (e) => {
    const width = progressBar.current.clientWidth;
    const clickX = e.nativeEvent.offsetX;
    const newTime = (clickX / width) * duration;
    setCurrentTime(newTime);
    audioElem.current.currentTime = newTime;
  };
  return (
    <div>
      <audio
        src={Daku}
        ref={audioElem}
        // controls
        onTimeUpdate={onTimeUpdate}
        onLoadedMetadata={onLoadedMetadata}
        // controls
      ></audio>
      <div
        className="w-full bg-gray-300 h-2 rounded-full cursor-pointer "
        onClick={handleProgressChange}
        ref={progressBar}
      >
        <div
          className="bg-purple-600 h-2 rounded-full"
          style={{ width: `${(currentTime / duration) * 100}%` }}
        ></div>
      </div>
      <div className="container flex m-5 items-center w-screen bg-purple-500 ">
        <div className="cursor-pointer">
          <ChevronLeft />
        </div>
        <div className="cursor-pointer">
          {!isPlaying ? (
            <CirclePlay onClick={togglePlaying} />
          ) : (
            <CirclePause onClick={togglePlaying} />
          )}
        </div>
        <div className="cursor-pointer">
          <ChevronRight />
        </div>
        <Volume1 className="cursor-pointer" onClick={handleDecreasingVolume} />
        <Volume2 className="cursor-pointer" onClick={handleIncreasingVolume} />
      </div>
      <div className="flex justify-between text-sm mt-1">
        <span>{formatTime(currentTime)}</span>
        <span>{formatTime(duration)}</span>
      </div>
    </div>
  );
};

export default Player;
