import React from 'react';

const LevelButton = ({children, onClick}) => {
    return (
        <button className="level_button" onClick={onClick}>
            {children}
        </button>
    );
};

export default LevelButton;