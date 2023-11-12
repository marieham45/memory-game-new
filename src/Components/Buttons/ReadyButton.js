import React from 'react';

const ReadyButton = ({children, onClick}) => {
    return (
        <button className="ready_button" onClick={onClick}>
            {children}
        </button>
    );
};

export default ReadyButton;