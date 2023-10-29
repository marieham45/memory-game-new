import React, {useState} from "react";
import {animals} from "../Data";
import Header from "./Header";
import Grid from "./Grid";
import StartButton from "./StartButton";
import Keyboard from "./Keyboard";
import ResultButton from "./ResultButton";
import ResetButton from "./ResetButton";

const App = () => {
  const [isGameOn, setGameOn] = useState(false)

  const handleGameStart = () => {
    setGameOn(true)
    console.log("Game started...")
  }
  return <div className="app">
    <Header isGameOn={isGameOn}/>
    <Grid/>
    {!isGameOn && <StartButton onGameStart={handleGameStart}/>}
<Keyboard data={animals}/>
    <ResultButton/>
    <ResetButton/>
  </div>;
};

export default App;
