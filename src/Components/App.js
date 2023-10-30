import {useState} from "react";
import {animals} from "../Data";
import Header from "./Header";
import Grid from "./Grid";
import StartButton from "./StartButton";
import Keyboard from "./Keyboard";
import ResultButton from "./ResultButton";
import ResetButton from "./ResetButton";

const App = () => {
  const limitForRemembering = 5;
  const [isGameOn, setGameOn] = useState(false)
  const [showCountdown, setShowCountdown] = useState(false)
  const [showHeading, setShowHeading] = useState(true)
  const [showResult, setShowResult] = useState(false)



  const handleGameStart = () => {
    setGameOn(true)

    setTimeout( () => {
      setShowCountdown(true);
      setShowHeading(false);

      setTimeout(() => handleResult(), 10000)
    }, limitForRemembering * 1000);

  }

  const handleResult = () => {
    setShowResult(true)
    setShowCountdown(false)

  }

  const handleReset = () => {
    setGameOn(false)
    setShowCountdown(false)
    setShowHeading(true)
    setShowResult(false)
  }

  return <div className="app">
    <Header isGameOn={isGameOn} showCountdown={showCountdown} showHeading={showHeading} showResult={showResult} limitForRemembering={limitForRemembering}/>
    <Grid/>
    {!isGameOn && <StartButton onGameStart={handleGameStart}/>}
    {showCountdown && <Keyboard data={animals}/>}
    {showCountdown && <ResultButton onResult={handleResult}/>}
    {showResult && <ResetButton onReset={handleReset}/>}
  </div>;
};

export default App;
