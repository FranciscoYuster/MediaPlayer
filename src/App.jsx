import React, { useRef, useState, useEffect } from "react";



const baseurl = 'https://playground.4geeks.com';

 


export default function app () {

  const [current, setCurrent] = useState (0);
  const [isPlaying, setIsPlaying] = useState(false)
  const [songs, setSong] = useState( [
    {
      "id": 1,
      "name": "Mario Castle",
      "url": "/sound/files/mario/songs/castle.mp3",
      "category": "category"
    },
    {
      "id": 2,
      "name": "Mario Star",
      "url": "/sound/files/mario/songs/hurry-starman.mp3",
      "category": "category"
    },
    {
      "id": 3,
      "name": "Mario Overworld",
      "url": "/sound/files/mario/songs/overworld.mp3",
      "category": "category"
    },
    {
      "id": 4,
      "name": "Mario Stage 1",
      "url": "/sound/files/mario/songs/stage1.mp3",
      "category": "category"
    },
    {
      "id": 5,
      "name": "Mario Stage 2",
      "url": "/sound/files/mario/songs/stage2.mp3",
      "category": "category"
    },
    {
      "id": 6,
      "name": "Mario Star",
      "url": "/sound/files/mario/songs/starman.mp3",
      "category": "category"
    },
    {
      "id": 7,
      "name": "Mario Underworld",
      "url": "/sound/files/mario/songs/underworld.mp3",
      "category": "category"
    },
    {
      "id": 8,
      "name": "Mario Underwater",
      "url": "/sound/files/mario/songs/underwater.mp3",
      "category": "category"
    },
    {
      "id": 9,
      "name": "Zelda Castle",
      "url": "/sound/files/videogame/songs/zelda_castle.mp3",
      "category": "category"
    },
    {
      "id": 10,
      "name": "Zelda Outworld",
      "url": "/sound/files/videogame/songs/zelda_outworld.mp3",
      "category": "category"
    },
    {
      "id": 11,
      "name": "Zelda Titles",
      "url": "/sound/files/videogame/songs/zelda_title.mp3",
      "category": "category"
    },
    {
      "id": 12,
      "name": "Sonic Brain Zone",
      "url": "/sound/files/videogame/songs/sonic_brain-zone.mp3",
      "category": "category"
    },
    {
      "id": 13,
      "name": "Zelda Link To Past",
      "url": "/sound/files/videogame/songs/zelda_link-to-past.mp3",
      "category": "category"
    },
    {
      "id": 14,
      "name": "Flintstones",
      "url": "/sound/files/cartoons/songs/flintstones.mp3",
      "category": "cartoon"
    },
    {
      "id": 15,
      "name": "power-rangers",
      "url": "/sound/files/cartoons/songs/power-rangers.mp3",
      "category": "cartoon"
    },
    {
      "id": 16,
      "name": "simpsons",
      "url": "/sound/files/cartoons/songs/simpsons.mp3",
      "category": "cartoon"
    },
    {
      "id": 17,
      "name": "south-park",
      "url": "/sound/files/cartoons/songs/south-park.mp3",
      "category": "cartoon"
    },
    {
      "id": 18,
      "name": "thundercats",
      "url": "/sound/files/cartoons/songs/thundercats.mp3",
      "category": "cartoon"
    },
    {
      "id": 19,
      "name": "x-men",
      "url": "/sound/files/cartoons/songs/x-men.mp3",
      "category": "cartoon"
    }
  ])

  let myPlayer= useRef(null);
  
  useEffect(()=>{
    myPlayer.current.src = baseurl + songs[0].url;
  },[]);

 const cargarCancion  = (index) => {
  if ( current === index && isPlaying) {
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
            className={`song-item d-flex justify-content-between align-items-center ${
              i === current ? "playing" : ""
            }`}
          >
            <span>{s.name}</span>
            <span>{i === current && isPlaying ? "⏸" : "▶️"}</span>
          </div>
        ))}
      </div>

      <div className="controls">
        <button className="btn btn-outline-primary" onClick={() => cargarCancion(current > 0 ? current - 1 : songs.length - 1)}>
          <i class="fa-solid fa-backward-fast"></i>
        </button>
        <button className="btn btn-outline-danger" onClick={() => { myPlayer.current.pause(); setIsPlaying(false); }}>
          <i className="fas fa-pause"></i>
        </button>
        <button className="btn btn-outline-success" onClick={() => { myPlayer.current.play(); setIsPlaying(true); }}>
          <i className="fa-solid fa-play"></i>
        </button>
        <button className="btn btn-outline-primary" onClick={() => cargarCancion(current < songs.length - 1 ? current + 1 : 0)}>
         <i class="fa-solid fa-forward-fast"></i>
        </button>
      </div>
      <audio  ref={myPlayer}/>
    </div>
  </div>
);
}