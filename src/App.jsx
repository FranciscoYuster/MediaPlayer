// App.jsx
import React from "react";
import AudioProvider from "./Context/AudioContext";
import AudioPlayer from "./Components/AudioPlayer";

function App() {
  return (
    <AudioProvider>
      <AudioPlayer />
    </AudioProvider>
  );
}

export default App;
