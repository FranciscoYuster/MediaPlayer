import React, { useRef, useState, useEffect, createContext } from "react";

const baseurl = "https://playground.4geeks.com";

// Creamos el contexto
export const AudioContext = createContext();

const AudioProvider = ({ children }) => {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songs, setSongs] = useState([]);
  const myPlayer = useRef(null);

  useEffect(() => {
    fetchSongs();
  }, []);

  const fetchSongs = async () => {
    fetch(baseurl + "/sound/songs")
      .then((response) => response.json())
      .then((data) => {
        if (data.songs.length > 0) {
          setSongs(data.songs);
          // Se establece la primera canción como fuente del audio
          myPlayer.current.src = baseurl + data.songs[0].url;
        }
      })
      .catch((error) =>
        console.error("broder uste tiene un problemita con:", error)
      );
  }

  const cargarCancion = (index) => {
    if (current === index && isPlaying) {
      myPlayer.current.pause();
      setIsPlaying(false);
    } else {
      myPlayer.current.pause();
      myPlayer.current.src = baseurl + songs[index].url;
      myPlayer.current.play();
      setCurrent(index);
      setIsPlaying(true);
    }
  };

  return (
    <AudioContext.Provider
      value={{
        current,
        isPlaying,
        songs,
        myPlayer,
        cargarCancion,
        setIsPlaying,
        setCurrent
      }}
    >
      {children}
      {/* Una única etiqueta de audio para todo el proyecto */}
      <audio ref={myPlayer} />
    </AudioContext.Provider>
  );
};

export default AudioProvider;
