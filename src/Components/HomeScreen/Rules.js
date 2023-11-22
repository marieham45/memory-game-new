import React, {useState} from 'react';
import ReadyButton from "../Buttons/ReadyButton";

const instructions = [
    {
        id: 0,
        text: "Select your level.",
    },
    {
        id: 1,
        text: "Click the start button to launch the game.",
    },
    {
        id: 2,
        text: "Try to remember as many animals as possible within the given time limit.",
    },
    {
        id: 3,
        text: "Select the animal on the keyboard and then tap the right field to complete the challenge.",
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
                <div className={`dot ${step === 1 ? "red_dot" : ""}`} ></div>
                <div className={`dot ${step === 2 ? "red_dot" : ""}`} ></div>
                <div className={`dot ${step === 3 ? "red_dot" : ""}`} ></div>
                <div className={`dot ${step === 4 ? "red_dot" : ""}`} ></div>
                <div className="rules_box">
                    <button className={`step_button ${step === 1 ? "hidden" : ""}`} onClick={handlePrevious}>‹</button>
                    <div className="instruction_box">
                        <h3 className="instructions">{instructions[step - 1]?.text}</h3>
                            <div className="illustration_box">
                                {step === 1 && <>
                                    <button className="level_button level_button_illustration green_level_illustration" disabled>Beginner</button>
                                    <button className="level_button level_button_illustration" disabled>Advanced</button>
                                    <button className="level_button level_button_illustration" disabled>Hardcore</button>
                                </>}
                                {step === 2 && <>
                                    <p className="level_limits_illustration"><span style={{color: "#3D8361", fontWeight: "bold"}}>20</span> seconds to remember, <br/>
                                        <span style={{color: "#3D8361", fontWeight: "bold"}}>30</span> seconds to complete the
                                        challenge</p>
                                    <button className="start_button start_button_illustration" disabled>START</button>
                                </>}
                                {step === 3 && <>
                                    <div className="grid grid_illustration">
                                        <div className="grid_field grid_field_illustration">🐳</div>
                                        <div className="grid_field grid_field_illustration">🦘</div>
                                        <div className="grid_field grid_field_illustration">🦭</div>
                                        <div className="grid_field grid_field_illustration">🐘</div>
                                        <div className="grid_field grid_field_illustration">🐒</div>
                                        <div className="grid_field grid_field_illustration">🦥</div>
                                        <div className="grid_field grid_field_illustration">🐘</div>
                                        <div className="grid_field grid_field_illustration">🦔</div>
                                        <div className="grid_field grid_field_illustration">🦨</div>
                                    </div>
                                </>}
                                {step === 4 && <>
                                    <div className="grid grid_illustration">
                                        <div className="grid_field grid_field_illustration"></div>
                                        <div className="grid_field grid_field_illustration"><span className="appear1">🦘</span></div>
                                        <div className="grid_field grid_field_illustration"></div>
                                        <div className="grid_field grid_field_illustration"><span className="appear3">🐘</span></div>
                                        <div className="grid_field grid_field_illustration"></div>
                                        <div className="grid_field grid_field_illustration"><span className="appear2">🦥</span></div>
                                        <div className="grid_field grid_field_illustration"></div>
                                        <div className="grid_field grid_field_illustration"></div>
                                        <div className="grid_field grid_field_illustration"></div>
                                    </div>
                                </>}
                            </div>

                    </div>
                    <button className={`step_button ${step === instructions.length ? "hidden" : ""}`}
                            onClick={handleNext}>›
                    </button>
                </div>


            </div>

            {step === instructions.length &&
                <ReadyButton onClick={onGoToGame}>Got it! Take me <br/> to the game!</ReadyButton>}
        </div>
    );
};

export default Rules;