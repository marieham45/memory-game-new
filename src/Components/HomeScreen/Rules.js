import React from 'react';
import HomeScreenButton from "../Buttons/HomeScreenButton";

const instructions = [
    {
        id: 0,
        text: "Select your level."
    },
    {
        id: 1,
        text: "Click the start button to launch the game."
    },
    {
        id: 2,
        text: "Try to remember as many animals as possible within the given time limit."
    },
    {
        id: 3,
        text: "Fill in the empty fields with the animals you remembered by first selecting the animal on the keyboard and then tapping the right field."
    }
]

const Rules = ({onGoToGame}) => {
    return (
        <div className="rules">
            {instructions.map(instruction => {
                const {id, text} = instruction
                return <h1 className="instructions" key={id}>{text}</h1>
            })}

            <HomeScreenButton onClick={onGoToGame}>Got it! Take me <br/> to the game!</HomeScreenButton>
        </div>
    );
};

export default Rules;