import LevelButton from "../Buttons/LevelButton";
import ResetButton from "../Buttons/ResetButton";
import React from "react";

const GameRestart = ({
                         onTryAgain,
                         setOnReturn,
                         setShowHomeScreen,
                         setShowGameRestartOptions,
                         resetGameWithSameLevel
                     }) => {

    const handleDifferentLevel = () => {
        setOnReturn(true)
        setShowHomeScreen(true)
        setShowGameRestartOptions(false)
        resetGameWithSameLevel()
    }

    const handleBackToResult = () => {
        setShowHomeScreen(false)
        setShowGameRestartOptions(false)
    }

    return (
        <>
            <div className="game_restart">
                <LevelButton onClick={onTryAgain}>Same level</LevelButton>
                <LevelButton onClick={handleDifferentLevel}>Different level</LevelButton>


            </div>
            <ResetButton onClick={handleBackToResult}>Back to result</ResetButton>
        </>


);
};

export default GameRestart;