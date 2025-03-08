import "./App.css";
import React, { useState } from "react";
import StartGame from "./components/StartGame";
import PlayGame from "./components/PlayGame";

function App() {
  const [isStarted, setIsStarted] = useState(false);

  const handlePlayGame = function () {
    setIsStarted((prev) => !prev);
  };

  return (
    <>
      {isStarted ? (
        <PlayGame setIsStarted={setIsStarted} />
      ) : (
        <StartGame handler={handlePlayGame} />
      )}
    </>
  );
}

export default App;
