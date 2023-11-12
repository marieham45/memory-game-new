import React from 'react';
import Header from "./Header";
import Grid from "./Grid";
import GridPlayer from "./GridPlayer";
import Keyboard from "./Keyboard";
import {animals} from "../../Data";
import ResultButton from "../Buttons/ResultButton";
import GridResult from "./GridResult";
import Verdict from "./Verdict";
import Reset from "./Reset";

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
    return (
        <div>
            <Header showCountdown={showCountdown}
                    limitForPlayerInput={limitForPlayerInput}
                    showResult={showResult}
                    skillEvaluation={skillEvaluation}/>
            {!showCountdown && !showResult &&
                <Grid animalsToRemember={animalsToRemember} showAnimalsToRemember={showAnimalsToRemember}/>}
            {showCountdown && !showResult &&
                <>
                    <GridPlayer keyboardValue={keyboardValue} setPlayerInput={setPlayerInput}/>
                    <Keyboard data={animals} setKeyboardValue={setKeyboardValue}/>
                    <ResultButton onResult={onResult}/>
                </>
            }
            {!showCountdown && showResult &&
                <>
                    <GridResult resultAnimals={resultAnimals} playerInput={playerInput}/>
                    <Verdict correctCount={correctCount}/>
                    <Reset onReset={onReset} setShowGameRestartOptions={setShowGameRestartOptions}/>
                </>
            }
        </div>
    );
};

export default Game;