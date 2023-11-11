import React from 'react';

const ResetButton = ({setShowGameRestartOptions, onReset}) => {
    return (
        <div>
            <button className="reset_btn" onClick={() => setShowGameRestartOptions(true)}>
                Try again!
            </button>
            <button className="reset_btn" onClick={onReset}>
                Back to homepage
            </button>

            

        </div>

    );
};

export default ResetButton;