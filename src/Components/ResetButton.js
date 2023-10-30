import React from 'react';

const ResetButton = ({onReset}) => {
    return (
        <button className="reset_btn" onClick={onReset}>
            Try again!
        </button>
    );
};

export default ResetButton;