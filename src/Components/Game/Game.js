import React, {useState} from 'react';
import Header from "./Header";
import Grid from "./Grid";
import GridPlayer from "./GridPlayer";
import Keyboard from "./Keyboard";
import {animals} from "../../Data";
import ResultButton from "../Buttons/ResultButton";
import GridResult from "./GridResult";
import Verdict from "./Verdict";
import Reset from "./Reset";
import Stats from "./Stats";

const Game = ({
                  showCountdown,
                  limitForPlayerInput,
                  showResult,
                  skillEvaluation,
                  animalsToRemember,
                  showAnimalsToRemember,
                  setKeyboardValue,
                  keyboardValue,
                  setPlayerInput,
                  playerInput,
                  onResult,
                  resultAnimals,
                  correctCount,
                  setShowGameRestartOptions,
                  onReset
              }) => {

    const [showStats, setShowStats] = useState(false)

    return (
        <div>
            {!showStats && <Header showCountdown={showCountdown}
                     limitForPlayerInput={limitForPlayerInput}
                     showResult={showResult}
                     skillEvaluation={skillEvaluation}/>}
            {!showStats && !showCountdown && !showResult &&
                <Grid animalsToRemember={animalsToRemember} showAnimalsToRemember={showAnimalsToRemember}/>}
            {!showStats && showCountdown && !showResult &&
                <>
                    <GridPlayer keyboardValue={keyboardValue} setPlayerInput={setPlayerInput}/>
                    <Keyboard data={animals} setKeyboardValue={setKeyboardValue} keyboardValue={keyboardValue}/>
                    <ResultButton onResult={onResult}/>
                </>
            }
            {!showStats && !showCountdown && showResult &&
                <>
                    <GridResult resultAnimals={resultAnimals} playerInput={playerInput}/>
                    <Verdict correctCount={correctCount}/>
                    <Reset onReset={onReset} setShowGameRestartOptions={setShowGameRestartOptions} setShowStats={setShowStats}/>
                </>
            }
            {showStats && <Stats setShowStats={setShowStats}/>}
        </div>
    );
};

export default Game;