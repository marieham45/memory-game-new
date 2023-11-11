import React from 'react';
import InstructionAddAnimals from "./InstructionAddAnimals";
import Instructions from "./Instructions";

const Rules = ({limitForRemembering, onGoToGame}) => { // todo change to slider with 3 steps, show the button only at the end
    return (
        <div className="rules">
            <h1 className="instructions">First you get a set of 9 animals.</h1>
            <Instructions limitForRemembering={limitForRemembering}/>
            <InstructionAddAnimals/>
            <button className="home_screen_button" onClick={onGoToGame}>Got it! Take me <br/> to the game!</button>
        </div>
    );
};

export default Rules;