import React from 'react';

const StartButton = ({onGameStart}) => {
    return (
            <button className="btn" onClick={onGameStart}>
                Give me some animals <br />
                and start the game!
            </button>
    );
};

export default StartButton;