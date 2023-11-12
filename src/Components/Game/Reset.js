import React from 'react';
import ResetButton from "../Buttons/ResetButton";

const Reset = ({setShowGameRestartOptions, onReset}) => {
    return (
        <div>
            <ResetButton onClick={() => setShowGameRestartOptions(true)}>Try again!</ResetButton>
            <ResetButton onClick={onReset}>Back to homepage</ResetButton>
        </div>

    );
};

export default Reset;