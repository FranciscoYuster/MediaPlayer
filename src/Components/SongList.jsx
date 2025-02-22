import React, { useContext } from "react";
import { AudioContext } from "../Context/AudioContext";

const SongList = () => {
  const { songs, current, isPlaying, cargarCancion } = useContext(AudioContext);

  return (
    <div className="list-group overflow-auto " style={{ maxHeight: "50vh" }}>
      {songs.map((song, index) => (
        <button
          key={index}
          onClick={() => cargarCancion(index)}
          className={`list-group-item border-0 list-group-item-action d-flex justify-content-between align-items-center ${
            index === current ? "active" : ""
          }`}
        >
          <span>{song.name}</span>
          <span>
            {index === current && isPlaying ? (
              <i className="bi bi-pause-fill"></i>
            ) : (
              <i className="bi bi-play-fill"></i>
            )}
          </span>
        </button>
      ))}
    </div>
  );
};

export default SongList;
