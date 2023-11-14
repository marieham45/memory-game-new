import React, {useState} from 'react';
import HomeScreenButton from "../Buttons/HomeScreenButton";
import ReadyButton from "../Buttons/ReadyButton";

const instructions = [
    {
        id: 0,
        text: "Select your level.",
        image: process.env.PUBLIC_URL + "/images/select_level.jpg"
    },
    {
        id: 1,
        text: "Click the start button to launch the game.",
        image: process.env.PUBLIC_URL + "/images/start_game.jpg"
    },
    {
        id: 2,
        text: "Try to remember as many animals as possible within the given time limit.",
        image: process.env.PUBLIC_URL + "/images/remember_animals.jpg"
    },
    {
        id: 3,
        text: "Select the animal on the keyboard and then tap the right field to complete the challenge.",
        image: process.env.PUBLIC_URL + "/images/fill_in.jpg"
    }
]

const Rules = ({onGoToGame}) => {
    const [step, setStep] = useState(1);

    const handleNext = () => {
        if (step < instructions.length) {
            setStep(step => step + 1)
        }
    }

    const handlePrevious = () => {
        if (step > 1) {
            setStep(step => step - 1)
        }
    }

    return (
        <div className="rules">

            <div className="rules_instructions">
                <h2>Step {step}</h2>
                <div className="rules_box">
                    <button className="step_button" onClick={handlePrevious}>‹</button>
                    <div className="instruction_box">
                        <h3 className="instructions">{instructions[step - 1]?.text}</h3>
                        <img className="instructions_img" src={instructions[step - 1]?.image} alt='instruction_ilustration'/>
                    </div>
                    <button className="step_button" onClick={handleNext}>›</button>
                </div>


            </div>

            {/*<div className="steps">*/}
            {/*    <button className="step_button" onClick={handlePrevious}>‹</button>*/}
            {/*    <button className="step_button" onClick={handleNext}>›</button>*/}
            {/*</div>*/}


            {step === 4 && <ReadyButton onClick={onGoToGame}>Got it! Take me <br/> to the game!</ReadyButton>}
        </div>
    );
};

export default Rules;