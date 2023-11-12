import React from 'react';

const StartButton = ({children, onClick}) => {
    return (
        <button className="start_button" onClick={onClick}>
            {children}
        </button>
    );
};

export default StartButton;