import React from 'react';

const LevelButton = ({children, color, onClick}) => {
    return (
        <button className={`level_button ${color}`} onClick={onClick}>
            {children}
        </button>
    );
};

export default LevelButton;