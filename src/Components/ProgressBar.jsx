import React, { useContext, useEffect, useState } from "react";
import { AudioContext } from "../Context/AudioContext";

const ProgressBar = () => {
  const { myPlayer } = useContext(AudioContext);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const handleTimeUpdate = () => {
    if (myPlayer.current) {
      const { currentTime, duration } = myPlayer.current;
      if (duration > 0) {
        setProgress((currentTime / duration) * 100);
        setCurrentTime(currentTime);
        setDuration(duration);
      }
    }
  };

  useEffect(() => {
    if (myPlayer.current) {
      myPlayer.current.addEventListener("timeupdate", handleTimeUpdate);
      return () => {
        myPlayer.current.removeEventListener("timeupdate", handleTimeUpdate);
      };
    }
  }, [myPlayer]);

  const handleClick = (e) => {
    if (myPlayer.current && myPlayer.current.duration) {
      const rect = e.currentTarget.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const newTime = (clickX / rect.width) * myPlayer.current.duration;
      myPlayer.current.currentTime = newTime;
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <>
      <div className="progress border border-1 border-dark mt-3" onClick={handleClick} style={{ cursor: "pointer" }}>
        <div
          className="progress-bar bg-primary"
          role="progressbar"
          style={{ width: `${progress}%` }}
          aria-valuenow={progress}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <div className="d-flex justify-content-between mt-1">
        <small>{formatTime(currentTime)}</small>
        <small>{formatTime(duration)}</small>
      </div>
    </>
  );
};

export default ProgressBar;
