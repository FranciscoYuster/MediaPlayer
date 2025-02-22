import React, { useContext } from "react";
import { AudioContext } from "../Context/AudioContext";

const Controls = () => {
  const { current, songs, myPlayer, cargarCancion, setIsPlaying } = useContext(AudioContext);

  const handlePrev = () => {
    const newIndex = current > 0 ? current - 1 : songs.length - 1;
    cargarCancion(newIndex);
  };

  const handleNext = () => {
    const newIndex = current < songs.length - 1 ? current + 1 : 0;
    cargarCancion(newIndex);
  };

  const handlePause = () => {
    myPlayer.current.pause();
    setIsPlaying(false);
  };

  const handlePlay = () => {
    myPlayer.current.play();
    setIsPlaying(true);
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-light py-3 border-top">
      <button className="btn btn-outline-primary mx-2" onClick={handlePrev}>
        <i className="bi bi-skip-backward-fill"></i>
      </button>
      <button className="btn btn-outline-danger mx-2" onClick={handlePause}>
        <i className="bi bi-pause-fill"></i>
      </button>
      <button className="btn btn-outline-success mx-2" onClick={handlePlay}>
        <i className="bi bi-play-fill"></i>
      </button>
      <button className="btn btn-outline-primary mx-2" onClick={handleNext}>
        <i className="bi bi-skip-forward-fill"></i>
      </button>
    </div>
  );
};

export default Controls;
