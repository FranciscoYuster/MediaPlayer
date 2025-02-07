import React, { useRef, useState, useEffect } from "react";



const baseurl = 'https://playground.4geeks.com';



export default function app() {

  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false)
  const [songs, setSong] = useState([])

  let myPlayer = useRef(null);

  useEffect(() => {
    fetch(baseurl + '/sound/songs')
      .then(respons => respons.json())
      .then(data => {
        if (data.songs.length > 0) {
          setSong(data.songs);
          myPlayer.current.src = baseurl + data.songs[0].url;
        }
      })
      .catch(error => console.error("broder uste tiene un problemita con:", error));
  }, []);


  const cargarCancion = (index) => {
    if (current === index && isPlaying) {
      myPlayer.current.pause();
      setIsPlaying(false)
    } else {
      myPlayer.current.pause();
      myPlayer.current.src = baseurl + songs[index].url;
      myPlayer.current.play();
      setCurrent(index);
      setIsPlaying(true)
    }
  }

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card music-player">
        <div className="music-header">🎵 Music Player</div>

        <div className="song-list">
          {songs.map((s, i) => (
            <div
              key={i}
              onClick={() => cargarCancion(i)}
              className={`song-item d-flex justify-content-between align-items-center ${i === current ? "playing" : ""
                }`}
            >
              <span>{s.name}</span>
              <span>{i === current && isPlaying ? "⏸" : "▶️"}</span>
            </div>
          ))}
        </div>

        <div className="controls">
          <button className="btn btn-outline-primary" onClick={() => cargarCancion(current > 0 ? current - 1 : songs.length - 1)}>
            <i className="fa-solid fa-backward-fast"></i>
          </button>
          <button className="btn btn-outline-danger" onClick={() => { myPlayer.current.pause(); setIsPlaying(false); }}>
            <i className="fas fa-pause"></i>
          </button>
          <button className="btn btn-outline-success" onClick={() => { myPlayer.current.play(); setIsPlaying(true); }}>
            <i className="fa-solid fa-play"></i>
          </button>
          <button className="btn btn-outline-primary" onClick={() => cargarCancion(current < songs.length - 1 ? current + 1 : 0)}>
            <i className="fa-solid fa-forward-fast"></i>

          </button>

        </div>
        <audio ref={myPlayer} />
      </div>
    </div>
  );
}